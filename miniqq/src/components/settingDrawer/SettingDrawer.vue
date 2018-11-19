<template>
  <mu-drawer :open="open" :docked="false" @close="close(false)">
    <div class="header">
      <div class="title">
        <mu-avatar :size="36" @click="showDetail">
          <img :src="self.avatar">
        </mu-avatar>
        <div class="desc">
          <div class="name">{{self.name}}</div>
          <div class="email">e-mail: {{self.email}}</div>
        </div>
      </div>
      <div class="phone">
        TEL:{{self.phone}}
      </div>
      <div class="explain">
        {{self.explain}}
      </div>
    </div>
    <mu-list class="setList">
      <mu-list-item button>
        <mu-icon value="remove_red_eye"></mu-icon>
        <mu-list-item-title>了解会员特权</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="payment"></mu-icon>
        <mu-list-item-title>QQ钱包</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="color_lens"></mu-icon>
        <mu-list-item-title>个性装扮</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="folder_special"></mu-icon>
        <mu-list-item-title>我的收藏</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="crop_original"></mu-icon>
        <mu-list-item-title>我的相册</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="folder_open"></mu-icon>
        <mu-list-item-title>我的文件</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="settings_input_antenna"></mu-icon>
        <mu-list-item-title>免流量特权</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <div class="footer">
      <div class="btn">
        <mu-icon value="settings" size="20"></mu-icon>
        <div class="name">设置</div>
      </div>
      <div class="btn">
        <mu-icon value="brightness_3" size="20"></mu-icon>
        <div class="name">夜间</div>
      </div>
      <div class="btn">
        <i class="icon">23°</i>
        <div class="name">广州</div>
      </div>
    </div>
  </mu-drawer>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import {TOGGLE_SETDRAWER} from '../../store/mutation-types'
export default{
  name: 'SettingDrawer',
  computed: mapState({
    open: 'setDrawer',
    self: state => state.data.self
  }),
  methods: {
    ...mapMutations({
      close: TOGGLE_SETDRAWER
    }),
    ...mapActions({show: 'showDetail'}),
    showDetail () {
      this.close(false)
      this.show(this.self._id)
    }
  }
}
</script>
<style scoped>
  .header {
    background: url(../../../static/images/avatar-like.jpg);
    background-size: 256px 168px;
    color: #fff;
    padding: 70px 10px 10px;
    font-size: 0;
  }
  .header .title {
    display: flex;
  }
  .header .title .desc {
    flex: 1;
    margin-left: 5px;
    box-sizing: border-box;
  }
  .header .title .name {
    font-size: 20px;
    font-weight: bold;
  }
  .header .title .email {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .header  .phone {
    font-size: 10px;
    font-weight: bold;
  }
  .header .explain {
    width: 100%;
    font-size: 12px;
    font-weight:bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .setList .mu-icon {
    color: rgba(7, 17, 27, 0.5);
  }
  .setList .mu-item-title {
    margin-left: 10px;
    font-size: 16px;
    color: rgba(7, 17, 27, 0.5);
  }
  .footer {
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  .footer .btn {
    display: inline-block;
    margin: 0 10px;
    /*width: 24px;*/
    text-align: center;
  }
  .footer .btn .icon {
    font-size: 9px;
    display: inline-block;
  }
  .footer .btn .name {
    font-size: 9px;
    display: inline-block;
    vertical-align: top;
  }
</style>
