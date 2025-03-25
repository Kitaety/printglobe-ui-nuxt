/* @flow */

import {getPriceWithDiscount} from '../helpers/prdouct';
import type {ProductOption, ProductSpecial} from '../types/product';

export default function calculateUnitPrice(
    quantity: number,
    option: ProductOption | undefined,
    quantities: number[],
    special: ProductSpecial,
    discount: number = 0
) {
    const special_option = special ? special.special_options.find(element => element.product_option_id === option?.id) : undefined;
    if (!option) {
        return 0;
    }
    for (let i = 0; i < quantities.length; i++) {
        if (quantity < quantities[i]) {
            if (i > 0) {
                if (special_option && special_option.prices[i - 1]) {
                    return special_option.prices[i - 1];
                }
                if (discount) {
                    return getPriceWithDiscount(option.prices[i - 1], discount);
                }
                return option.prices[i - 1];
            } else {
                //Order isn't big enough to place
                if (special_option && special_option.prices[i]) {
                    return special_option.prices[i];
                }
                if (discount) {
                    return getPriceWithDiscount(option.prices[i], discount);
                }
                return option.prices[i];
            }
        }
    }
    if (special_option && special_option.prices[special_option.prices.length - 1]) {
        return special_option.prices[special_option.prices.length - 1];
    }
    if (discount) {
        return getPriceWithDiscount(option.prices[option.prices.length - 1], discount);
    }
    return option.prices[option.prices.length - 1];
}

export function calculateMinUnitPrice(options: ProductOption[], special: ProductSpecial) {
    const special_options = special ? special.special_options : [];
    let minPrice = Number.MAX_VALUE;
    for (let i = 0; i < special_options.length; i++) {
        const option = special_options[i];
        for (let j = 0; j < option.prices.length; j++) {
            if (option.prices[j] && option.prices[j] < minPrice) {
                minPrice = option.prices[j];
            }
        }
    }
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        for (let j = 0; j < option.prices.length; j++) {
            if (option.prices[j] < minPrice && option.prices[j] > 0) {
                minPrice = option.prices[j];
            }
        }
    }
    return minPrice;
}
