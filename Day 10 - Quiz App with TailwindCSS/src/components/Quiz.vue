<template>
  <div class="relative">
    <h1 class="font-extrabold text-3xl uppercase text-white pb-2">
      Country Quiz
    </h1>
    <img
      v-if="!gameOver"
      class="test absolute"
      src="@/assets/img/undraw_adventure_4hum 1.svg"
      alt=""
    />
    <div class="round bg-gray-200 max-w-sm overflow-hidden px-12">
      <div class="py-8 pt-8">
        <Capital
          v-if="!gameOver && component == 0"
          :key="capital"
          @correct="correctValue"
        ></Capital>
        <Flag
          v-if="!gameOver && component == 1"
          :key="flag"
          @correct="correctValue"
        ></Flag>

        <Result v-if="gameOver" @resetGame="gameOverValue"></Result>
        <div class="flex justify-end">
          <button
            v-if="count == true"
            class="rounded-lg bg-orange-500 px-6 py-2 text-white font-extrabold text-lg"
            @click="nextQuestion"
          >
            Next
          </button>
          <button
            v-if="count == 'incorrect'"
            class="rounded-lg bg-orange-500 px-6 py-2 text-white font-extrabold text-lg"
            @click="showScore"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Capital from "@/components/Capital.vue";
import Flag from "@/components/Flag.vue";
import Result from "@/components/Result.vue";
export default {
  name: "Quiz",
  components: {
    Capital,
    Result,
    Flag
  },
  data() {
    return {
      count: false,
      flag: 1,
      capital: 0,
      gameOver: false,
      component: 0
    };
  },

  mounted: function() {
    this.$store.dispatch("getCountries");
  },
  methods: {
    nextQuestion() {
      this.$forceUpdate();
      this.component = Math.floor(Math.random() * 2);
      this.$store.dispatch("generateQuestion");
      this.flag += 1;
      this.capital += 1;
      this.count = false;
    },
    correctValue: function(params) {
      this.count = params;
    },
    showScore() {
      this.gameOver = true;
      this.count = null;
    },
    gameOverValue: function(params) {
      this.gameOver = params;
    }
  }
};
</script>

<style scoped>
.test {
  height: 70px;
  top: 30px;
  right: 30px;
}
.round {
  border-radius: 9px;
}
</style>
