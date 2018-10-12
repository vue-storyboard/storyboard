let component = {
    
    isPercentEnd (string) {
        return /.*?%$/.test(string)
    },
    isPXEnd (string) {
        return /.*?px$/.test(string)
    },

    getAttr (control) {

        var attrObj = {
            attr: '',
            style: ''
        }
        var attrs = attrObj.attr
        let attribute = control.attribute
        for (const key in attribute) {
            if (attribute.hasOwnProperty(key)) {
                const element = attribute[key];
                
                if (key == 'style') {
                    for (const styleKey in element.value) {
                        if (element.value.hasOwnProperty(styleKey)) {

                             const styleElement = element.value[styleKey];
                             attrObj.style += this.getElementAttr(styleElement, control, styleKey, true)
                        }
                    }
                    
                } else {
                    attrObj.attr += this.getElementAttr(element, control, key)
                }
                
            }
        }
   
        return attrObj
    },
    getElementAttr (element, control, key, isStyle) {
        var attr = element
        if (!control.hasOwnProperty('show') || !control.show) {
            attr = element.default
        }
        
        var attrKey = key
        if (attr.hasOwnProperty('alias') || element.hasOwnProperty('alias')) {
            attrKey = attr.alias || element.alias
        }
      
        let attrDelimiter = isStyle ? ':' : '='
        let endDelimiter  = isStyle ? ';' : ' '
        let valDelimiter  = isStyle ? ''  : '"'

        if (attr.type == 'boolean') {
            if (attr.value) {
                return ':' + attrKey + valDelimiter + attr.value + valDelimiter + endDelimiter
            }
        } 
        else if (attr.type == 'number') {
            return ':' + attrKey + attrDelimiter + valDelimiter + attr.value + valDelimiter + endDelimiter
        } 
        else {
            
            if (attr.hasOwnProperty('unit') || element.hasOwnProperty('unit')) {
                let unit = attr.unit || element.unit
                
                if (this.isPercentEnd(attr.value) || this.isPXEnd(attr.value)) {
                    unit = ''
                }

                return attrKey + attrDelimiter + valDelimiter + attr.value + unit + valDelimiter + endDelimiter
            }
            return attrKey + attrDelimiter + valDelimiter + attr.value + valDelimiter + endDelimiter
        }
    }
}

export default component