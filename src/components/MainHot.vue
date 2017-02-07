<template>
  <div>
    <div>热门</div>
  </div>
</template>
<style scoped>
</style>
<script>
  import md5 from 'js-md5'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {},
    created () {
      console.log('md5=' + md5('123'));
    },
    mounted: function () {
      console.log(this);

    },
    activated: function () {
      console.log('activated');
    },
    beforeRouteEnter  (to, from, next) {
      console.log('beforeRouteEnter');
      next();
    },
    beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave=');
      next();
    },
  }
</script>
