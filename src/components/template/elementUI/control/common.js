let component = {
    
    isPercentEnd (string) {
        return /.*?%$/.test(string)
    },
    isPXEnd (string) {
        return /.*?px$/.test(string)
    },

    getAttr (control, parent) {

        let attrObj = {
            attr: '',
            style: ''
        }
     
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
                    attrObj.attr += this.getElementAttr(element, control, key, false, parent)
                }
                
            }
        }
   
        return attrObj
    },
    getElementAttr (element, control, key, isStyle, parent) {
        let attr = element
        if (!control.hasOwnProperty('show') || !control.show) {
            attr = element.default
        }
        
        let attrKey = key
        if (attr.hasOwnProperty('alias') || element.hasOwnProperty('alias')) {
            attrKey = attr.alias || element.alias
        }
      
        let attrDelimiter = isStyle ? ':' : '='
        let endDelimiter  = isStyle ? ';' : ' '
        let valDelimiter  = isStyle ? ''  : '"'

        if (attr.type == 'boolean') {
            if (attr.value) {
                return ':' + attrKey + attrDelimiter + valDelimiter + attr.value + valDelimiter + endDelimiter
            } else {
                return ''
            }
        } 
        else if (attr.type == 'number') {
            return ':' + attrKey + attrDelimiter + valDelimiter + attr.value + valDelimiter + endDelimiter
        } 
        else {

            if (attrKey == 'text' || attr.value == '') {
                return ''
            }

            if (element.hasOwnProperty('className') || attr.hasOwnProperty('className')) {
                let className = element.className || attr.className
                if (parent) {
                    control.parent = parent
                    parent.className = parent.className + ' ' + attr.value + '-parent'
                }
                
                return 'class=' + '"'+ attr.value +'"'
            }
            
            if (element.hasOwnProperty('unit') || attr.hasOwnProperty('unit')) {
                let unit = element.unit || attr.unit
                
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