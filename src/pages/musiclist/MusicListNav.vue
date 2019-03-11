<template>
  <div class="music-nav">
    <div class="log url hd">
      <h2>音乐榜单</h2>
      <router-link to='/more' tag='div' class='more'>
        更多
      </router-link>
    </div>
    <ul>
      <router-link tag='li' to='/home/hot'>热歌榜</router-link>
      <span class="gap-line"></span>
      <router-link tag='li' to='/home/news'>新歌榜</router-link>
      <span class="gap-line"></span>
      <router-link tag='li' to='/home/king'>King榜</router-link>
      <span class="gap-line"></span>
    </ul>
  </div>
</template>

<script>
import HotList from './HotList'
import NewsList from './NewsList'
import KingList from './KingList'
export default {
  name: 'MusicListNav',
  components: {
    HotList,
    NewsList,
    KingList
  }
}
</script>

<style scoped>
.music-nav{
  background-color: #fff;
  padding: 10px 17px;
}
.hd{
  margin: 14px 0 18px 0;
  display: flex;
}
.hd h2{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin: 0;
  padding: 0;
  font-size: 20px;
}
.hd{
  margin-bottom: 0;
}
.hd .more{
  font-size: 12px;
}
ul{
  display: flex;
}
ul li{
  padding: 18px 0 12px 0;
  font-size: 16px;
  flex: 1;
  text-align: center;
  color: #999;
  position: relative;
  z-index: 2;
}
ul li a{
  display: block;
}
ul li a.active{
  color: #299de7 !important;
}
.gap-line{
  position: absolute;
  right: 0;
  top: 20px;
  height: 18px;
  width: 1px;
  border-left: 1px solid #888;
}
.router-link-active{
  color: #3e389a;
}
</style>
