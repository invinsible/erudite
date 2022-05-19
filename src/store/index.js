import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    state: () => ({
        user: 'igor'
    }),

    mutations: {
        SET_USER(state, atr) {
            state.user = atr;
        }
    },

    getters: {
        FULL_NAME(state) {
            return state.user + ' Sergeev';
        }
    },

    // action: {
    //     SOME(context, payload) {

    //     }
    // }
});