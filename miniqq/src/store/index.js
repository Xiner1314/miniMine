/**
 * Created by luyanxiang on 2018/11/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const state = {
  chat: false,
  setDrawer: false,
  showDetail: false,
  showSearch: false,
  detailUserId: 0,
  currentUser: {},
  currentMsgList: {},
  data: {
    self: {},
    friends: {}
  },
  headerTitle: '',
  titleDesc: {
    messages: '消息',
    friends: '联系人',
    discover: '发现'
  },
  isAjax: false,
  messagesList: [
    {_id: 1,
      list: [
        {msg: '你可以和我聊天吗？', time: 1541051132303, read: false},
        {msg: '你今年几岁?', time: 1541051432303, read: false},
        {msg: '我今天80大寿', time: 1541051832303, read: true, self: true}
      ]
    },
    {_id: 2, list: [{msg: '在吗', time: 1542002394524, read: true}]},
    {_id: 3, list: [{msg: '一起吃顿饭，可以吗', time: 1542072369522, read: false}]},
    {_id: 4, list: [{msg: '下班了吗', time: 1541900394524, read: false}]}
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
