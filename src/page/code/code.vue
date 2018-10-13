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
    import stub from '@/stubs/index.js'

    export default {
        data() {
            return {
                code: stub.vue,
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
                
                let template = ''
                let styles = ''
                this.controls.forEach(control => {
                console.log('style', control);
                    let {attr, style} = uiControl.getAttr(control)

                    if (style.length > 0) {
                        styles += `${control.type} {\n\t\t${style}}`
                    }
                    
                    
                    template += 
                    `
            <${control.type} ${attr}>
                ${control.attribute.hasOwnProperty('text') ? control.attribute['text'].value : ''}
            </${control.type}>
                    `
            
                });
                this.code = this.code.replace(/\{%template%\}/g, template)
                this.code = this.code.replace(/\{%style%\}/g, styles.replace(/;/g, ';\n\t\t'))
            }
        },
    }
</script>

<style scoped>

.code-container {
    text-align: left;
}
</style>