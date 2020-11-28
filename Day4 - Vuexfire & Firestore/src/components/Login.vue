<template>
  <div class="login">
      <div class="input">
        <div class="email">
            <label for="input-username" unselectable="on">Email :</label>
            <input type="email" v-model="email" @keydown.enter="login">
        </div>
        <div class="mdp">
            <label for="input-username" unselectable="on">Password :</label>
            <input type="password" v-model="mdp" @keydown.enter="login"> 
        </div>
      </div>
        <p v-show="isLogged"><button @click="logout">LogOut</button></p>
        <p v-show="!isLogged">Not connected</p>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name:"LogIn",
    data: function() {
      return {
        email: this.email,
        mdp: this.mdp,
      }
    },
    methods: {
      login() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.mdp)
          .then(() => {
                this.email = "";
                this.mdp = "";
                this.$store.commit('isLogged', true);
          })
          .catch((error) => {
              console.log(error)
          })
      },
      logout() {
        firebase.auth().signOut().then(() => {
            this.$store.commit('isLogged', false)
        }).catch(function(error) {
            console.log(error)
        });
        }
    },
    computed: {
      isLogged() {
          return this.$store.state.isLogged;
      }
    },
}


</script>

<style lang="scss">
.login {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    background-color: #f4f7ff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    button {
        background: #1f2335;
        color: #f4f7ff;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        margin-left: 1rem;
    }
    .input {
        display: flex;
    }
    input:focus {
        outline: none;
    }
    .email {
        display: flex;
        margin-right: 2rem;
        input {
            border: none;
            border-bottom: 1px solid #CCC;
            background-color: transparent;
            position: relative;
            margin-left: 1rem;
        }
    }
    .mdp {
        display: flex;
        input{
            border: none;
            border-bottom: 1px solid #CCC;
            background-color: transparent;
            position: relative;
            margin-left: 1rem;
        }
    }
}
</style>