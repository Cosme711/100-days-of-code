<template>
  <v-app id="app" class="grey--text text--darken-2">
    <router-view></router-view>
  </v-app>
</template>

<script>
import vuetify from "@/plugins/vuetify";
export default {
  name: "app",
  vuetify,
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f4f7ff;
}
</style>