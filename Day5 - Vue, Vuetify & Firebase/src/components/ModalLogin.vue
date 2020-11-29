<template>
    <v-card width="400" class="mx-auto my-auto" elevation="4">
        <v-card-title>
            <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
            <v-text-field
                label="Username" 
                prepend-icon="mdi-account-circle"
                v-model="email"
                @keydown.enter="login"
                />
            <v-text-field
                :type="this.showPassword ? 'text' : 'password'"
                label="Password" 
                prepend-icon="mdi-lock" 
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                @keydown.enter="login"
                v-model="mdp"
                />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" @click="login">Login</v-btn>
        </v-card-actions>
        </v-card>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name:"ModalLogin",
    data: () => ({
              email: '',
              mdp: '',
              showPassword: false
    }),
    methods: {
        login() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.mdp)
          .then(() => {
                this.email = "";
                this.mdp = "";
                this.$store.commit('isLogged', true);
                this.$store.commit('showModalSignIn', false);
                console.log("Connected !")
          })
          .catch((error) => {
              console.log(error)
          })
      },
    }
};
</script>
