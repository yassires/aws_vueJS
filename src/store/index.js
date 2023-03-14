import Vuex from "vuex";
 
 
export default new Vuex.Store({
 state: {
    wrongAnswers:[],
    page:1
 },
 getters: {},
 mutations: {
    PassWrongAnswers (state, payload) {
        state.wrongAnswers = payload
    },
    changePage(state , payload){
        state.page = payload
    }
 },
 actions: {}
});