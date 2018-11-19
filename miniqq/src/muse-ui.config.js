/**
 * Created by luyanxiang on 2018/11/9.
 */
// import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/lib/styles/base.less'
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  BottomNav,
  Divider,
  Drawer,
  Grid,
  Icon,
  List,
  SubHeader,
  TextField,
  Tabs
} from 'muse-ui'
const components = [AppBar, Avatar, Badge, Button, BottomNav, Divider, Drawer, Grid, Icon, List, SubHeader, TextField, Tabs]
export default {
  // Vue.use会触发一个 名叫install触发并接受Vue对象作为第一个参数
  install (Vue) {
    components.forEach(c => Vue.use(c))
  }
}
