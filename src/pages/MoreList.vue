<template>
  <div class="container more-list">
    <div class="wrapper">
      <h3>{{ this.$route.params.title }}</h3>
      <VuePullRefresh :on-refresh='onRefresh'>
        <router-link :to="{name:'MusicPlay',params:{songid:item.song_id}}" tag='div' class="info url log" v-for="(item, index) in moreListData" :key="index">
          <div class="poster">
            <img :src="item.pic_big" alt="item.title">
          </div>
          <div class="text-wrap">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="author">
              {{ item.artist_name }}
            </div>
          </div>
        </router-link>
      </VuePullRefresh>
    </div>
  </div>
</template>

<script>
import VuePullRefresh from 'vue-pull-refresh'
export default {
  name: 'MoreList',
  data () {
    return {
      moreListData: [],
      offset: 12
    }
  },
  components: {
    VuePullRefresh
  },
  mounted () {
    let moreListUrl = this.HOST + '/v1/restserver/ting?method=baidu.ting.billboard.billList&type=' + this.$route.params.musictype + '&size=12&offset=0'
    this.$axios.get(moreListUrl).then(res => {
      this.moreListData = res.data.song_list
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    onRefresh: function () {
      let that = this
      let moreListUrl = this.HOST +'/v1/restserver/ting?method=baidu.ting.billboard.billList&type='+ this.$route.params.musictype + '&size=12&offset='+ this.offset
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          that.$axios.get(moreListUrl).then(res => {
            that.offset >= res.data.billboard.billboard_songnum - 12 ? console.log('没数据了') : that.offset += 12
            that.moreListData = res.data.song_list
            resolve()
          }).catch(error => {
            console.log(error)
          })
        })
      })
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 55px;
}
h3{
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}
.wrapper .info{
  width: 45%;
  float: left;
  text-align: left;
  padding-left: 17px;
  display: block;
  margin-bottom: 10px;
  position: relative;
}
.wrapper .info .text-wrap .title{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 20px;
  font-size: 14px;
}
.wrapper .info .text-wrap .author{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  line-height: 18px;
  color: #888;
}
</style>
