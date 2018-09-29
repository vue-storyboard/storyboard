import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    selectedIndex: 0,
    selectedControlsAttributes: [
       
    ],
    controls: [
        {
            type: 'button',
            name: 'sb-el-button',
            show: true,
            tag:{
                id: 0,
                index: 0
            },
            attribute: {
                text: '',
                type: '',
                styles: [],
                size: 'small',
                icon: ''
            },
        },
        
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