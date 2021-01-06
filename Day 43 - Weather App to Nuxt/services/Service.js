import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api`,
    withCredentials: false, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default {
    getWoeidFromLocation(coords) {
        return apiClient.get('/location/search/?lattlong=' + coords.Latitude + ',' + coords.Longitude)
    }
}