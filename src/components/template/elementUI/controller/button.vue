<template>
    <div>
        <el-row v-for="(attr, key) in attribute" :key="key">
            <el-col :span='7'>
                <span>{{key}}</span>
            </el-col>
            <el-col :span='17'>
                <div v-if="attr.default.type === 'string'">
                    <el-input v-model="attribute[key].value" size="mini" placeholder="请输入内容"></el-input>
                </div>
                <div v-else-if="attr.default.type === 'boolean'">
                    <el-switch
                        v-model="attribute[key].value"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                    </el-switch>
                </div>
                <div v-else-if="attr.default.type === 'array'">
                    <el-select size="mini" v-model="attribute[key].value" placeholder="请选择">
                        <el-option
                        v-for="item in attribute[key].default.value"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </div>
                <div v-else>
                
                </div>
                
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        data() {
            return {
              
            }
        },
        mounted () {

        },
        computed: {
            attribute: {
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