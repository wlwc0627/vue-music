<template>
  <div class="home">
    <TodayRecommend title='今日推荐' url='/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0'/>
    <NewsMusic />
    <SwiperBanner />
    <MusicListNav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <TodayRecommend title='热门榜单' url='/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24&size=6&offset=0'/>
  </div>
</template>

<script>
import TodayRecommend from '@/components/TodayRecommend'
import NewsMusic from '@/components/NewsMusic'
import SwiperBanner from '@/components/SwiperBanner'
import MusicListNav from './musiclist/MusicListNav'
export default{
  name: 'Home',
  components: {
    TodayRecommend,
    NewsMusic,
    SwiperBanner,
    MusicListNav
  }
}
</script>

<style lang='css' scoped>
.home{
  padding-top: 50px;
}
</style>
