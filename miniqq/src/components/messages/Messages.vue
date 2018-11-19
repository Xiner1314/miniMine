<template>
<div class="messages">
  <SearchBar></SearchBar>
  <div v-if="ajax">加载中</div>
  <mu-list textline="two-line" v-else>
    <div v-for="item in friends" class="list"  :key="item._id">
      <v-touch @tap="itemClick(item)" @swipeleft="onSwipeLeft(item._id)" @swiperight="cancelSwipe">
        <mu-list-item class="item" :class="{remove: item._id===removeId}" avatar button :ripple="false" >
          <mu-list-item-action>
            <mu-avatar :size="30" slot="left">
              <img :src="item.avatar">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-sub-title>{{item.lastMsg.msg}}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action class="desc">
            <mu-list-item-title><span class="time">{{item.lastMsg.time|getTime}}</span></mu-list-item-title>
            <mu-list-item-sub-title>
              <mu-badge :content="item.unreadNum+''" v-show="item.unreadNum" color="red"></mu-badge>
            </mu-list-item-sub-title>
          </mu-list-item-action>
        </mu-list-item>
      </v-touch>
      <div class="delete-btn" @click="deleteMsg(item)">删除</div>
    </div>
  </mu-list>
</div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import {timeDesc} from '../../assets/js/tools'
import SearchBar from './../searchBar/SearchBar'
export default{
  name: 'Messages',
  data () {
    return {
      removeId: null
    }
  },
  computed: {
    ...mapState({ajax: 'isAjax'}),
    ...mapGetters({friends: 'msgViewList'})
  },
  methods: {
    ...mapActions(['deleteMsg', 'showChat']),
    onSwipeLeft (id) {
      this.removeId = id
      console.log('我被左滑了')
    },
    cancelSwipe () {
      this.removeId = null
    },
    itemClick (user) {
      this.cancelSwipe()
      this.showChat(user)
    }
  },
  components: {
    SearchBar
  },
  filters: {
    getTime (val) {
      return timeDesc(val)
    }
  }
}
</script>
<style scoped>
  .list {
    position: relative;
  }
  .list .item {
    position: relative;
    transition: all 0.3s linear;
    background: #fff;
    z-index: 10;
  }
  .list .item.remove {
    transform: translateX(-50px);
  }
  .list .item .desc {
    text-align: right;
  }
  .list .item  .desc .time {
    display: inline-block;
    width: 100%;
    text-align: right;
  }
  .list .delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    line-height: 72px;
    background: red;
    text-align: center;
    color: #fff;
  }
</style>
