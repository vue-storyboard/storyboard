let attribute = {
    type: 'div',
    name: 'sb-div',
    show: false,
    parent: null,
    attribute: {
        text: {
            type: 'string',
            value: 'dd',
            default: {
                type: 'string',
                value: 'div'
            }
        },
        center: {
            type: 'string',
            className: 'center-type',
            value: '',
            sbDefault: '',
            default: {
                type: 'array',
                value: '',
                option: [
                    'sb-default',
                    "sb-center",
                    "sb-vertical-center",
                    "sb-horizontally-center",
                ]
            }
        },
        style: {
            type: 'css',
            value: {
                width: {
                    type: 'string',
                    value: '50',
                    unit: 'px',
                    default: {
                        type: 'string',
                        value: '30',
                        // unit: 'px',
                    }
                },
                height: {
                    type: 'string',
                    value: '50',
                    unit: 'px',
                    default: {
                        type: 'string',
                        value: '30',
                        unit: 'px',
                    }
                },
                backgroundColor: {
                    type: 'color',
                    value: 'red',
                    alias: 'background-color',
                    default: {
                        type: 'color',
                        value: 'green',
                        alias: 'background-color',
                    }
                },
                backgroundImage: {
                    type: 'string',
                    value: '',
                    alias: 'background-image',
                    default: {
                        type: 'string',
                        value: '',
                    }
                },
                position: {
                    type: 'string',
                    value: '',
                    default: {
                        type: 'array',
                        value: '',
                        option: [
                            "absolute",
                            "relative",
                            "static",
                            "inherit",
                        ]
                    }
                },                           
                top: {
                    type: 'string',
                    value: '',
                    unit: 'px',
                    default: {
                        type: 'string',
                        value: '',
                    }
                },
                bottom: {
                    type: 'string',
                    value: '',
                    unit: 'px',
                    default: {
                        type: 'string',
                        value: '',
                    }
                },
                left: {
                    type: 'string',
                    value: '',
                    unit: 'px',
                    default: {
                        type: 'string',
                        value: '',
                    }
                },
                right: {
                    type: 'string',
                    value: '',
                    unit: 'px',
                    default: {
                        type: 'string',
                        value: '',
                    }
                },
                
            },
            default: {
                type: 'css',
                value: {
                    
                }
            }
            
        }
        
    },
}

export default attribute