<template>
  <div id="app">
    <div class="content-op">
      <top-nav></top-nav>
    </div>
    <router-view/>
    <div class="tabbar">
      <bottom-tab></bottom-tab>
    </div>
    <!--聊天页面-->
    <chat-view v-if="chat"></chat-view>
    <!--侧栏抽屉-->
    <SettingDrawer></SettingDrawer>
    <!--用户详情页面-->
    <DetailView v-if="showDetail"></DetailView>
    <!--搜索页面-->
    <SearchView v-if="showSearch"></SearchView>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TopNav from './components/topnav/TopNavigation'
import BottomTab from './components/bottomTab/BottomTab'
import ChatView from './components/chatView/ChatView'
import SettingDrawer from './components/settingDrawer/SettingDrawer'
import DetailView from './components/detailView/DetailView'
import SearchView from './components/searchView/SearchView'
export default {
  name: 'App',
  computed: mapState({allData: 'data', chat: 'chat', showDetail: 'showDetail', showSearch: 'showSearch'}),
  components: {
    TopNav,
    BottomTab,
    ChatView,
    SettingDrawer,
    DetailView,
    SearchView
  }
}
</script>

<style scoped>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
