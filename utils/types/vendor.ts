export enum VendorAdditionalHandlingType {
    perCase = 'per_case',
    oneTime = 'one_time'
}
export interface Vendor {
    id: number;
    create_date: Date;
    update_date: Date;
    annual_update_date: Date;
    asi_number: string | null;
    name: string;
    deleted: boolean;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    url: string | null;
    pms_upcharge: number;
    phone: string | null;
    contact_name: string | null;
    contact_email: string | null;
    vendor_code: string | null;
    cs_open_time: string | null;
    cs_close_time: string | null;
    pricing_scheme: string | null;
    price_multiplier: number;
    hazmat_fee: number;
    additional_handling_fee: number;
    additional_handling_type: VendorAdditionalHandlingType;
    cm_id: number;
    annual_update_notes: string | null;
    price_multiplier_notes: string | null;
    is_sample_button_excluded: boolean;
}
