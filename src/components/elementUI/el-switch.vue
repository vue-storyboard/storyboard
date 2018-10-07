<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'

    let Switch = {
        name: 'sb-el-switch',
        styles: [
            "bordered",
        ],
        sizes: [
            "medium",
            "small",
            "mini"
        ],
    }

    Vue.component(Switch.name, {
        props: [
            'attribute',
            'initial',
            'index'
        ],
        data() {
            return {
                value: true
            }
        },
        computed: {
            _style () {
                if (this.attribute.styles) {
                    if (typeof this.attribute.styles === 'string') {
                        return 'is-' + this.attribute.styles
                    } else {
                        let styles = []
                        this.attribute.styles.forEach(ele => {
                            styles.push('is-' + ele)
                        });
                        return styles.join(' ')
                    } 
                }
                return ''
            }
        },
        template: '<el-switch ' +
                '@click.native.prevent="_click" v-model="value" ' +
                ':active-text="attribute.activeText"' +
                ':inactive-text="attribute.inactiveText"' +
                ':active-color="attribute.activeColor"' +
                ':inactive-color="attribute.inactivecolor">' +
                '{{attribute.text}}' +
                '</el-switch>',
        methods: {
            _click (evt) {
                if (this.initial === true) {
                    return
                }
               this.$store.state.selectedIndex = this.index
               this.$emit('click', evt)
            }
        }
        
    })

    export default {
        Switch
    }
</script>

<style scoped>

</style>