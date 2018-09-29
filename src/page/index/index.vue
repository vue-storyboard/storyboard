<template>
  <div id="index-container">
         <el-row>
            <el-col :span='6' class="index-container-col">
                <scene></scene>
            </el-col>
            <el-col :span='12' class="index-container-col">
                <home></home>
            </el-col>
            <el-col :span='6' class="index-container-col">
                    <attribute></attribute>
                    <control></control>
            </el-col>
         </el-row>
    
    
  </div>
</template>

<script>
    import scene from '@/page/scene/scene.vue'
    import home from '@/page/home/home.vue'
    import attribute from '@/page/attribute/attribute.vue'
    import control from '@/page/control/control.vue'

    export default {
        components: {
            scene,
            home,
            attribute,
            control
        },
        mounted: function() {
            let clientHeight = document.body.clientHeight;
            let cols = document.getElementsByClassName("index-container-col");
            for (const col of cols) {
                col.style.height = clientHeight + 'px'
            }
        },
    }
</script>

<style scoped>
 
</style>