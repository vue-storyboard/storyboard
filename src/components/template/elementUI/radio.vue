<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('sb-el-radio', {
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
            
            
            for (let key in this.attribute) {
                if (this.attribute[key].type == 'boolean') {
                    if (this.attribute[key].value) {
                        attrs += (key + ' ')
                    }
                } else {
                    attrs += (key + '="' + this.attribute[key].value + '" ')
                }
            }

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