<template>
    <div class="control-container">
        <div class="title"><span>control</span></div>
        <div class="control-container-box">
            <el-row v-for="(row, rowKey) in rowArray" :key="rowKey" >
                <el-col v-for="(col, colKey) in controls" :key="colKey" :span='24 / showCol'>
                    <div v-if="rowKey * showCol + colKey < controls.length">
                        <draggable :options="{group:{ name:'control',  pull:'', put:false }}" 
                        @start="drag=true" @end="onEnd" @choose="onChoose">
                            <component
                                :initial="true"
                                :id="rowKey * showCol + colKey"
                                :attribute="controls[rowKey * showCol + colKey].attribute" 
                                :is="controls[rowKey * showCol + colKey].name">
                            </component>
                        </draggable>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import draggable from 'vuedraggable'
    import store from '@/vuex/store'
    import elButton from '@/components/elementUI/el-button.vue'
    import elRadio from '@/components/elementUI/el-radio.vue'
    import elSwitch from '@/components/elementUI/el-switch.vue'
    import controls from '@/components/elementUI/control/control.js'

    export default {
        data() {
            return {
                controls: controls,
                rowArray: [true],
            }
        },
        computed: {
            showCol: function() {
                return 3
            },

        },
        components: {
            draggable,

        },
        watch: {
          
        },
        updated() {
            console.log('updated')
      
        },
        methods: {
            onEnd (evt) {
       
                let control = JSON.parse(JSON.stringify(this.controls[evt.item.id]))
                let showCount = this.$store.state.selectedControlsAttributes.length
                control.index = showCount
               this.$store.state.selectedControlsAttributes.push(control)
               this.$store.state.selectedIndex = showCount
      
            },
            onStart (evt) {
                // console.log('onStart')
            },
            onChoose (evt) {
               //  console.log('onChoose')
            },
        }
    }
</script>

<style scoped>
    .control-container {
        background-color: #ffffff;
        height: 50%;
    }
    .control-container .title {
        color: black;
        font-size: 18px;
        border-bottom: 1px solid #eeeeee;
        height: 5%;
    }
    .control-container-box {
        background-color:#bbbbbb;
        height: 95%;
        text-align: center;
    }
</style>