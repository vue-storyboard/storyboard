<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import control from './common.js'

    Vue.component('sb-div', {
        props: [
            'attribute',
            'control',
            'initial',
            'index'
        ],
        computed: {
   
        },
        render: function(createElement) {
            let self = this;
            let attrs = ''
            
            
            for (let key in this.attribute.style.value) {
                let codeKey = key
                if (this.attribute.style.value[key].hasOwnProperty('alias')) {
                    codeKey = this.attribute.style.value[key].alias
                } 

                if (this.attribute.style.value[key].type == 'boolean') {
                    if (this.attribute.style.value[key].value) {
                        attrs += (codeKey + ' ')
                    }
                } 
                else {
                    if (this.attribute.style.value[key].show) {
                        if (this.attribute.style.value[key].hasOwnProperty('unit')) {
                            let unit = this.attribute.style.value[key].unit
                            if (control.isPercentEnd(this.attribute.style.value[key].value)) {
                                unit = ''
                            }
                            attrs += (codeKey + ':' + this.attribute.style.value[key].value + unit + '; ')
                        } else {
                            attrs += (codeKey + ':' + this.attribute.style.value[key].value + '; ')
                        }
                    } else {
                        if (this.attribute.style.value[key].default.value.hasOwnProperty('unit')) {
                            let unit = this.attribute.style.value[key].default.value.unit
                            if (control.isPercentEnd(this.attribute.style.value[key].default.value.value)) {
                                unit = ''
                            }
                            attrs += (codeKey + ':' + this.attribute.style.value[key].default.value + unit + '; ')
                        } else {
                            attrs += (codeKey + ':' + this.attribute.style.value[key].default.value + '; ')
                        }
                    }
              
                    
                }
            
            }
            
            var eleFun = function () { 
                 return { 
                    template: `<div style="${attrs}" @click.native.prevent=click>${self.attribute['text'].value}</div>` ,
                    methods: {
                        click (evt) {
                            self._click(evt)
                        }
                    }
                } 
            } 
            return createElement(eleFun())
        },
        
        methods: {
            _click (evt) {
                if (this.initial === true) {
                    return
                }
               this.$store.state.currentIndex = this.index
               this.$emit('click', evt)
            }
        }
        
    })

    export default {
        
    }
</script>

<style scoped>

</style>