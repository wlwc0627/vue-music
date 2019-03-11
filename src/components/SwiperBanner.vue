<template>
  <div class="banner">
    <swiper>
      <swiper-slide>
        <img src="../assets/img/b1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/b2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/b3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name: 'SwiperBanner',
  data () {
    return {
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: true,
      loop: true
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.banner{
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.banner img{
  width: 100%;
  height: auto;
}
</style>
