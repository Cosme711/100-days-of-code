import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    current: {
      location: {
        woeid: "",
        position: {}
      },
      weather: {

      }
    },
    searchModal: false,
    api: {
      apiURL: "https://www.metaweather.com/api/location",
      corsURL: "https://cors-anywhere.herokuapp.com"
    },
    locations: {},
    forecast: {}
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
  },
  actions: {
    getUserLocations({ commit, dispatch, state }) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let coords = {
            Latitude: Math.round(position.coords.latitude),
            Longitude: Math.round(position.coords.longitude)
          } 
          commit("SAVE_COORDS", coords);
          dispatch("searchLocationByCoords");
          console.log(state.current.location.position)
        }
      )
    },
    searchLocationByCoords({ commit, dispatch, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?lattlong=${state.current.location.position.Latitude},${state.current.location.position.Longitude}`)
      .then(result => {
        console.log("he")
        commit("SAVE_WOEID", result.data[0].woeid);
        console.log(state.current.location.woeid)
        dispatch("getInfos");
      })
      .catch(error => {
        console.log(error);
      })
    },
    getInfos({ commit, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/${state.current.location.woeid}`)
      .then(result => {
        commit("SAVE_CITY", result.data.title);
        commit("SAVE_CURRENT", result.data.consolidated_weather[0]);
        commit("SAVE_FORECAST", result.data.consolidated_weather.splice(1));
        console.log(state.current)
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  modules: {
  }
})

