<template>
    <div class="control-container">
        <div class="title"><span>control</span></div>
        <div class="control-container-box">
            <el-row v-for="(row, rowKey) in rowArray" :key="rowKey" >
                <el-col v-for="(col, colKey) in controls" :key="colKey" :span='24 / showCol' 
                        v-show="rowKey * showCol + colKey < controls.length && controls[rowKey * showCol + colKey].show">
                  
                    <div v-if="rowKey * showCol + colKey < controls.length">
                        <draggable :options="{group:{ name:'control',  pull:'move', put:false }}" @start="drag=true" @end="drag=false" @remove="onRemove" @choose="onChoose">
                            <component 
                                :id="rowKey * showCol + colKey"
                                :index="controls[rowKey * showCol + colKey].tag.index" 
                                :is="controls[rowKey * showCol + colKey].name" 
                                :text="controls[rowKey * showCol + colKey].attribute.text" 
                                :type="controls[rowKey * showCol + colKey].attribute.type" 
                                :styles="controls[rowKey * showCol + colKey].attribute.styles" 
                                :size="controls[rowKey * showCol + colKey].attribute.size"
                                :icon="controls[rowKey * showCol + colKey].attribute.icon">
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
    import elementButton from '@/components/elementUI/el-button.vue'
    import elementRadio from '@/components/elementUI/el-radio.vue'
  
    export default {
        data() {
            return {
                controls: this.$store.state.controls,
                rowArray: [true],
                showArray: []
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
            controls (newVal, oldVal) {
                let obj = {}
                obj[newVal[0].name] = {
                    tag: {
                        id: newVal[0].tag.id,
                        index: newVal[0].tag.index
                    }
                }

                newVal.map(element => {
                    if (obj.hasOwnProperty(element.name) && 
                        obj[element.name].hasOwnProperty('tag') && 
                        element.tag.index > obj[element.name].tag.index) {
                           obj[element.name] = {
                                tag: {
                                    id: element.tag.id,
                                    index: element.tag.index
                                }
                            }
                    } else {
                        obj[element.name] = {
                            tag: {
                                id: element.tag.id,
                                index: element.tag.index
                            }
                        }
                    }
                });
           
                newVal.map((element, index) => {
                    element.show = false
                    element.newIndex = 0
                    if (element.tag.index >= obj[element.name].tag.index) {
                        element.show = true
                        this.showArray.push(element)
                    }
                    return element
                })
                
            }
        },
        updated() {
            console.log('updated')
        },
        methods: {
            onRemove (evt) {
                console.log('remove')
                this.test = showCount
                let control = JSON.parse(JSON.stringify(this.controls[evt.item.id]))
                let showCount = this.$store.state.selectedControlsAttributes.length
                control.tag = {
                    id: evt.item.id,
                    index: showCount,
                    show: true,
                    newIndex: 2
                }
                
                this.$store.state.selectedControlsAttributes.push(this.controls[evt.item.id])
                console.log(this.$store.state.selectedControlsAttributes)
                control.tag.index = showCount + 1
                this.controls.push(control)
             
                this.$store.state.selectedIndex = showCount
                evt.item.selectedIndex = showCount
               console.log(this.$store.state.selectedIndex)
            },
            onStart (evt) {
                // console.log('onStart')
            },
            onChoose (evt) {
                // console.log('onChoose')
            }
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
        background-color:red;
        height: 95%;
        text-align: center;
    }
</style>