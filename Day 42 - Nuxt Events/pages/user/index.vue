<template>
    <div>
        <h1>User</h1>
        <div>
          <h4>Profile:</h4>
          <nuxt-link to="/user/Coco">Coco</nuxt-link>
          <nuxt-link to="/user/Lea">Lea</nuxt-link>
          <nuxt-link to="/user/Baba">Baba</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'User',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All the users of this website !"
        }
      ]
    }
  },
}
</script>