import { createStore } from "vuex";

export default createStore({
  state: {
    countries: [],
    question: "",
    answers: [],
    flagUrl: "",
    typeOfModal: "flag",
    counterOfQuestion: "",
    score: 0
  },
  getters: {
    correctAns: state => {
      return state.answers.filter(answers => answers.isCorrect);
    }
  },
  mutations: {
    SAVE_COUNTRIES(state, countries) {
      state.countries = countries;
    },
    GENERATE_QUESTION(state, question) {
      state.question = question;
    },
    GENERATE_ANSWERS(state, answers) {
      state.answers = answers;
    },
    FLAG_URL(state, flagUrl) {
      state.flagUrl = flagUrl;
    },
    CHANGE_TYPE_MODAL(state, type) {
      state.typeOfModal = type;
    },
    INCREMENT_COUNTER_QUESTION(state) {
      state.counterOfQuestion++;
    },
    RESET_COUNTER_QUESTION(state, number) {
      state.counterOfQuestion = number;
    },
    INCREMENT_SCORE(state) {
      state.score++;
    },
    RESET_SCORE(state, number) {
      state.score = number;
    }
  },
  actions: {
    getCountries({ commit, dispatch }) {
      const axios = require("axios");
      axios
        .get("https://restcountries.eu/rest/v2/all?fields=name;capital;flag")
        .then(result => {
          commit("SAVE_COUNTRIES", result.data);
          dispatch("generateQuestion");
        })
        .catch(error => {
          console.log(error);
        });
    },
    generateQuestion({ commit, dispatch }) {
      let countries = this.state.countries;
      let randNum = Math.floor(Math.random() * countries.length);
      let randomCapital = countries[randNum].capital;
      let randCountry = countries[randNum];
      let question = `${randomCapital} is the capital of`;

      commit("GENERATE_QUESTION", question);
      dispatch("generateFlagUrl", randCountry);

      countries.forEach(Element => {
        if (randomCapital === Element.capital) {
          this.dispatch("getAnswers", Element.name);
        }
      });
    },
    getAnswers({ commit }, correctAns) {
      let answers = [];
      answers.push({ Ans: correctAns, isCorrect: true });
      for (var i = 0; i < 3; i++) {
        var rand = this.state.countries[Math.floor(Math.random() * 250)].name;
        if (rand !== correctAns) {
          answers.push({ Ans: rand, isCorrect: false });
        } else {
          answers.push({
            Ans:
              this.state.countries[Math.floor(Math.random() * 250)].name !==
              correctAns,
            isCorrect: false
          });
        }
      }
      function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        return a;
      }

      commit("GENERATE_ANSWERS", shuffle(answers));
    },
    generateFlagUrl({ commit }, randCountry) {
      let randomFlag = randCountry.flag;

      commit("FLAG_URL", randomFlag);
    },
    countBeforeEnd({ commit }) {
      if (this.state.counterOfQuestion >= 5) {
        commit("CHANGE_TYPE_MODAL", "result");
      }
    }
  }
});
