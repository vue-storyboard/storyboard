<template>
  <div class="scene-container">
    <div class="title"><span>scene</span></div>
    
      <el-tree :data="treeData" node-key="treeId" default-expand-all :expand-on-click-node="true" @node-click="handleNodeClick" 
  highlight-current>
        
        <span class="custom-tree-node" slot-scope="{ node, data }" >
          <span :node-id="node.id">
            <input v-if="data.rename" style="width: 50px" @click.stop="" @focus.stop="" @blur.stop="onBlur($event,node)" type="text" value="">
            <span v-else>{{data.label}}</span>
          </span>
          <span v-if="data.pid==0">
            <el-button type="text" size="mini" @click.stop="() => rename(node,data)">
              <span>rename</span>
            </el-button>
            <el-button type="text" size="mini" @click.stop="() => showCode(data)">
              <span>&lt;&gt;</span>
            </el-button>
          </span>
        
        </span>
      </el-tree>

  </div>
</template>

<script>
  export default {
     data() {
      return {
        treeId: 1000,
        controls: this.$store.state.controls,

        treeData: [
          {
            pid: 0,
            id: 1,
            rename: false,
            label: '文件 1',
            children: []
          },
          {
            pid: 0,
            id: 2,
            rename: false,
            label: '文件 2',
            children: []
          }
        ]
      }
    },
    watch: {
      controls(newValue, oldValue) {
          let treeChildrenData = this.treeData[0].children
          newValue.forEach(control => {
            let inArray = false
            treeChildrenData.some(node => {
              if (control.index == node.id) {
                inArray = true
                return false
              }
            });
       
            if (!inArray) {
              treeChildrenData.push({
                pid: 1,
                id: control.index,
                label: control.type,
              })
            }
            
          });
      }
    },
    mounted () {

    
    },
    methods: {
      showCode(data) {
        this.$store.state.currentCodeObj.id = data.id
        this.$store.state.currentCodeObj.show = !this.$store.state.currentCodeObj.show
        console.log('showCode')
      },
      rename(node, data) {
        this.treeData[data.id - 1].rename = !this.treeData[data.id - 1].rename
      },
      onBlur (evt, data) {
        this.treeData[data.id - 1].label = evt.target.value
        this.treeData[data.id - 1].rename = !this.treeData[data.id - 1].rename
      },
      handleNodeClick(data) {
        console.log(data)
        if (data.pid != 0) {
          this.$store.state.currentIndex = data.id
        }
      },
      
    }
  };
</script>

<style scoped>
    .scene-container {
        background-color: #ffffff;
        height: 100%;
    }
    .scene-container .title {
        color: black;
        font-size: 18px;
        border-bottom: 1px solid #eeeeee;
        height: 3%;
    }
</style>