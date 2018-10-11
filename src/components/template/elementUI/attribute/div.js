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