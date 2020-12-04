<template>
  <div id="app" class="flex flex-col min-h-screen">
    <router-view class="mx-auto my-auto p-8"> </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>
