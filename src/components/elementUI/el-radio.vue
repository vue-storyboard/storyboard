<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'

    let Radio = {
        name: 'sb-el-radio',
        styles: [
            "bordered",
        ],
        sizes: [
            "medium",
            "small",
            "mini"
        ],
    }

    Vue.component(Radio.name, {
        props: [
            'attribute',
            'initial',
            'index'
        ],
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
        template: '<el-radio ' +
                '@click.native.prevent="_click" label="" :class="_style" :size="attribute.size">' 
                +'{{attribute.text}}' 
                +'</el-radio>',
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
        Radio
    }
</script>

<style scoped>

</style>