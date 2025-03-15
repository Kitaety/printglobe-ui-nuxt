export const customPaymentFlowFieldTypes = ['Text'];

export const requiredFieldStates = {
    required: 'Required',
    optional: 'Optional'
};

export const customPaymentFlowFieldTypeSelectItems = customPaymentFlowFieldTypes.map((item, index) => ({label: item, value: index}));
export const requiredFieldStateSelectItems = [
    {
        label: requiredFieldStates.optional,
        value: requiredFieldStates.optional
    },
    {
        label: requiredFieldStates.required,
        value: requiredFieldStates.required
    }
];
