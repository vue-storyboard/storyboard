import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    selectedIndex: 0,
    selectedControlsAttributes: [
       
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