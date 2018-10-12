<template>
    <div>
        <div class="code-container">
            <codemirror v-model="code" :options="cmOptions"></codemirror>
        </div>
    </div>
</template>

<script>
    import uiControl from '@/components/template/elementUI/control/common.js'

    // require component
    import { codemirror } from 'vue-codemirror'
    import codePlugin from './index.js'

    export default {
        data() {
            return {
                code: '',
                controls: this.$store.state.controls[this.$store.state.currentController.id],
                cmOptions: {
                    // codemirror options
                    tabSize: 4,
                    foldGutter: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    keyMap: "sublime",
                    mode: 'text/x-vue',
                    theme: 'cobalt',
                    extraKeys: { "Ctrl": "autocomplete" },
                    hintOptions:{
                        completeSingle: false
                    }
                }
            }
        },
        components: {
            codemirror
        },
        mounted () {
            this.showCode()
        },
        methods: {
            showCode () {
                this.code = ''
                this.controls.forEach(control => {

                    let {attr, style} = uiControl.getAttr(control)

                    if (style.length > 0) {
                        style = `style='${style}'`
                    }
                    this.code += `<${control.name} ${attr} ${style}>\n${control.attribute.hasOwnProperty('text') ? control.attribute['text'].value : ''}\n</${control.name}>\n`
            
                });
            }
        },
    }
</script>

<style scoped>

.code-container {
    text-align: left;
}
</style>