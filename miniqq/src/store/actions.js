/**
 * Created by luyanxiang on 2018/11/9.
 */
import * as types from './mutation-types'
export default {
  async getAllData ({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let self = await axios.get('/api/self')
    let friends = await axios.get('/api/friends')
    self = self.data.data
    friends = friends.data.data
    commit(types.RECEVIVE_DATA, {self, friends})
    commit(types.REFRESH_AJAX, false)
  },
  deleteMsg ({commit}, item) {
    commit(types.DELETE_MSG_LIST, item)
  },
  showChat ({commit}, user) {
    commit(types.RECEVIVE_CURRENT_USER, user)
    commit(types.TOGGLE_CHAT, true)
  },
  showDetail ({commit}, id) {
    commit(types.RECEVIVE_USER_ID, id)
    commit(types.TOGGLE_DETAIL, true)
  },
  sendMyMsg ({commit}, payload) {
    return new Promise(resolve => {
      commit(types.ADD_MESSAGE, payload)
      resolve()
    })
  },
  sendNewMsg ({commit}, payload) {
    return new Promise(resolve => {
      let query = `?id=${payload.id}&msg=${payload.msg}`
      payload.axios.get('/api/robot' + query)
        .then((msgData) => {
          // console.log(msgData.data.data)
          let time = new Date().getTime()
          let msg = JSON.parse(msgData.data.data)
          msg = msg.text
          commit(types.ADD_MESSAGE, {msg, time})
          resolve()
        })
    })
  }
  // async sendNewMsg1 ({commit}, payload) {
  //   commit(types.ADD_MESSAGE, payload)
  //   let query = `?id=${payload.id}&msg=${payload.msg}`
  //   let msgData = await payload.axios.get('/api/robot' + query)
  //   console.log(msgData.data)
  //   let time = new Date().getTime()
  //   let msg = await JSON.parse(msgData.data.data)
  //   msg = msg.text
  //   commit(types.ADD_MESSAGE, {msg, time})
  // }
}
