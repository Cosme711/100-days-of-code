<template>
  <div>
    <p class="font-bold text-blue-900 pb-4 text-2xl mr-6">
      {{ question }}
    </p>
    <div class="mx-0">
      <p
        v-for="(answer, index) in answers"
        :key="index"
        class="text-lg border-2 border-solid rounded-lg p-1 px-18 pl-3 m-2 mx-0 mb-5 cursor-pointer hover:text-white text-purple-500 hover:bg-orange-500 border-purple-500 flex flex-row"
        :class="{
          correct: answer.isCorrect && pickedAnswer,
          incorrect: !answer.isCorrect && pickedAnswer === answer,
          disabled:
            (!answer.isCorrect || answer.isCorrect) && correctAnswer !== null
        }"
        @click="selectAnswer(answer)"
      >
        <span class="pr-4 text-2xl font-medium">{{
          answerLetters[index]
        }}</span>
        <span class="flex-grow mt-3px">{{ answer.Ans }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Capital",
  data: function() {
    return {
      correctAnswer: null,
      pickedAnswer: null,
      count: false
    };
  },
  computed: mapState({
    question: state => state.question,
    answers: state => state.answers,
    answerLetters: state => state.answerLetters
  }),
  watch: {
    count: function() {
      this.$emit("correct", this.count);
    }
  },
  methods: {
    selectAnswer(answer) {
      this.pickedAnswer = answer;
      this.correctAnswer = this.$store.getters.correctAns[0].Ans;
      if (answer.Ans === this.correctAnswer) {
        this.$store.dispatch("incrementScore");
        this.count = true;
      } else {
        this.count = "incorrect";
      }
    }
  }
};
</script>

<style scoped>
.correct {
  background: #60bf88;
  border-color: #60bf88;
  color: white;
}

.correct:hover {
  background: #60bf88;
}

.mt-3px {
  margin-top: 3px;
}

.incorrect {
  background: #ea8282;
  border-color: #ea8282;
  color: white;
}

.incorrect:hover {
  background: #ea8282;
}

.block-0 > svg {
  display: unset;
}
</style>
