import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLogged: false
    }
  },
  mutations: {
    isLogged(state, payload) {
      state.isLogged = payload;
    }
  }
})


export default store