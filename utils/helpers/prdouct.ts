export function getPriceWithDiscount(price: number, discount: number = 0) {
    if (!discount) {
        return price;
    }

    return Number(Number(price * (1 - discount / 100.0)).toFixed(2));
}
