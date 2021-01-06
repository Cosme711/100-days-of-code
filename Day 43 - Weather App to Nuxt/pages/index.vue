<template>
  <div>
    <NavBar class="fixed w-1/4"/>
    <Content class="left-1/4 absolute w-3/4"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar },
  async fetch({ store, error }) {
      try {
        await store.dispatch('weather/getUserLocations')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Error'
        })
      }
  }
}
</script>