<template>
  <div>
    <MusicList :url="url" />
  </div>
</template>

<script>
import MusicList from '@/components/MusicList'
export default {
  name: 'NewsList',
  data () {
    return {
      url: '/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0'
    }
  },
  components: {
    MusicList
  }
}
</script>

<style scoped>
</style>
