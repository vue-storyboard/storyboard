let component = {

    isPercentEnd (string) {
        return /.*?%$/.test(string)
    },

    getAttr (control) {
        
        var attrs = ''
        let attribute = control.attribute
        for (const key in attribute) {
            if (attribute.hasOwnProperty(key)) {
                const element = attribute[key];
                if (element == 'style') {
                    
                } else {
                    var attr = element
                    if (!control.hasOwnProperty('show') || !control.show) {
                        attr = element.default
                    }

                    var attrKey = key
                    if (attr.hasOwnProperty('alias') || element.hasOwnProperty('alias')) {
                        attrKey = attr.alias || element.alias
                    }

                    if (attr.type == 'boolean') {
                        if (attr.value) {
                            attrs += (':' + attrKey + '="' + attr.value + '" ')
                        }
                    } 
                    else if (attr.type == 'number') {
                        attrs += (':' + attrKey + '="' + attr.value + '" ')
                    } 
                    else {
                        attrs += (attrKey + '="' + attr.value + '" ')
                    }
                }
            }
        }
        
        
        return attrs
    }
}

export default component