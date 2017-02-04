<template>
  <div class="content">
    <!--顶部标题-->
    <div class="title-bar">首页</div>
    <!--轮播区域-->
    <div class="swiper-container">
      <div class="swiper-wrapper" v-for="item in swiperList">
        <div class="swiper-slide">
          <!--<img v-lazy="item">-->
        </div>
        <!--<div class="swiper-slide">Slide 2</div>-->
        <!--<div class="swiper-slide">Slide 3</div>-->
      </div>
      <!--1、指示点放在这或放在外面-->
      <div class="swiper-pagination"></div>
    </div>
    <!--分类菜单-->
    <div></div>

    <!--热门-->
    <div></div>
  </div>
</template>


<script>
  import Vue from 'vue'
  import Swiper from '../assets/swiper/swiper-3.4.0.jquery.min'
  import {Server} from '../constant/api'
  import {Lazyload} from 'mint-ui';
  Vue.use(Lazyload);

  export default{
    data(){
      return {
        swiperList: [],
      }
    },
    method: {
      getswiperList: function () {
        $.getJSON('http://www.tngou.net/tnfs/api/list?page=1&rows=10&&callback=?', function (json, code) {
          console.log(json + code);
        })
      }
    },
    ready(){
      console.log('MainHome ready');
    },
    components: {},
    created () {
      console.log(this.swiperList);
      $.getJSON('http://www.tngou.net/tnfs/api/list?page=1&rows=10&&callback=?', function (json, code) {
        if (code !== 'success' || json.status !== true) {
          return;
        }
        var length = json.tngou.length;
        for (var i = 0; i < length; i++) {
//            console.log(this.$el.data.swiperList);
//          this.swiperList[](json.tngou[i]);
        }
//        this.swiperList.push()json.tngou;
//        console.log(this.swiperList.length);
      })
    },
    mounted: function () {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        /* nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',   */
        grabCursor: true,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500
      });
    }
  }

  /**
   * 获取轮播列表
   */
  function getSwiperList() {

  }

</script>
<style scoped>
  @import "../assets/swiper/swiper-3.4.0.min.css";

  .title-bar {
    line-height: 0.5rem;
    text-align: center;
    height: 0.5rem;
    width: 100%;
  }

  .content {
    font-size: 18px;
    background-color: chartreuse;
  }

  .swiper-container {
    width: 100%;
    height: 200px;
    background-color: antiquewhite;
  }

</style>
