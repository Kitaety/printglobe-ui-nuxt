function limitNumberWithinColorRange(num: number) {
    return Math.min(Math.max(num, 0), 255);
}

export function getColorLighter(hex: string, alpha = 0) {
    const r = limitNumberWithinColorRange(parseInt(hex.slice(1, 3), 16) + (255 - parseInt(hex.slice(1, 3), 16)) * alpha);
    const g = limitNumberWithinColorRange(parseInt(hex.slice(3, 5), 16) + (255 - parseInt(hex.slice(3, 5), 16)) * alpha);
    const b = limitNumberWithinColorRange(parseInt(hex.slice(5, 7), 16) + (255 - parseInt(hex.slice(5, 7), 16)) * alpha);

    return `rgb(${r}, ${g}, ${b})`;
}

export function getColorDarker(hex: string, alpha = 0) {
    const r = limitNumberWithinColorRange(parseInt(hex.slice(1, 3), 16) * (1 - alpha));
    const g = limitNumberWithinColorRange(parseInt(hex.slice(3, 5), 16) * (1 - alpha));
    const b = limitNumberWithinColorRange(parseInt(hex.slice(5, 7), 16) * (1 - alpha));

    return `rgb(${r}, ${g}, ${b})`;
}
