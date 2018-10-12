let attribute = {
    type: 'div',
    name: 'sb-div',
    show: false,
    attribute: {
        text: {
            type: 'string',
            value: 'dd',
            default: {
                type: 'string',
                value: 'div'
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
                    value: './assets/img_default.JPG',
                    alias: 'background-image',
                    default: {
                        type: 'string',
                        value: '',
                    }
                }   
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