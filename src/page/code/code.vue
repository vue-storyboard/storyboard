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
    import pretty from 'pretty'
    import classStyle from '@/components/template/elementUI/style/center.js'

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
            
                    let {attr, style} = uiControl.getAttr(control)

                    if (style.length > 0) {
                        styles += `${control.type} {${style}}`
                    }
                    
                    template += 
                    `
                        <${control.type} ${attr}>
                            ${control.attribute.hasOwnProperty('text') ? control.attribute['text'].value : ''}
                        </${control.type}>
                    `

                    for (const key in control.attribute) {
                        if (control.attribute.hasOwnProperty(key)) {
                            const element = control.attribute[key];
                            if (element.hasOwnProperty('className') && element.value.length > 0) {
                                control.parent.className.split(' ').forEach(parentClass => {
                                    if (classStyle[this.camelize(parentClass)]) {
                                        styles += classStyle[this.camelize(parentClass)]
                                    }
                                });
                                
                                styles += classStyle[this.camelize(element.value)]
                            }
                        }
                    }
                });
                
                this.code = pretty(this.code.replace(/\{%style%\}/g, styles))
                this.code = pretty(this.code.replace(/\{%template%\}/g, template))
                
            },
            camelize (words, separator='-') {
                words = words.toLowerCase(words)
                words = words.replace(new RegExp(separator , 'g' ), ' ');
                words = words.replace(/\b\w+\b/g, function(word, index) {
                    if (index == 0) {
                        return word
                    }
                    return word.substring(0,1).toUpperCase()+word.substring(1);}
                )
                return words.replace(new RegExp(' ' , 'g' ), '');
            },
        },
        
    }
</script>

<style scoped>

.code-container {
    text-align: left;
}
</style>