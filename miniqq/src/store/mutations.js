/**
 * Created by luyanxiang on 2018/11/9.
 */
import * as types from './mutation-types'
export default {
  [types.RECEVIVE_DATA] (state, data) {
    state.data = data
    // console.log(state.data)
  },
  [types.CHANGE_NAV_TITLE] (state, name) {
    state.headerTitle = state.titleDesc[name]
  },
  [types.REFRESH_AJAX] (state, stutas) {
    state.isAjax = stutas
  },
  [types.DELETE_MSG_LIST] (state, item) {
    let record = state.messagesList.find(m => m._id === item._id)
    let index = state.messagesList.indexOf(record)
    state.messagesList.splice(index, 1)
  },
  [types.TOGGLE_CHAT] (state, val) {
    state.chat = val
  },
  [types.TOGGLE_SETDRAWER] (state, val) {
    state.setDrawer = val
  },
  [types.TOGGLE_DETAIL] (state, val) {
    state.showDetail = val
  },
  [types.TOGGLE_SEARCH_VIEW] (state, val) {
    state.showSearch = val
  },
  [types.RECEVIVE_USER_ID] (state, id) {
    state.detailUserId = id
  },
  [types.RECEVIVE_CURRENT_USER] (state, user) {
    state.currentUser = user
    let record = state.messagesList.find(m => m._id === user._id)
    record.list.forEach(m => {
      m.read = true
    })
    state.currentMsgList = record
  },
  [types.ADD_MESSAGE] (state, {msg, time, self}) {
    state.currentMsgList.list.push({
      msg,
      time,
      self,
      read: true
    })
  }
}
