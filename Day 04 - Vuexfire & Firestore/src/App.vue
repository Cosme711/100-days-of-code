<template>
  <section>
    <Login />
    <div class="container">
      <div class="messages" v-for="message in allMessages" :key="message.id">
        <div class="username">
          {{ message.email }} :
        </div>
        <div class="content">
          {{ message.content }}
        </div>
      </div>
    </div>
    <div class="send-msg" v-if="isLogged">
      <input v-model="content" type="text" placeholder="Enter your message here..." @keydown.enter="addMessage">
      <span class="material-icons">send</span>
    </div> 
  </section>
</template>

<script>
import Login from "../src/components/Login";
import { mapGetters } from 'vuex';
import firebase from "firebase/app";

export default {
  name: 'App',
  components: { Login },
  data: function() {
    return {
      content: this.content
    }
  },
  mounted() {
    this.$store.dispatch('bindMessages')
  },
  methods : {
    addMessage() {
      var username = firebase.auth().currentUser.email;
      this.$store.dispatch('addMessage', {
        newMessage: {
          content: this.content,
          email: username
        }
      })
      this.content = "";
    }
  },
  computed: {
    ...mapGetters(['allMessages']),
    isLogged() {
      return this.$store.state.isLogged;
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  position: relative;
  font-family: 'Castoro', serif;
  height: 100vh;
  font-size: 1.2rem;
  .container {
    margin-top: 4rem;
    font-size: 1.5rem;
    .messages {
      display: flex;
      padding: 1rem;
      margin: 1rem;
      .content {
        margin-left: 1rem;
      }
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
}



</style>
