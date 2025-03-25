import type {CartItemPalette} from './color';

export enum AddonTypeEnum {
    simple = 'simple',
    complex = 'complex'
}

export enum AddonPriceModelEnum {
    constant = 'constant',
    runSize = 'run_size'
}

export interface Addon {
    id: number;
    create_date: Date;
    update_date: Date;
    vendor_id: number;
    name: string | null;
    active: boolean;
    optional: boolean;
    addon_type: AddonTypeEnum;
    price_model: AddonPriceModelEnum;
    prices: number[];
    setup_fee: number;
    reorder_fee: number;
    description: string | null;
    display_name: string | null;
    deleted: boolean;
}

export interface CartItemAddon extends Addon {
    cart_item_addon_id: number;
    palettes: CartItemPalette[];
    product_addon_id?: number;
    label?: string;
}
