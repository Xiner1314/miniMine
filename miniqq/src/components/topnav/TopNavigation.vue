<template>
  <mu-appbar style="width: 100%;">
    <mu-avatar :size="30" slot="left" @click="setDrawer(true)">
      <img src="../../../static/images/avatar.jpg">
    </mu-avatar>
    <div class="title">{{title}}</div>
    <mu-button icon slot="right" @click="showSearch(true)">
      <mu-icon color="#fff" value="search"></mu-icon>
    </mu-button>
  </mu-appbar>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {TOGGLE_SETDRAWER, TOGGLE_SEARCH_VIEW} from '../../store/mutation-types'
export default{
  name: 'TopNavigation',
  computed: mapState({title: 'headerTitle'}),
  methods: mapMutations({setDrawer: TOGGLE_SETDRAWER, showSearch: TOGGLE_SEARCH_VIEW})
}
</script>
<style scoped>
  .mu-appbar {
    background: #2955F3;
    background: linear-gradient(to right, #2955Fc 0%, #7db8e7 70%);
  }
  .mu-appbar .title {
    color: white;
    text-align: center;
  }
  .mu-appbar .mu-avatar {
    margin-left: 12px;
  }
</style>
