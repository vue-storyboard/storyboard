<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import icons from '@/service/icon.js'

    let Button = {
        name: 'sb-el-button',
        types: [
            "primary",
            "success",
            "info",
            "warning",
            "danger",
            "text"
        ],
        styles: [
            "plain",
            "round",
            "circle",
        ],
        sizes: [
            "medium",
            "small",
            "mini"
        ],
        icons: icons,
    }

    Vue.component(Button.name, {
        props: [
            'attribute',
            'initial',
            'index'
        ],
        data() {
            return {
                templateAttr: '',
                templateContent: 'dddddddddd'
            }
        },
        computed: {
            _style () {
                if (this.attribute.styles) {
                    if (typeof this.attribute.styles === 'string') {
                        return 'is-' + this.attribute.styles
                    } else {
                        this.template = '<el-button ' +
                    '@click="_click" :type="attribute.type.value"' +
                    ':class="_style" :size="attribute.size" :icon="attribute.icon.value">' +
                    '{{attribute.text.value}}'+
                    '</el-button>'
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
        render: function(createElement) {
                var self = this;
                return createElement('el-button', {//一个包含模板相关属性的数据对象
                    'class': {
                        foo: true,
                        bar: false
                    },
                    style: {
                        color: 'red',
                        fontSize: '14px'
                    },
                    attrs: {
                        type: 'success'
                    },
                    on: {
                        click: this._click
                    },
                    domProps: {
                        innerHTML: this.attribute.text.value
                    }
                });
            },
        template: '<el-button >{{this.templateContent}}</el-button>',
        methods: {
            _click (evt) {
                console.log('tag', '')
                if (this.initial === true) {
                    return
                }
               this.$store.state.currentIndex = this.index
               this.$emit('click', evt)
            }
        }
    })

    export default {
        Button
    }
</script>

<style scoped>

</style>