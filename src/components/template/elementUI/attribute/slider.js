let attribute = {
    type: 'slider',
    name: 'sb-el-slider',
    show: false,
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
       
    },
}

export default attribute