<template>
  <v-app refs="chatbox">
    <Login />
    <ModalLogin v-if="showModalSignIn" />
    <Messages v-if="isLogged"/>
    <InputMessage v-if="isLogged"/>
  </v-app>
</template>

<script>
import Login from "@/components/Login";
import ModalLogin from "@/components/ModalLogin";
import Messages from "@/components/Messages";
import InputMessage from "@/components/InputMessage";

export default {
  name: 'App',
  components: { Login, ModalLogin, Messages, InputMessage },
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
    showModalSignIn() {
      return this.$store.state.showModalSignIn;
    }
  }
  // updated() {
  //   this.scrollToEnd();
  // },
  // methods: {
  //   scrollToEnd() {
  //       var container = document.querySelector(".scroll");
  //       var scrollHeight = container.scrollHeight;
  //       container.scrollTop = scrollHeight
  //   }
  // }
}
</script>

<style>

</style>