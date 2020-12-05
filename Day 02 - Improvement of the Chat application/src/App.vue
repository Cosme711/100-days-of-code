<template>
  <section>
    <Login />
    <div class="messages">
      <div class="message" v-for="chat in state.chats" :key="chat.message">{{ chat.userEmail }} :<p>{{ chat.message }}</p></div>
    </div>
    <div class="send-msg" v-if="isLogged">
      <input v-model="state.message" type="text" placeholder="Enter your message here..." @keydown.enter="addMessage">
      <span class="material-icons">send</span>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue';
import firebase from "../src/utilities/firebase";
import Login from "../src/components/Login";


export default {
  name: 'App',
  components: { Login },
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    }
  },
  setup() {
    const state = reactive({
      chats: {},
      message: "",
      collection: null,
    });

    onMounted(async() => {
      const db = firebase.database();
      state.collection = db.ref('chats')
      const data = await state.collection.once('value');
      console.log(data.val());
      state.chats = data.val();
    });

    function addMessage() {
      const newChat = state.collection.push()
      var userId = firebase.auth().currentUser.uid;
      var userEmail = firebase.auth().currentUser.email;
      newChat.set({ userEmail, userId, message:state.message });
      state.message="";
    }


    return {
      state, addMessage
    };
  }
}
</script>

<style lang="scss">

section {
  position: relative;
  height: 100vh;
}

.messages {
  padding-top: 50px;
  height: 660px;
  width: 90%;
  margin: auto;
}

.message {
  margin: 4rem 0;
  text-align: left;
  display: flex;
  p {
    margin-left: 1.25rem;
  }
}

.send-msg {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 2%;
  width: 100%;
  input {
    width: 85%;
    border: 1px solid grey;
    padding: 0.75rem 1rem;
    border-radius: 8px;
  }
  span {
    color: #4371f7;
    position: absolute;
    right: 8%;
    top: 20%;
  }
}

</style>
