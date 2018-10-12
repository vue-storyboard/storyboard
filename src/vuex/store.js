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

const mutations = {
    setControls (controls) {
        state.controls = controls
    }
}

const getters = {
    getControls: state => {
        return state.controls
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})