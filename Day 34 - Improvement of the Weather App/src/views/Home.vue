<template>
    <NavBar class="relative lg:fixed w-full lg:w-1/4" v-if="!error"/>
    <Content class="relative lg:absolute lg:left-1/4 w-full lg:w-3/4 mr-1/3 bg-darkblue" v-if="!error"/>
    <Error v-if="error"/>
</template>

<script>
import NavBar from "@/components/NavBar";
import Content from "@/components/Content";
import Error from "@/components/Error.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import { useState } from "@/helpers";

export default {
  name: 'Home',
  components: { NavBar, Content, Error },
  setup() {

    const store = useStore();

    onMounted(() => {
      store.dispatch("getDefaultLocation");
    });

    const { error } = useState(["error"]);

    return { error }

  }
}
</script>
