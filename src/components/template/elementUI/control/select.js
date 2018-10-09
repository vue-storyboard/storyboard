let control = {
    type: 'select',
    name: 'sb-el-select',
    attribute: {
       
        label: {
            type: 'string',
            value: '',
            default: {
                type: 'string',
                value: ''
            }
        }, 
        name: {
            type: 'string',
            value: '',
            default: {
                type: 'string',
                value: ''
            }
        }, 
        placeholder: {
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
        multiple: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
        filterable: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
        clearable: {
            type: 'boolean',
            value: false,
            default: {
                type: 'boolean',
                value: false
            }
        },
   
    },
}

export default control