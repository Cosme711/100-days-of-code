<template>
  <div class="bg-darkblue">
      <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: 'Home',
  components: { NavBar },
  setup() {

    const store = useStore();

    onMounted(() => {
      store.dispatch("searchLocation");
      store.dispatch("getLocations");
    });

  }
}
</script>
