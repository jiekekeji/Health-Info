<template>
  <div>
    <!--start 跑马灯公告-->
    <div class="txtMarquee-top">
      <ul class="infoList">
        <li v-for="item in infoList">{{item}}</li>
      </ul>
    </div>
    <!--end 跑马灯公告-->
  </div>
</template>
<style scoped>
  .txtMarquee-top {
    height: auto;
    width: 100%;
    background-color: azure;
  }

  .txtMarquee-top > .infoList {
    width: 100%;
    height: auto;
  }

  .infoList > li {
    height: 0.9rem;
    width: 100%;
    text-align: center;
    border: 0.1rem solid transparent;
  }
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
      this.loadNoticeData();
    },
    mounted: function () {

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
    methods: {
      //加载公告数据
      loadNoticeData(){
        var me = this;
        setTimeout(function () {
          for (var i = 0; i < 10; i++) {
            me.infoList.push(i);
          }
          //初始化跑马灯
          me.$nextTick(function () {
            console.log('v-for渲染已经完成');
            jQuery(".txtMarquee-top").slide({
              mainCell: ".infoList",
              autoPlay: true,
              effect: "topMarquee",
              vis: 4,
              interTime: 50
            });
          })
        }, 3 * 1000);
      }
    }
  }
</script>
