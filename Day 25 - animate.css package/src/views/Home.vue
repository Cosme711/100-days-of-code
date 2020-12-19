<template>
  <div class="relative flex">
      <NavBar class="fixed w-1/4" />
      <Content class="absolute left-1/4 w-3/4 mr-1/3 bg-darkblue"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Content from "@/components/Content";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: 'Home',
  components: { NavBar, Content },
  setup() {

    const store = useStore();

    onMounted(() => {
      store.dispatch("getUserLocations");
    });

  }
}
</script>
