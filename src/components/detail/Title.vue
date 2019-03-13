<template>
  <div class="art-title">
    <div class="artist-header">
      <div class="artist-header-content">
      	<img :src="avatar">
      	<h2>{{ name }}</h2>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    name: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.art-title{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 160px;
  background: url('http://pic22.nipic.com/20120714/9622064_105642209176_2.jpg');
  background-size: 100% 100%;
}
.art-title .artist-header{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(200,200,200, .8);
}
.artist-header-content{
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 30px;
}
.artist-header-content img{
  display: block;
  width: 86px;
  height: 86px;
  border-radius: 43px;
  position: relative;
  left: 50%;
  margin-left: -43px;
}
.artist-header-content h2{
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
}
</style>
