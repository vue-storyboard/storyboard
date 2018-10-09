import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    // 当前索引
    currentIndex: 0,
    // 当前代码展示对象
    currentCodeObj: {
        id: -1,
        show: false
    },
    // 视图所有控件
    controls: [
       
    ],
    
}

const mutations = {
    setAttribute (attributes) {
        state.attributes = attributes
    }
}

const getters = {
    getAttribute: state => {
        return state.attributes
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})