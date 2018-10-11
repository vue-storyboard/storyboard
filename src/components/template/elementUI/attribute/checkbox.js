let attribute = {
    type: 'checkbox',
    name: 'sb-el-checkbox',
    attribute: {
        name: {
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
        trueLabel: {
            type: 'string',
            value: '',
            alias: 'true-label',
            default: {
                type: 'string',
                value: ''
            }
        }, 
        falseLabel: {
            type: 'string',
            value: '',
            alias: 'false-label',
            default: {
                type: 'string',
                value: ''
            }
        }, 
        checked: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
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
                value: [
                    "medium",
                    "small",
                    "mini"
                ]
            }
        },
    },
}

export default attribute