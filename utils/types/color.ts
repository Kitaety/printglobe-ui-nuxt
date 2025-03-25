export enum PaletteTypeEnum {
    surface = 'surface',
    imprint = 'imprint',
    extra = 'extra'
}

export interface Palette {
    id: number;
    create_date: Date;
    update_date: Date;
    name: string;
    palette_type: PaletteTypeEnum;
    vendor_id: number | null;
    minimum_quantity: number;
    notes: string | null;
    deleted: boolean;
    imprint_colors?: ImprintColor[];
    surface_colors?: SurfaceColor[];
    options: PaletteExtraOption[];
}

export interface CartItemPalette extends Palette {
    option: SurfaceColor | ImprintColor | PaletteExtraOption;
    label?: string;
    palette_option_id: number;
    product_addon_id: number;
}

export interface ImprintColor {
    id: number;
    create_date: Date;
    update_date: Date;
    name: string;
    rgb_value?: string;
    pms_value?: string;
    upcharge: number;
    palette_id: number;
    show_first: boolean | null;
    deleted: boolean;
    rgb?: string[];
}

export interface SurfaceColor {
    id: number;
    create_date: Date;
    update_date: Date;
    name: string;
    upcharge: number;
    palette_id: number;
    show_first: boolean | null;
    deleted: boolean;
    rgb?: string[];
    search_ids?: number[];
    search_names?: string[];
}

export interface PaletteExtraOption {
    show_first: boolean;
    id: number;
    name: string;
    upcharge: number;
    vendor_id: number | null;
}
