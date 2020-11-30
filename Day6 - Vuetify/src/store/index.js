import Vue from 'vue'
import Vuex from 'vuex'

import { messages } from '@/firebase'


import { firestoreAction, vuexfireMutations } from 'vuexfire'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMessages: [],
    isLogged: false,
    showModalSignIn: true
  },
  mutations: {
    ...vuexfireMutations,
    isLogged(state, payload) {
      state.isLogged = payload;
    },
    showModalSignIn(state, payload) {
      state.showModalSignIn = payload;
    }
  },
  actions: {
    addMessage: firestoreAction((context, payload) => {
      return (
        messages
          .add({...payload.newMessage,
            created : new Date()
          })
      )
    }),
    bindMessages: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef(
        'allMessages',
        messages.orderBy("created", "asc")
      )
    }),
  },
  getters: {
    allMessages: (state) => {
      return state.allMessages
    },
  }
})
