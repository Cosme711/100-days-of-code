<template>
  <v-app>
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
    },
  }
}
</script>