<template>
    <div class="home-container">
        <div class="viewport">
            <draggable class="content-container" :options="{group:{ name:'control', pull:'', put:true }}" 
            @start="drag=true" @add="onAdd">
                
                    <component v-for="(control, key) in controls" :key="key"   
                        :index="control.index" 
                        :is="control.name"
                        :control="control"
                        :attribute="control.attribute">
                    </component>
                
            </draggable>
        </div>
        <div class="device-toolbar">
            <div class="device-container">
                <el-cascader
                expand-trigger="hover"
                :options="deviceOptions"
                placeholder="请选择设备类型"
                v-model="selectedOptions"
                @change="deviceChange">
            </el-cascader>
            </div>
            <div class="device-container-tips">
                
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import device from '@/service/device.js'
 
    export default {
        data() {
            return {
                myArray: [
                ],
       
                currentTarget: null,
                deviceOptions: [],
                selectedOptions: [],
            }
        },
        components: {
            draggable,
        },
        created() {
            device.devices.forEach((ele, index) => {
                this.deviceOptions.push({
                    value: ele.type,
                    label: ele.type
                })
                
                let children = []
                device.devices[index].devices.forEach(ele => {
                    children.push({
                        value: ele,
                        label: ele.name
                    })
                });
                this.deviceOptions[index].children = children
            })
        },
        mounted() {
         
        },
        watch: {
            myArray(newValue, oldValue) {
                console.log(newValue)
            }
        },
        computed: {
            controls: {
                get () {
                    return this.$store.state.controls[this.$store.state.currentController.id]
                }
            }
        },
        methods: {
             deviceChange(value) {
                let size = value[1].size
                document.querySelector('.device-container-tips').innerHTML = size.width + ' X ' + size.height
                document.querySelector('.viewport').style.width = size.width + 'px' 
                document.querySelector('.viewport').style.height = size.height + 'px'
            },
            sbELClick (evt) {
                this.currentTarget = evt.currentTarget
        
            },
            onAdd (evt) {
                this.$store.state.currentAddControl = true
                evt.target.removeChild(evt.item)
            }
        },
     
    }
</script>

<style scoped>
    .home-container {
        background-image: linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0),
                          linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0);
        background-position: 0 0,13px 13px;
        background-size: 26px 26px;
        height: 100%;
        position: relative;
    }

    .viewport {
        background-color:#ffffff;
        height: 90%;
        width: 60%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        /* background-image:url('../../assets/logo.png') */
    }

    .device-toolbar {
        background-color: #ffffff;
        height: 10%;
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: left;
    }
    .device-container {
        
        width: 30%;
        display: inline-block;
    }
    .device-container .el-cascader {
        width: 100%;
    }
    .device-container-tips {
        display: inline-block;
    }
    .content-container {
        width: 100%;
        height: 100%;
    }
</style>