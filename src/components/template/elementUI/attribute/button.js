import icons from '@/service/icon.js'

let attribute = {
    
    type: 'button',
    name: 'sb-el-button',
    attribute: {
        text: {
            type: 'string',
            value: '',
            default: {
                type: 'string',
                value: ''
            }
        },
        type: {
            type: 'string',
            value: '',
            default: {
                type: 'array',
                value: [
                    "primary",
                    "success",
                    "info",
                    "warning",
                    "danger",
                    "text"
                ]
            }
        },
        plain: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
        round: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
        circle: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
        loading: {
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
        icon: {
            type: 'string',
            value: '',
            default: {
                type: 'array',
                value: icons
            }
        },
    },
    
}

export default attribute