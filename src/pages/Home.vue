<template>
  <div class="home">
    <TodayRecommend title='今日推荐' type='1'/>
    <NewsMusic />
    <SwiperBanner />
    <MusicListNav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <TodayRecommend title='热门榜单' type='24'/>
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
