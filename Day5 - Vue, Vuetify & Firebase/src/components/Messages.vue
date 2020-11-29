<template>
  <v-container class="mt-10">
    <v-container class="pa-1 mt-15" v-for="message in allMessages" :key="message.id">
        <v-container>
            {{ message.email }}
        </v-container>
        <v-card class="ml-3 pa-2">
            {{ message.content }}
        </v-card>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Messages',
    computed: {
        ...mapGetters(['allMessages']),
    },
    mounted() {
        this.$store.dispatch('bindMessages')
    }
}
</script>

<style>

</style>