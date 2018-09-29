<template>
    <div class="attribute-container">
        <div class="title"><span>attribute</span></div>
        <el-row>
            <el-col :span='6'>
                <span>Text</span>
            </el-col>
            <el-col :span='18'>
                <el-input v-model="selectedControlAttribute.text" size="mini" placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <span>Type</span>
            </el-col>
            <el-col :span='18'>
                <template>
                    <el-select size="mini" v-model="selectedControlAttribute.type" placeholder="请选择">
                        <el-option
                        v-for="item in types"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <span>Style</span>
            </el-col>
            <el-col :span='18'>
                <template>
                    <el-select size="mini" v-model="selectedControlAttribute.styles" multiple placeholder="请选择">
                        <el-option
                        v-for="item in styles"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <span>Size</span>
            </el-col>
            <el-col :span='18'>
                <template>
                    <el-select size="mini" v-model="selectedControlAttribute.size" placeholder="请选择">
                        <el-option
                        v-for="item in sizes"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <span>Icon</span>
            </el-col>
            <el-col :span='18'>
                <template>
                    <el-select size="mini" v-model="selectedControlAttribute.icon" placeholder="请选择">
                        <el-option
                        v-for="item in icons"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import elementButton from '@/components/elementUI/el-button.vue'
    export default {
        data() {
            return {
                types: elementButton.button.types,
                styles: elementButton.button.styles,
                sizes: elementButton.button.sizes,
                icons: elementButton.button.icons,
                value: ''
            }
        },
        computed: {
            selectedIndex: {
                get () {
                    return this.$store.state.selectedIndex
                }
            },
            selectedControlAttribute: {
                get () {
                    
                    if (this.$store.state.selectedControlsAttributes.length > 0) {
                        // console.log(this.$store.state.selectedControlsAttributes)
                        return this.$store.state.selectedControlsAttributes[this.$store.state.selectedIndex].attribute
                    }
                    return {}
                }
            },
        },
    }
</script>

<style scoped>
    .attribute-container {
        background-color: #eeeeee;
        height: 50%;
    }
    .attribute-container .title {
        color: black;
        font-size: 18px;
        border-bottom: 1px solid #dddddd;
        height: 5%;
    }
</style>