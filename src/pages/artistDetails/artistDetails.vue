<template>
  <div class="container">
  	<Title :name='this.$route.params.name' :avatar='this.$route.params.avatar' />
  	<List :ting_uid='this.$route.params.ting_uid' />
  </div>
</template>

<script>
import List from '@/components/detail/List'
import Title from '@/components/detail/Title'
export default {
  name: 'artistDetails',
  data () {
    return{

    }
  },
  components: {
    List,
    Title
  }
}
</script>

<style scoped>
.container{
  margin-top: 52px;
}
</style>
