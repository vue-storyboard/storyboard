<template>
  <div class="scene-container">
    <div class="title"><span>scene</span></div>
      <el-tree :data="treeData" node-key="treeId" default-expand-all :expand-on-click-node="true">
        <span class="custom-tree-node" slot-scope="{ node, data }" >
          <span>{{ node.label }}</span>
          <span v-if="data.pid==0">
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
      const data = [{
      	pid: 0,
        id: 1,
        label: '文件 1',
        children: [{
          id: 4,
          label: '组件 1-1',
          children: [{
            id: 9,
            label: '组件 1-1-1'
          }, {
            id: 10,
            label: '组件 1-1-2'
          }]
        }]
      }, {
        pid: 0,
        id: 2,
        label: '文件 2',
        children: [{
          id: 5,
          label: '组件 2-1'
        }, {
          id: 6,
          label: '组件 2-2'
        }]
      }];
      return {
        treeId: 1000,
        treeData: JSON.parse(JSON.stringify(data))
      }
    },
    methods: {
      showCode(data) {
        console.log(data);
      }
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