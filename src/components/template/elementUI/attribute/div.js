let attribute = {
    type: 'div',
    name: 'sb-div',
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
                    type: 'number',
                    value: '50',
                    default: {
                        type: 'number',
                        value: '50'
                    }
                },
                backgroundColor: {
                    type: 'color',
                    value: 'red',
                    alias: 'background-color',
                    default: {
                        type: 'color',
                        value: ''
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