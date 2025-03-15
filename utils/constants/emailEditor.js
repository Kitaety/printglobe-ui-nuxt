const emailType = {
    orderConfirmation: 0,
    orderSampleConfirmation: 1
};

export const emailTypeToName = {
    [emailType.orderConfirmation]: 'Order Confirmation',
    [emailType.orderSampleConfirmation]: 'Order Confirmation - Sample'
};

export const emailCommonParams = [
    {
        title: 'Email Header',
        field: '{{email_header}}'
    },
    {
        title: 'Email Signature',
        field: '{{rep_signature}}'
    }
];

const commonOrderConfirmationParams = [
    {
        title: 'Client Name',
        description: 'Name of Client',
        field: '{{client_name}}'
    },
    {
        title: 'Business Name',
        description: 'Business Name of Partner',
        field: '{{business_name}}'
    },
    {
        title: 'Support email',
        field: '{{support_email}}'
    },
    {
        title: 'Order Number',
        field: '{{order_number}}'
    },
    {
        title: 'Phone',
        description: 'Phone of Partner',
        field: '{{phone}}'
    }
];

export const orderConfirmationParams = [
    ...commonOrderConfirmationParams,
    {
        title: 'Summary of Order Number',
        description: 'Info about Products, Prices, Billing and Shipping addresses and etc.',
        field: '{{order_info}}'
    }
];

export const orderSampleConfirmationParams = [
    ...commonOrderConfirmationParams,
    {
        title: 'Summary of Order Number',
        description: 'Info about Products, Prices, Billing and Shipping addresses and etc.',
        field: '{{order_sample_info}}'
    }
];

export const emailTypeToParams = {
    [emailType.orderConfirmation]: orderConfirmationParams,
    [emailType.orderSampleConfirmation]: orderSampleConfirmationParams
};
