<template>
  <div class="scene-container">
    <div class="title"><span>scene</span></div>
    
      <el-tree :data="treeData" node-key="treeId" default-expand-all :expand-on-click-node="true" @node-click="handleNodeClick" 
  highlight-current>
        
        <span class="custom-tree-node" slot-scope="{ node, data }" >
          <span :node-id="node.id">
            <input v-if="data.rename" style="width: 50px" @click.stop="" @focus.stop="" @blur.stop="onBlur($event,data)" type="text" :value="data.label">
            <span v-else>{{data.label}}</span>
          </span>
          <span v-if="data.parent">
            <el-button type="text" size="mini" @click.stop="() => rename(node,data)">
              <span>rename</span>
            </el-button>
            <el-button type="text" size="mini" @click.stop="() => showCode(data)">
              <span>&lt;&gt;</span>
            </el-button>
            <el-button type="text" size="mini" @click.stop="() => append(data)">
              <span>+</span>
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
        treeData: this.$store.state.sceneTree
      
      }
    },
    watch: {
      controls(newValue, oldValue) {
          this.treeData.forEach((element, key) => {
              let treeChildrenData = this.treeData[key].children
              if (newValue[key] != undefined) {
                newValue[key].forEach(control => {
                  let inArray = false
                  treeChildrenData.some(node => {
                    if (control.index == node.id) {
                      inArray = true
                      return false
                    }
                  });
            
                  if (!inArray) {
                    treeChildrenData.push({
                      pid: element.id,
                      id: control.index,
                      label: control.type,
                    })
                  }
                  
                });
              }
              
          });
         
      }
    },
    mounted () {

    
    },
    methods: {
      showCode (data) {
        this.$store.state.currentController.id = data.id
        this.$store.state.currentController.show = !this.$store.state.currentController.show
      },
      rename (node, data) {
        this.treeData[data.id].rename = !this.treeData[data.id].rename
      },
      append (data) {
        let sceneTreeNode = {
                pid: 0,
                id: this.$store.state.sceneTree[this.$store.state.sceneTree.length - 1].id + 1,
                parent: true,
                rename: false,
                label: 'View ' + (this.$store.state.sceneTree[this.$store.state.sceneTree.length - 1].id + 2),
                children: []
            } 
        this.$set(this.$store.state.sceneTree, sceneTreeNode.id, sceneTreeNode)
      },
      onBlur (evt, data) {
        this.treeData[data.id].label = evt.target.value
        this.treeData[data.id].rename = !this.treeData[data.id].rename
      },
      handleNodeClick (data) {
        
        if (data.hasOwnProperty('parent') && data.parent) {
          this.$store.state.currentController.id = data.id
          var array = this.$store.state.controls[this.$store.state.currentController.id] || []
          this.$set(this.$store.state.controls, this.$store.state.currentController.id, array)
        } else {
          this.$store.state.currentIndex = data.id
          this.$store.state.currentController.id = data.pid
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