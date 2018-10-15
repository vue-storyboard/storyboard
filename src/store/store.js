import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    // 当前索引
    currentIndex: 0,
    // 是否添加控件
    currentAddControl: false,
    
    currentControl: {},
    // 当前展示控制对象
    currentController: {
        id: 0,
        show: false
    },
    // 视图所有控件
    controls: [
       
    ],
    // 场景组件树
    sceneTree: [

    ]
    
}
// getters
const getters = {
    isCurrentSceneShow: (state, getters) => {
        return state.currentController.show
    }
}

// actions
const actions = {

}

// mutations
const mutations = {
    setControls (controls) {
        state.controls = controls
    }
}




export default new Vuex.Store({
    state,
    mutations,
    getters
})