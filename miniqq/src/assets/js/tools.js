/**
 * Created by luyanxiang on 2018/11/13.
 */
export function timeDesc (time) {
  var date = new Date().getTime()
  var decTime = date - time
  var decDay = Math.floor(decTime / (1000 * 60 * 60 * 24))
  var dateTime = new Date(time)
  if (decDay < 1) {
    let h = dateTime.getHours()
    let m = dateTime.getMinutes() + ''
    h = h > 12 ? `下午${h - 12}` : `上午${h}`
    m = returnDoubleDate(m)

    return h + ':' + m
  } else if (decDay === 1) {
    return '昨天'
  } else if (decDay > 1 && decDay <= 5) {
    var week = dateTime.getDay()
    var weekArr = ['天', '一', '二', '三', '四', '五', '六']
    return `星期${weekArr[week]}`
  } else {
    let M = returnDoubleDate(dateTime.getMonth() + 1 + '')
    let d = returnDoubleDate(dateTime.getDate() + '')
    return M + '-' + d
  }
}

function returnDoubleDate (time) {
  return ('00' + time).substr(time.length)
}
