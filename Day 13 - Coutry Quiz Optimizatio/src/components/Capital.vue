<template>
  <div>
    <p
      class="font-bold text-blue-900 pb-4 text-sm sm:text-xl md:text-2xl mr-6 mt-2"
    >
      {{ question }}
    </p>
    <div class="mx-0">
      <p
        v-for="answer in answers"
        :key="answer.id"
        class="text-sm sm:text-xl md:text-lg border-2 border-solid rounded-lg p-2 px-18 pl-3 m-2 mx-0 mb-5 cursor-pointer hover:text-white hover:border-none hover:bg-yellow-500 hover:border-opacity-0 text-purple-500 hover:bg-orange-500 border-purple-500 flex flex-row"
        :class="{
          correct: answer.isCorrect && state.pickedAnswer,
          incorrect: !answer.isCorrect && state.pickedAnswer === answer,
          disabled: state.disabled === true
        }"
        @click="selectAnswer(answer)"
      >
        {{ answer.Ans }}
      </p>
    </div>
    <div class="flex justify-end ml-2">
      <button
        class="rounded-lg bg-yellow-500 px-6 py-2 text-white font-extrabold text-lg focus:outline-none"
        @click="nextQuestion()"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useState, useGetters } from "@/helpers";

export default {
  name: "Capital",
  setup() {
    const store = useStore();

    const { question } = useState(["question"]);
    const { answers } = useState(["answers"]);
    const { correctAns } = useGetters(["correctAns"]);

    const state = reactive({
      correctAnswer: null,
      pickedAnswer: null,
      disabled: false
    });

    function selectAnswer(answer) {
      state.pickedAnswer = answer;
      state.correctAnswer = correctAns;
      state.disabled = true;
      if (answer.Ans === state.correctAnswer[0].Ans) {
        store.commit("INCREMENT_SCORE");
      }
    }

    function nextQuestion() {
      if (state.pickedAnswer) {
        state.pickedAnswer = null;
        store.commit("CHANGE_TYPE_MODAL", "flag");
        store.commit("INCREMENT_COUNTER_QUESTION");
        store.dispatch("countBeforeEnd");
        store.dispatch("generateQuestion");
        state.disabled = false;
      }
    }

    onMounted(() => {
      store.dispatch("getCountries");
    });

    return {
      state,
      question,
      answers,
      selectAnswer,
      nextQuestion
    };
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

.disabled {
  pointer-events: none;
}
</style>
