/**
 * Created by luyanxiang on 2018/11/13.
 */
export const msgViewList = (state) => {
  let result = []
  let friends = state.data.friends
  if (!friends.length) {
    return []
  }
  state.messagesList.forEach(item => {
    let friendData = friends.find(f => f._id === item._id)
    let unreadNum = 0
    let lastMsg = {}
    item.list.forEach(m => {
      if (!m.read) {
        unreadNum++
      }
      lastMsg = m
    })
    result.push({
      ...friendData,
      unreadNum,
      lastMsg
    })
  })
  return result
}
export const friendsList = (state) => {
  // let result = []
  // state.data.friends.forEach(item => {
  //   let msg = state.messagesList.find(m => m._id === item._id)
  //   let unreadNum = 0
  //   let lastMsg = 0
  //   if (msg) {
  //     msg.list.forEach(i => {
  //       !i.read && unreadNum++
  //       lastMsg = i
  //     })
  //   }
  //   result.push({
  //     ...item,
  //     unreadNum,
  //     lastMsg
  //   })
  // })
  return state.data.friends
}
export const detailUserData = (state) => {
  let id = state.detailUserId
  if (id === 0) {
    return state.data.self
  }
  let recode = state.data.friends.find(f => f._id === id)
  return recode
}
