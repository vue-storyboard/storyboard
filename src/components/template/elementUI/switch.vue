<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('sb-el-switch', {
        props: [
            'attribute',
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
            let attrs = ''
            
            for (let key in this.attribute) {
                if (this.attribute[key].type == 'boolean') {
                    if (this.attribute[key].value) {
                        attrs += (key + ' ')
                    }
                } else {
                    if (this.attribute[key].hasOwnProperty('alias')) {
                        attrs += (this.attribute[key].alias + '="' + this.attribute[key].value + '" ')
                    } else {
                        attrs += (key + '="' + this.attribute[key].value + '" ')
                    }
                }
            }
       
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