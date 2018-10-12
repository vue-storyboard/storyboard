<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import uiControl from './common.js'

    Vue.component('sb-el-radio', {
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
            let attrs = uiControl.getAttr(this.control).attr
            console.log(attrs);
            var eleFun = function () { 
                 return { 
                    template: `<el-radio ${attrs} @click.native.prevent=click>${self.attribute['text'].value}</el-radio>` ,
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