<template>
    <div>
        <h1>Following of {{ this.username }}</h1>
        <nuxt-link :to="this.profileLink">Return to profile</nuxt-link>
    </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Following of ' + this.username,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All the following of " + this.username
        }
      ]
    }
  },
    computed: {
        username() {
            return this.$route.params.username
        },
        profileLink() {
            return '/user/' + this.username
        }
    }
}
</script>