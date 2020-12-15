import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    currentDay: {
      woeid: "",
      cityName: "",
      currentDate: "",
      currentTemp: 0,
      weatherState: ""
    },
    searchModal: false,
    api: {
      apiURL: "https://www.metaweather.com/api/location",
      corsURL: "https://cors-anywhere.herokuapp.com"
    },
    coords: {
      test: "gzgz",
      test2: "blabla"
    },
    locations: {}
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
    SAVE_WOEID(state, woeid) {
      state.currentDay.woeid = woeid;
    },
    SEARCH_MODAL(state, boolean) {
      state.searchModal = boolean
    },
    SAVE_COORDS(state, coords) {
      state.coords = coords
    },
    SAVE_LOCATIONS(state, locations) {
      state.locations = locations
    }
  },
  actions: {
    getUserLocations({ commit, dispatch }) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let coords = {
            Latitude: position.coords.latitude,
            Longitude: position.coords.longitude
          } 
          commit("SAVE_COORDS", coords);
          dispatch("searchLocationByCoords");
        }
      )
    },
    searchLocationByCoords({ commit, dispatch, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?lattlong=${state.coords.Latitude},${state.coords.Longitude}`)
      .then(result => {
        commit("SAVE_LOCATIONS", result.data[0].woeid);
        dispatch("getInfos");
      })
      .catch(error => {
        console.log(error);
      })
    },
    // searchLocation({ commit, dispatch, state }) {
    //   axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?query=paris`)
    //   .then(result => {
    //     commit("SAVE_WOEID", result.data[0].woeid);
    //     dispatch("getInfos");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // },
    getInfos({ commit, dispatch, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/${state.locations}`)
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

