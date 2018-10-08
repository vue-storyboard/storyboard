import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    // 当前索引
    currentIndex: 0,
    templateAttr: 'type="success"',
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