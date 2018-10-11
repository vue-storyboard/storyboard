let attribute = {
    type: 'inputNumber',
    name: 'sb-el-input-number',
    attribute: {
        min: {
            type: 'number',
            value: 0,
            default: {
                type: 'number',
                value: 0
            }
        }, 
        max: {
            type: 'number',
            value: 0,
            default: {
                type: 'number',
                value: 100
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
        showStops: {
            type: 'boolean',
            value: false,
            alias: 'show-stops',
            default: {
                type: 'boolean',
                value: false
            }
        },
        showTooltip: {
            type: 'boolean',
            value: false,
            alias: 'show-tooltip',
            default: {
                type: 'boolean',
                value: false
            }
        },
        step: {
            type: 'number',
            value: 0,
            default: {
                type: 'number',
                value: 1
            }
        },
        size: {
            type: 'string',
            value: 'mini',
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