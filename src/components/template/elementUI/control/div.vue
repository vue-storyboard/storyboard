<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('sb-div', {
        props: [
            'attribute',
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
                } else if (this.attribute.style.value[key].type == 'number') {
                    attrs += (codeKey + ':' + this.attribute.style.value[key].value + 'px; ')
                } 
                else {
                    attrs += (codeKey + ':' + this.attribute.style.value[key].value + '; ')
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