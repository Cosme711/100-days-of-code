import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    api: {
      apiURL: "https://www.metaweather.com/api/location",
      corsURL: "https://cors-anywhere.herokuapp.com"
    },
    current: {
      location: {
        default: "paris",
        woeid: "",
        position: {}
      },
      weather: {
        air_pressure: 0,
        humidity: 0,
        the_temp: 0,
        visibility: 0,
        wind_speed: 0,
        temp_fahrenheit: 0
      },
    },
    forecast: {},
    searchModal: false,
    isCelcius: true,
    error: false
  },
  mutations: {
    SAVE_COORDS(state, coords) {
      state.current.location.position = coords
    },
    SAVE_WOEID(state, locations) {
      state.current.location.woeid = locations
    },
    SAVE_CITY(state, city) {
      state.current.location.cityName = city;
    },
    SAVE_CURRENT(state, current) {
      state.current.weather = current
    },
    SAVE_FORECAST(state, infos) {
      state.forecast = infos
    },
    SEARCH_MODAL(state, boolean) {
      state.searchModal = boolean
    },
    SAVE_TEMP_F(state, number) {
      state.current.weather.temp_fahrenheit = number
    },
    IS_CELCIUS(state, boolean) {
      state.isCelcius = boolean
    },
    CHANGE_ERROR(state, boolean) {
      state.error = boolean
    }
   },
  actions: {
    getDefaultLocation({ commit, dispatch, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?query=${state.current.location.default}`)
      .then(result => {
        commit("SAVE_WOEID", result.data[0].woeid);
        dispatch("getInfos");
        commit("CHANGE_ERROR", false);
      })
      .catch(error => {
        console.log(error)
        commit("CHANGE_ERROR", true);
      })
    },
    getUserLocations({ commit, dispatch }) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let coords = {
            Latitude: Math.round(position.coords.latitude),
            Longitude: Math.round(position.coords.longitude)
          } 
          commit("SAVE_COORDS", coords);
          dispatch("searchLocationByCoords");
        }
      )
    },
    searchLocationByCoords({ commit, dispatch, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?lattlong=${state.current.location.position.Latitude},${state.current.location.position.Longitude}`)
      .then(result => {
        commit("SAVE_WOEID", result.data[0].woeid);
        dispatch("getInfos");
        commit("CHANGE_ERROR", false);
      })
      .catch(error => {
        console.log(error);
        commit("CHANGE_ERROR", true);
      })
    },
    getInfos({ commit, dispatch, state}) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/${state.current.location.woeid}`)
      .then(result => {
        commit("SAVE_CITY", result.data.title);
        commit("SAVE_CURRENT", result.data.consolidated_weather[0]);
        commit("SAVE_FORECAST", result.data.consolidated_weather.splice(1));
        commit("CHANGE_ERROR", false);
        dispatch("convertToF");
      })
      .catch(error => {
        console.log(error);
        commit("CHANGE_ERROR", true);
      })
    },
    convertToF({ commit, state}) {
      const temp = state.current.weather.the_temp;
      var today = ((temp * 9/5) + 32);
      commit("SAVE_TEMP_F", today)
    }
  }
})

