<template>
  <div>
    <img class="small rounded" :src="flagUrl" alt="" />
    <p
      class="font-extrabold text-blue-900 py-4 text-sm sm:text-xl md:text-2xl "
    >
      Which country does this flag belong to?
    </p>
    <div>
      <p
        v-for="answer in answers"
        :key="answer.id"
        class="text-sm leading-10 sm:text-xl md:text-lg border-2 border-solid rounded-lg p-2 px-18 pl-3 m-2 mx-0 mb-5 cursor-pointer hover:text-white hover:border-none hover:bg-yellow-500 hover:border-opacity-0 text-purple-500 hover:bg-orange-500 border-purple-500 flex flex-row"
        :class="{
          correct: answer.isCorrect && state.pickedAnswer,
          incorrect: !answer.isCorrect && state.pickedAnswer === answer,
          disabled: state.disabled === true
        }"
        @click="selectAnswer(answer)"
      >
        <span class="flex items-center ml-2">{{ answer.Ans }}</span>
      </p>
    </div>
    <div class="flex justify-end">
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
  name: "Flag",
  setup() {
    const { answers } = useState(["answers"]);
    const { flagUrl } = useState(["flagUrl"]);
    const { correctAns } = useGetters(["correctAns"]);

    const state = reactive({
      correctAnswer: null,
      pickedAnswer: null,
      disabled: false
    });

    const store = useStore();

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
        store.commit("CHANGE_TYPE_MODAL", "capital");
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
      answers,
      flagUrl,
      state,
      selectAnswer,
      nextQuestion
    };
  }
};
</script>

<style scoped>
.small {
  height: 50px;
  width: 70px;
}

.mt-3px {
  margin-top: 3px;
}

.disabled {
  pointer-events: none;
}

.correct {
  background: #60bf88;
  border-color: #60bf88;
  color: white;
}
.correct:hover {
  background: #60bf88;
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
