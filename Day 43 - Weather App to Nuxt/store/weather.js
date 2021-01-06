import Service from '@/services/Service.js'

export const state = () => ({
  weather: [],
  coords: {}
})

export const mutations = {
  SET_WEATHER(state, weather) {
      state.weather = weather
  },
  SAVE_COORDS(state, coords) {
    state.coords = coords
  }
}

export const actions = {
  getUserLocations({ commit, dispatch }) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let coords = {
          Latitude: Math.round(position.coords.latitude),
          Longitude: Math.round(position.coords.longitude)
        } 
        commit("SAVE_COORDS", coords);
        dispatch("getWoeid", coords)
      })
  },
  getWoeid({ commit }, coords) {
    return Service.getWoeidFromLocation(coords).then(response => {
      console.log(response.data[0])
      commit("SET_WEATHER", response.data[0])
    })
  }
}