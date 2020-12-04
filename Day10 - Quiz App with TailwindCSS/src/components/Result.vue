<template>
  <div class="text-center my-4 mx-4">
    <img
      class="winners mb-8"
      src="@/assets/img/undraw_winners_ao2o 2.svg"
      alt=""
    />
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
      class="border-2 font-bold text-center text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white rounded-lg py-3 px-10 text-base"
      @click="tryAgain"
    >
      Try again
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      gameOver: null
    };
  },
  computed: mapState({
    score: state => state.score
  }),
  watch: {
    gameOver: function() {
      this.$emit("resetGame", this.gameOver);
    }
  },
  methods: {
    tryAgain() {
      this.$store.dispatch("resetGame");
      this.$store.dispatch("generateQuestion");
      this.gameOver = false;
    }
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
