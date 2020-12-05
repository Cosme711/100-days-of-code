<template>
  <section>
    <div class="messages">
      <div class="message" v-for="chat in state.chats" :key="chat.message">{{ chat.message }}</div>
    </div>
    <input v-model="state.message" type="text" placeholder="Enter your message here..." @keydown.enter="addMessage">
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue';
import firebase from "../src/utilities/firebase"


export default {
  name: 'App',
  setup() {
    const state = reactive({
      chats: {},
      message: "",
      collection: null
    });
    onMounted(async() => {
      const db = firebase.database();
      state.collection = db.ref('chats')
      const data = await state.collection.once('value');
      state.chats = data.val();

      state.collection.on("value", (snapshot) => {
        state.chats = snapshot.val();
      })
    });

    return {
      state, addMessage
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section {
  height: 800px;
}

.messages {
  height: 700px;
}

.message {
  margin: 1rem 0;
  text-align: left;
}

input {
  width: 200px;
}
</style>
