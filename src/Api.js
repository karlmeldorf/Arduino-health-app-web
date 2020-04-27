import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL

export default {
  getFilteredResult (query) {
    return axios.get('api/get-filtered-results', {params: query})
  },
  getSpo2Data () {
    return axios.get('api/spo2/get-sensor-results')
  },
  getBloodpressureData () {
    return axios.get('api/bp/get-sensor-results')
  }
}