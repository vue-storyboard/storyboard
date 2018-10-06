import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    selectedIndex: 0,
    selectedControlsAttributes: [
       
    ],
    controls: [
        {
            type: 'radio',
            name: 'sb-el-radio',
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
        {
            type: 'button',
            name: 'sb-el-button',
            tag:{
                id: 1,
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
        {
            type: 'switch',
            name: 'sb-el-switch',
            tag:{
                id: 2,
                index: 0
            },
            attribute: {
                text: '',
                activeColor: '',
                inactivecolor: '',
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