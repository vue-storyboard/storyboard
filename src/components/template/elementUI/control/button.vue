<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import uiControl from './common.js'

    Vue.component('sb-el-button', {
        props: [
            'attribute',
            'control',
            'initial',
            'index'
        ],
        data() {
            return {
        
            }
        },
        computed: {
   
        },
        render: function(createElement) {
            let self = this;
            let attrs = uiControl.getAttr(this.control)

            var eleFun = function () { 
                 return { 
                    template: `<el-button ${attrs} @click=click>${self.attribute['text'].value}</el-button>` ,
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