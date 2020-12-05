<template>
    <v-app-bar class="justify-space-between" fixed>
      <v-card-title>
        <h1 class="display-1">Chat App</h1>
      </v-card-title>
      <v-spacer></v-spacer>
    <div class="d-flex align-center">
        <p class="mb-0 pr-4" v-if="isLogged">{{ emailCurrentUser }}</p>
        <v-btn v-if="!isLogged" color="info" @click="SignInToggle">Sign In</v-btn>
        <v-btn v-if="isLogged" color="info" @click="logout">Log Out</v-btn>
    </div>
    </v-app-bar>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name:"LogIn",
    methods: {
        SignInToggle() {
                this.$store.commit('showModalSignIn', !this.$store.state.showModalSignIn);
        },
        logout() {
            firebase.auth().signOut().then(() => {
                this.$store.commit('isLogged', false);
                console.log('Disconnected !')
            }).catch(function(error) {
                console.log(error)
            });
            this.$store.commit('showModalSignIn', true);
        }
    },
    computed: {
        isLogged() {
            return this.$store.state.isLogged;
        },
        emailCurrentUser() {
            return firebase.auth().currentUser.email;
        }
    }
}


</script>

