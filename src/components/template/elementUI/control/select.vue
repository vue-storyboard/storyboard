<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('sb-el-select', {
        props: [
            'attribute',
            'initial',
            'index'
        ],
        data() {
            return {
                value: ''
            }
        },
        computed: {
   
        },
        render: function(createElement) {
            let self = this;
            let attrs = ''
            
            for (let key in this.attribute) {
                let codeKey = key
                if (this.attribute[key].hasOwnProperty('alias')) {
                    codeKey = this.attribute[key].alias
                } 

                if (this.attribute[key].type == 'boolean') {
                    if (this.attribute[key].value) {
                       attrs += (':' + codeKey + '="' + this.attribute[key].value + '" ')
                    }
                }
                else if (this.attribute[key].type == 'number') {
                    attrs += (':' + codeKey + '="' + this.attribute[key].value + '" ')
                } 
                else {
                    attrs += (codeKey + '="' + this.attribute[key].value + '" ')
                }
            }
            
            var eleFun = function () { 
                 return { 
                    data() {
                        return {
                            value: self.value
                        }
                    },
                    template: `<el-select v-model="value" ${attrs}  @click.native.prevent="click"></el-select>` ,
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