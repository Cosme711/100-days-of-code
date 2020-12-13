import { createStore } from 'vuex'

export default createStore({
  state: {
    currentDay: {
      cityName: "",
      currentDate: "",
      currentTemp: 0,
      weatherState: ""
    },
    searchModal: false
  },
  mutations: {
    SAVE_CITY(state, city) {
      state.currentDay.cityName = city;
    },
    SAVE_DATE(state, date) {
      state.currentDay.currentDate = date;
    },
    SAVE_TEMPS(state, temp) {
      state.currentDay.currentTemp = temp;
    },
    SAVE_WEATHERSTATE(state, weatherState) {
      state.currentDay.weatherState = weatherState;
    },
    SEARCH_MODAL(state, boolean) {
      state.searchModal = boolean
    }
  },
  actions: {
    getCountries({ commit, dispatch }) {
      const axios = require("axios");
      let corsURL = "https://cors-anywhere.herokuapp.com"
      let apiURL = "https://www.metaweather.com/api/location/615702"
      axios.get(`${corsURL}/${apiURL}`)
      .then(result => {
        commit("SAVE_CITY", result.data.title);
        commit("SAVE_TEMPS", Math.round(result.data.consolidated_weather[0].the_temp));
        commit("SAVE_WEATHERSTATE", result.data.consolidated_weather[0].weather_state_name);
        dispatch("convertDate", result.data.consolidated_weather[0].applicable_date);
      })
      .catch(error => {
        console.log(error);
      })
    },
    convertDate({ commit }, date) {

      // TO CONVERT

      commit("SAVE_DATE", date);
    }
  },
  modules: {
  }
})

