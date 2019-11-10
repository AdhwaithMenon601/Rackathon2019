import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  sendLoc (credentials) {
    return Api().post('sendLoc', credentials)
  },
  regRent (credentials) {
    return Api().post('regRent', credentials)
  },
}
