<template>
  <div class="juzhao">
     <filmList></filmList>
  </div>
</template>

<script>
import filmList from '@/components/filmList'
export default {
  name: 'juzhao',
  components: {
    filmList   
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>