<template>
  <div>
    <div>视频</div>
    <div class="txtMarquee-top">
      <div class="bd">
        <ul class="infoList">
          <li v-for="item in infoList">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
  import md5 from 'js-md5'
  require('../assets/superslide/jquery.SuperSlide.2.1.1')
  export default{
    data(){
      return {
        msg: 'hello vue',
        infoList: []
      }
    },
    components: {},
    created () {
      var me = this;
      setTimeout(function () {
        for (var i = 0; i < 5; i++) {
          me.infoList.push(i);
        }
        //初始化跑马灯
        me.$nextTick(function () {
          console.log('v-for渲染已经完成');
          jQuery(".txtMarquee-top").slide({
            mainCell: ".bd ul",
            autoPlay: true,
            effect: "topMarquee",
            vis: 5,
            interTime: 50
          });
        })

        me.$nextTick(function () {
          console.log('数据已经更新')

        });

      }, 3 * 1000);
    },
    mounted: function () {
      console.log(this);
      jQuery(".txtMarquee-top").slide({
        mainCell: ".bd ul",
        autoPlay: true,
        effect: "topMarquee",
        vis: 5,
        interTime: 50
      });
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
