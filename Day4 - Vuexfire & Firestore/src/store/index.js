import Vue from 'vue'
import Vuex from 'vuex'

import { messages } from '@/firebase'

import { firestoreAction, vuexfireMutations } from 'vuexfire'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMessages: [],
    isLogged: false
  },
  mutations: {
    ...vuexfireMutations,
    isLogged(state, payload) {
      state.isLogged = payload;
    }
  },
  actions: {
    bindMessages: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef(
        'allMessages',
        messages.orderBy('content', 'asc')
      )
    }),
    addMessage: firestoreAction((context, payload) => {

      return (
        messages
          .add({...payload.newMessage })
      )
    }),
  },
  getters: {
    allMessages: (state) => {
      return state.allMessages
    },
  }
})
