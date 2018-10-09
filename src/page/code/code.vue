<template>
    <div>
        <div class="code-container">
            <codemirror v-model="code" :options="cmOptions"></codemirror>
        </div>
    </div>
</template>

<script>
    // require component
    import { codemirror } from 'vue-codemirror'
    // require styles
    import 'codemirror/lib/codemirror.css'
    // language
    import 'codemirror/mode/vue/vue.js'
    // theme css
    import 'codemirror/theme/base16-light.css'
    // active-line.js
    import 'codemirror/addon/selection/active-line.js'
    // styleSelectedText
    import 'codemirror/addon/selection/mark-selection.js'
    import 'codemirror/addon/search/searchcursor.js'
    // highlightSelectionMatches
    import 'codemirror/addon/scroll/annotatescrollbar.js'
    import 'codemirror/addon/search/matchesonscrollbar.js'
    import 'codemirror/addon/search/searchcursor.js'
    import 'codemirror/addon/search/match-highlighter.js'
    // keyMap
    import 'codemirror/mode/clike/clike.js'
    import 'codemirror/addon/edit/matchbrackets.js'
    import 'codemirror/addon/comment/comment.js'
    import 'codemirror/addon/dialog/dialog.js'
    import 'codemirror/addon/dialog/dialog.css'
    import 'codemirror/addon/search/searchcursor.js'
    import 'codemirror/addon/search/search.js'
    import 'codemirror/keymap/sublime.js'
    // foldGutter
    import 'codemirror/addon/fold/foldgutter.css'
    import 'codemirror/addon/fold/brace-fold.js'
    import 'codemirror/addon/fold/comment-fold.js'
    import 'codemirror/addon/fold/foldcode.js'
    import 'codemirror/addon/fold/foldgutter.js'
    import 'codemirror/addon/fold/indent-fold.js'
    import 'codemirror/addon/fold/markdown-fold.js'
    import 'codemirror/addon/fold/xml-fold.js'

    export default {
        data() {
            return {
                code: '',
                controls: this.$store.state.controls,
                cmOptions: {
                    // codemirror options
                    tabSize: 4,
                    foldGutter: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    keyMap: "sublime",
                    mode: 'text/x-vue',
                    theme: 'base16-light',
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
    
            this.code = ''
            this.controls.forEach(control => {

                let attrs = ''
            
                for (let key in control.attribute) {
                    let codeKey = key
                    if (control.attribute[key].hasOwnProperty('alias')) {
                        codeKey = control.attribute[key].alias
                    } 

                    if (control.attribute[key].type == 'boolean') {
                        if (control.attribute[key].value) {
                            attrs += (':' + codeKey + '="' + control.attribute[key].value + '" ')
                        }
                    } 
                    else if (control.attribute[key].type == 'number') {
                        attrs += (':' + codeKey + '="' + control.attribute[key].value + '" ')
                    } 
                    else {
                        if (control.attribute[key].value.length > 0) {
                            attrs += (codeKey + '="' + control.attribute[key].value + '" ')
                        }
                    }
                }
              
                this.code += `<${control.name} ${attrs}>${control.attribute.hasOwnProperty('text') ? control.attribute['text'].value : ''}</${control.name}>\n`
         
            });
        },
        methods: {
          
        },
    }
</script>

<style scoped>

.code-container {
    text-align: left;
}
</style>