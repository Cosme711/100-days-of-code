import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.eu/rest/v2"
});

Vue.prototype.$http = instance;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    score: 0,
    answers: [],
    question: "",
    answerLetters: ["A", "B", "C", "D"],
    flagUrl: ""
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
    GENERATE_ANSWERS(state, answers) {
      state.answers = answers;
    },
    GENERATE_QUESTION(state, question) {
      state.question = question;
    },
    INCREMENT_SCORE(state) {
      state.score++;
    },
    FLAG_URL(state, flagUrl) {
      state.flagUrl = flagUrl;
    },
    RESET_GAME(state) {
      state.score = 0;
    }
  },
  actions: {
    incrementScore({ commit }) {
      commit("INCREMENT_SCORE");
    },
    resetGame({ commit }) {
      commit("RESET_GAME");
    },
    getCountries({ commit, dispatch }) {
      Vue.prototype.$http
        .get("all?fields=name;capital;flag")
        .then(result => {
          commit("SAVE_COUNTRIES", result.data);
          dispatch("generateQuestion");
        })
        .catch(error => {
          throw new Error(`API ${error}`);
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
    generateQuestion({ commit, dispatch }) {
      let countries = this.state.countries;
      let randNum = Math.floor(Math.random() * countries.length);
      let randomCapital = countries[randNum].capital;
      let randCountry = countries[randNum];
      let question = `${randomCapital} is the capital of`;

      if (typeof randNum !== "undefined") {
        commit("GENERATE_QUESTION", question);
        dispatch("generateFlagUrl", randCountry);

        countries.forEach(Element => {
          if (randomCapital === Element.capital) {
            dispatch("getAnswers", Element.name);
          }
        });
      }
    },
    generateFlagUrl({ commit }, randCountry) {
      let randomFlag = randCountry.flag;

      commit("FLAG_URL", randomFlag);
    }
  },
  modules: {}
});
