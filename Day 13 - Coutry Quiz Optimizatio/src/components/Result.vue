<template>
  <div class="text-center my-4 mx-4">
    <img class="winners mb-8" src="@/assets/images/winner.svg" alt="" />
    <h1
      class="capitalize text-5xl text-center mb-1 font-extrabold text-blue-900"
    >
      Results
    </h1>
    <p class="text-blue-900 text-lg mb-10">
      You got
      <span class="text-green-400 text-3xl font-bold  ">{{ score }}</span>
      correct <span v-if="score > 1">answers</span> <span v-else>answer</span>
    </p>
    <button
      class="border-2 font-bold text-center text-blue-900 border-blue-900 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white focus:outline-none rounded-lg py-3 px-10 text-base"
      @click="tryAgain"
    >
      Try again
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useState } from "@/helpers";

export default {
  setup() {
    const { score } = useState(["score"]);

    const store = useStore();

    function tryAgain() {
      store.commit("CHANGE_TYPE_MODAL", "flag");
      store.commit("RESET_SCORE", 0);
      store.commit("RESET_COUNTER_QUESTION", 0);
    }

    return {
      score,
      tryAgain
    };
  }
};
</script>

<style scoped>
.winners {
  height: 100px;
  width: 200px;
  display: inline-block;
}
</style>
