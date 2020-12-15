<template>
  <div class="flex">
      <NavBar class="w-1/3" />
      <Content class="w-2/3"/>
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
