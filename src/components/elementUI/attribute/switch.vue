<template>
    <div>
        <el-row>
            <el-col :span='tipCol'>
                <span>Text</span>
            </el-col>
            <el-col :span='contentCol'>
                <el-input v-model="selectedControlAttribute.text.value" size="mini" placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='tipCol'>
                <span>Style</span>
            </el-col>
            <el-col :span='contentCol'>
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
            <el-col :span='tipCol'>
                <span>Size</span>
            </el-col>
            <el-col :span='contentCol'>
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
            <el-col :span='tipCol'>
                <span>ActiveText</span>
            </el-col>
            <el-col :span='contentCol'>
                <template>
                    <el-input v-model="selectedControlAttribute.activeText.value"  size="mini" placeholder="请输入文字"></el-input>
                </template>
            </el-col>
        </el-row>
           <el-row>
            <el-col :span='tipCol'>
                <span>InactiveText</span>
            </el-col>
            <el-col :span='contentCol'>
                <template>
                    <el-input v-model="selectedControlAttribute.inactiveText.value"  size="mini" placeholder="请输入文字"></el-input>
               
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='tipCol'>
                <span>ActiveColor</span>
            </el-col>
            <el-col :span='contentCol'>
                <template>
                    <el-col :span='18'>
                        <el-input v-model="selectedControlAttribute.activeColor.value"  size="mini" placeholder="请输入颜色"></el-input>
                    </el-col>
                    <el-color-picker v-model="selectedControlAttribute.activeColor.value" size="mini"></el-color-picker>
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='tipCol'>
                <span>InactiveColor</span>
            </el-col>
            <el-col :span='contentCol'>
                <template>
                    <el-col :span='18'>
                        <el-input v-model="selectedControlAttribute.inactivecolor.value"  size="mini" placeholder="请输入颜色"></el-input>
                    </el-col>
                    <el-color-picker v-model="selectedControlAttribute.inactivecolor.value" size="mini"></el-color-picker>
                </template>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import elSwitch from '@/components/elementUI/el-switch.vue'
    export default {
        data() {
            return {
                styles: elSwitch.Switch.styles,
                sizes: elSwitch.Switch.sizes,
                value: ''
            }
        },
        computed: {
            tipCol () {
                return 10
            },
            contentCol () {
                return 24 - this.tipCol
            },
            currentIndex: {
                get () {
                    return this.$store.state.currentIndex
                }
            },
            selectedControlAttribute: {
                get () {
                    
                    if (this.$store.state.controls.length > 0) {
                        return this.$store.state.controls[this.$store.state.currentIndex].attribute
                    }
                    return {}
                }
            },
        },
    }
</script>

<style scoped>

</style>