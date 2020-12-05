import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import {stateSymbol, createStore} from './store/state.js'
app.provide(stateSymbol, createStore());

app.mount('#app')