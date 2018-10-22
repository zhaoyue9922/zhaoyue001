import Vue from 'vue'
import Vuex from 'vuex'
Vue.vue(Vuex);

const state = {
    photolist : []
}

const mutations = {
    addPhoto(state,photolist){
        state.photolist = photolist;
    }
}

const getter = {

}

const actions = {

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
