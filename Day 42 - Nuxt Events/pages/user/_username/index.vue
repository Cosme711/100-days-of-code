<template>
    <div>
        <h1>Profile of {{ this.username }}</h1>
        <nuxt-link :to="this.followingLink">Following</nuxt-link>
    </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.username + ' profile',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Profile of" + this.username
        }
      ]
    }
  },
  computed: {
      username() {
          return this.$route.params.username
      },
      followingLink() {
        return '/user/' + this.username + '/following'
      }
  }
}
</script>