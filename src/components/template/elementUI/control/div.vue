<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import uiControl from './common.js'

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
            let {attr, style} = uiControl.getAttr(this.control)
            console.log('div: ', `<div ${attr} style='${style}' @click.native.prevent=click>${self.attribute['text'].value}</div>`);
            
            var eleFun = function () { 
                 return { 
                    template: `<div ${attr} style='${style}' @click.native.prevent=click>${self.attribute['text'].value}</div>` ,
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