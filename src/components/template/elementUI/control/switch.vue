<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import uiControl from './common.js'

    Vue.component('sb-el-switch', {
        props: [
            'attribute',
            'control',
            'initial',
            'index'
        ],
        data() {
            return {
                value: false
            }
        },
        computed: {
   
        },
        render: function(createElement) {
            let self = this;
            let attrs = uiControl.getAttr(this.control).attr

            var eleFun = function () { 
                 return { 
                    data() {
                        return {
                            value: self.value
                        }
                    },
                    template: `<el-switch v-model="value" ${attrs}  @click.native.prevent="click"></el-switch>` ,
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