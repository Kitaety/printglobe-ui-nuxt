export function getWindowInnerWidth() {
    return typeof window !== 'undefined' ? window.innerWidth : 0;
}

export function onShopperApprovedContextMenu() {
    const d = new Date();
    alert(`Copying Prohibited by Law - This image and all included logos are copyrighted by Shopper Approved ${d.getFullYear()}.`);
    return false;
}

export function getRootUrl() {
    return typeof window !== 'undefined' ? window.location.origin : '';
}

export function getTableCellHeaders(subHeaderIndex: number, rowIndex: number, cellIndex: number, colSpan: number = 1) {
    let headers = isNumber(subHeaderIndex) ? `sub-header-${subHeaderIndex} ` : '';
    headers += `row-header-${rowIndex} `;

    if (colSpan) {
        headers += new Array(colSpan)
            .fill(0)
            .map(() => `col-header-${cellIndex}`)
            .join(' ');
    }

    return headers;
}
