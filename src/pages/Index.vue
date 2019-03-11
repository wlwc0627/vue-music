<template>
  <div class="index">
    <ul>
      <router-link to='/home' tag='li'>
        <img src="../assets/logo-ea5.png" alt="">
      </router-link>
      <router-link to='/artists' tag='li'>
        歌手
      </router-link>
      <router-link to='/listcate' tag='li'>
        榜单
      </router-link>
      <router-link to='/ucenter' tag='li'>
        我的
      </router-link>
      <router-link to='/search' tag='li'>
        搜索
      </router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang='css' scoped>
.index img{
  width: 26px;
  height: 26px;
  margin-top: 12px;
}
.index ul{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  height: 50px;
  line-height: 50px;
  background: #f8f8f8;
}

.index ul li{
  flex: 1;
  text-align: center;
  list-style: none;
}

.index ul li a{
  font-size: 16px;
  color: #999;
}
</style>
