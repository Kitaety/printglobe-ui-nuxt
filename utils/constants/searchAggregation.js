export const lowerRegex = /(\d+)-/;
export const upperRegex = /-(\d+)/;
export const rangeRegex = /(\d+)-(\d+)/;
export const translatedKeys = {
    prodtimemin: 'Production Time',
    lowprice: 'Price',
    minorder: 'Order Size',
    mcategory: 'Master Category',
    category: 'Category',
    subcategory: 'Sub Category',
    attr: 'Attributes',
    color: 'Color'
};

export const aggregationKeys = {
    productionTime: 'prodtimemin',
    price: 'lowprice',
    orderSize: 'minorder',
    masterCategory: 'mcategory',
    category: 'category',
    subCategory: 'subcategory',
    attributes: 'attr',
    color: 'color'
};

export const endCategoryKeys = 'ategory';
export const categoriesKeys = [aggregationKeys.masterCategory, aggregationKeys.category, aggregationKeys.subCategory];
