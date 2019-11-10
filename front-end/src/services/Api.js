import axios from 'axios'
//import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `http://10.99.0.144/`,
    headers: {
      Authorization: `Bearer`
    }
  })
}
