let attribute = {
    type: 'switch',
    name: 'sb-el-switch',
    attribute: {
        text: {
            type: 'string',
            value: '',
            default: {
                type: 'string',
                value: ''
            }
        },
        activeText: {
            type: 'string',
            value: '',
            alias: 'active-text',
            default: {
                type: 'string',
                value: ''
            }
        },
        inactiveText: {
            type: 'string',
            value: '',
            alias: 'inactive-text',
            default: {
                type: 'string',
                value: ''
            }
        },
        activeColor: {
            type: 'color',
            value: '',
            alias: 'active-color',
            default: {
                type: 'color',
                value: ''
            }
        },
        inactiveColor: {
            type: 'color',
            value: '',
            alias: 'inactive-color',
            default: {
                type: 'color',
                value: ''
            }
        },
    },
}

export default attribute