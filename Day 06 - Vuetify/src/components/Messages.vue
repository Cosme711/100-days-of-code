<template>
<div ref="chatbox">
    <v-container 
        v-for="message in allMessages" 
        :key="message.id"
        >
        <v-card elevation="0" 
            width="40%" 
            :class="message.email === getEmailCurrent ? 'ml-auto pa-2' : 'pa-2'"
            >
            [{{ message.email }}]
        </v-card>
        <v-card 
            :class="message.email === getEmailCurrent ? 'ml-auto pa-2' : 'pa-2'" 
            width="40%"
            >
            {{ message.content }}
        </v-card>
    </v-container>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from "firebase/app";

export default {
    name: 'Messages',
    computed: {
        ...mapGetters(['allMessages']),
        getEmailCurrent() {
            return firebase.auth().currentUser.email;
        },
        pageHeight() {
            return document.body.scrollHeight
        }
    },
    mounted() {
        this.$store.dispatch('bindMessages');
    },
}
</script>
