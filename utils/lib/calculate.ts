import {getPriceWithDiscount} from '../helpers/prdouct';
import type {ProductOption, Product} from '../types/product';
import {minQuantityPerBox} from '../constants/sampleProduct';
import calculateUnitPrice from './calculateUnitPrice';
import type {ImprintColor, SurfaceColor} from '../types/color';
import type {Addon, CartItemAddon} from '../types/addon';

const calculateSurfaceColorTotal = (surfaceColor: SurfaceColor) => (!isEmpty(surfaceColor) ? Number(surfaceColor.upcharge) : 0);

const sampleProductIsFree = (units: number | null) => (units || 0) > 999;

const calculateSubtotalForSampleProduct = (units: number | null, prices: number[], surfaceColor: SurfaceColor, discount: number) =>
    sampleProductIsFree(units) ? 0 : getPriceWithDiscount(prices[prices.length - 1], discount) + calculateSurfaceColorTotal(surfaceColor);

export const getCustomPMSFee = (imprint_colors: ImprintColor[], product: Product, option: ProductOption | undefined) => {
    const nonCustomChosenImprints = imprint_colors.filter(color => color.id).length;
    let totalImprintsForOption;
    if (product.price_model === 'per color per side') {
        totalImprintsForOption = (option?.side_1_colors || 0) + (option?.side_2_colors || 0);
    } else {
        totalImprintsForOption = option?.side_1_colors || 0;
    }

    const [customImprintColor] = imprint_colors.filter(color => !color.id);
    if (customImprintColor) {
        return customImprintColor.upcharge * (totalImprintsForOption - nonCustomChosenImprints);
    } else {
        return 0;
    }
};

export const getSetupFee = (product: Product, option: ProductOption | undefined, addons: Addon[] = []) => {
    const addonSetupFee = useFilter(addons, addon => !!addon.setup_fee && addon.optional === true)
        .map(addon => Number(addon.setup_fee))
        .values()
        .reduce((total, current) => total + current, 0);

    const baseSetupFee = Number(option?.flat_setup_fee || 0) > 0 ? Number(option?.flat_setup_fee || 0) : Number(product.setup_fee) * (option?.setups || 1);

    return baseSetupFee + addonSetupFee;
};

export const getHazmatFee = (product: Product, quantity: number) => {
    if (product.apply_vendor_hazmat_fee === true) {
        return Number(product.vendor.hazmat_fee) * Math.ceil(quantity / (product.quantity_per_box || minQuantityPerBox));
    } else {
        return 0;
    }
};

export const calculateAddonPrice = (addon: CartItemAddon, quantities: number[], quantity: number) => {
    let upcharges = 0;
    if (addon.addon_type === 'complex') {
        const productOptionsUpcharges = useFilter(addon.palettes, p => !!p.option || !!p.palette_option_id)
            .map(p => {
                if (p.option) {
                    return p.option;
                } else {
                    if (p.palette_type === 'extra') {
                        return p.options.find(o => o.id === p.palette_option_id);
                    } else if (p.palette_type === 'surface') {
                        return p.surface_colors?.find(sc => sc.id === p.palette_option_id);
                    } else if (p.palette_type === 'imprint') {
                        return p.imprint_colors?.find(ic => ic.id === p.palette_option_id);
                    }
                }
            })
            .map(o => o?.upcharge || 0)
            .values();

        upcharges = productOptionsUpcharges.reduce((total, current) => total + current, 0);
    }

    if (!addon.prices) {
        return upcharges;
    }

    if (addon.price_model === 'constant' || quantity < quantities[0]) {
        return addon.prices[0] + upcharges;
    }
    for (let i = 1; i < quantities.length; i++) {
        if (quantities[i] > quantity) {
            return addon.prices[i - 1] + upcharges;
        }
    }
    return addon.prices[quantities.length - 1] + upcharges;
};

export const calculateSubtotal = (
    quantity: number,
    option: ProductOption | undefined,
    product: Product,
    addons: CartItemAddon[] = [],
    imprint_colors: ImprintColor[] = [],
    surface_color: SurfaceColor,
    isSampleProduct: boolean = false,
    discount: number = 0
) => {
    if (isSampleProduct) {
        return calculateSubtotalForSampleProduct(product.price_units, option?.prices || [], surface_color, discount);
    }

    const {quantities, special, price_units} = product;
    const unitPrice = calculateUnitPrice(quantity, option, quantities, special, discount);
    let addonPrices = 0;
    if (isEmpty(addons)) {
        addonPrices = addons.map(addon => calculateAddonPrice(addon, quantities, quantity)).reduce((total, current) => total + current, 0);
    }

    let imprintColorTotal = 0;
    if (!isEmpty(imprint_colors)) {
        const imprintColorUpcharges = useFilter(imprint_colors, color => !!color.id)
            .map(color => color.upcharge)
            .values();
        imprintColorTotal = imprintColorUpcharges.reduce((total, current) => total + Number(current), 0);
    }

    const surfaceColorTotal = calculateSurfaceColorTotal(surface_color);

    return (
        ((Number(unitPrice.toString()) + Number(addonPrices) + Number(imprintColorTotal) + Number(surfaceColorTotal)) * Number(quantity)) /
        Number(price_units)
    ).toFixed(2);
};

export const calculateTotal = (
    quantity: number,
    option: ProductOption | undefined,
    product: Product,
    addons: CartItemAddon[] = [],
    imprint_colors: ImprintColor[] = [],
    surface_color: SurfaceColor,
    isSampleProduct: boolean = false,
    discount: number = 0
) => {
    const subtotal = Number(calculateSubtotal(quantity, option, product, addons, imprint_colors, surface_color, isSampleProduct, discount));
    const total = isSampleProduct
        ? subtotal
        : subtotal + getCustomPMSFee(imprint_colors, product, option) + getSetupFee(product, option, addons) + getHazmatFee(product, quantity);

    return Number(total.toFixed(2));
};
