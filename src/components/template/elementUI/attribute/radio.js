let attribute = {
    type: 'radio',
    name: 'sb-el-radio',
    show: false,
    attribute: {
        text: {
            type: 'string',
            value: '',
            default: {
                type: 'string',
                value: ''
            }
        }, 
        label: {
            type: 'string',
            value: '',
            default: {
                type: 'string',
                value: ''
            }
        }, 
        disabled: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
        border: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
        size: {
            type: 'string',
            value: 'small',
            default: {
                type: 'array',
                value: 'mini',
                option: [
                    "medium",
                    "small",
                    "mini"
                ]
            }
        },
    },
}

export default attribute