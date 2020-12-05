<template>
    <v-bottom-navigation height="auto" class="px-8 pt-8 " background-color="grey lighten-2" fixed>
        <v-text-field 
            clearable
            solo
            append-icon="mdi-send"
            type="text"
            label="Message..."
            @keydown.enter="addMessage"
            v-model="content"
            elevation="5"
        >
        </v-text-field>
    </v-bottom-navigation>
</template>

<script>
import firebase from "firebase/app";

export default {
    name: 'App',
    data: () => ({
            content: ''
    }),
    methods: {
        addMessage() {
            var email = firebase.auth().currentUser.email;
            this.$store.dispatch('addMessage', {
                newMessage: {
                    content: this.content,
                    email: email
                }
            })
            this.content = "";
        }
    }
}
</script>

