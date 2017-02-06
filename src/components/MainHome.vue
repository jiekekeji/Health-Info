<template>

  <div class="base content">
    <!--start 顶部标题-->
    <div class="title-bar">首页</div>
    <!--end 顶部标题-->
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <!--star 轮播区域-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in swiperList" v-on:click="openDetail(item)">
            <img v-bind:src="item.img">
            <!--<img v-lazy="item.img">-->
          </div>
        </div>
        <!--1、指示点放在这或放在外面-->
        <div class="swiper-pagination"></div>
      </div>
      <!--end 轮播区域-->
      <!--start 分类菜单-->
      <div class="clz-menu">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <!--end 分类菜单-->
      <!--start 热门列表-->
      <!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">-->
      <div class="hot-list">
        <div class="hot-list-container" v-for="item in newsList" v-on:click="openDetail(item)">
          <img v-lazy="item.img">
          <div class="list-detail">
            <p class="list-title">{{item.title}}</p>
            <p class="list-time">{{item.title}}</p>
          </div>
        </div>
      </div>
    </mt-loadmore>
    <!--end 热门列表-->
  </div>

</template>


<script>
  import Vue from 'vue'
  import Swiper from '../assets/swiper/swiper-3.4.0.jquery.min'
  import {BaseImg, WebImg, WebHealth} from '../constant/api'
  import '../assets/style/mint.css'
  import {Indicator} from 'mint-ui';
  import {Lazyload} from 'mint-ui';
  Vue.use(Lazyload);

  import {Loadmore} from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);

  export default{
    data(){
      return {
        swiperList: [],
        newsList: [],
        allLoaded: true
      }
    },
    methods: {
      openDetail(index) {
        this.$router.push({path: 'ImgDetail', query: {userId: 123456}});
      },
      loadTop() {
        // 加载更多数据
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
//        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
    },
    computer: {},
    components: {},
    created () {
      Indicator.open();
      var temthis = this;
      //请求轮播数据
      $.getJSON(WebImg + '?id=2&rows=2&callback=?', function (json, code) {
        Indicator.close();
        if (code !== 'success' || json.status !== true) {
          return;
        }
        var length = json.tngou.length;
        for (var i = 0; i < length; i++) {
          json.tngou[i].img = BaseImg + json.tngou[i].img;
          console.log(json.tngou[i].img)
          temthis.swiperList.push(json.tngou[i]);
        }
      })
      //请求分类数据

      //请求列表数据
      $.getJSON(WebImg + '?id=2&rows=13&callback=?', function (json, code) {
        Indicator.close();
        if (code !== 'success' || json.status !== true) {
          return;
        }
        var length = json.tngou.length;
        for (var i = 0; i < length; i++) {
          json.tngou[i].img = BaseImg + json.tngou[i].img;
          temthis.newsList.push(json.tngou[i]);
        }
      })
    },
    mounted: function () {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 1000,
        observer: true,
      });
    },
  }
</script>
<style scoped>
  @import "../assets/swiper/swiper-3.4.0.min.css";
  @import "../assets/style/base.css";

  .title-bar {
    line-height: 1.2rem;
    text-align: center;
    height: 1.2rem;
    width: 100%;
  }

  .content {
  }

  .swiper-container {
    width: 100%;
    height: 4rem;
  }

  .swiper-slide > img {
    width: 100%;
    height: 100%;
  }

  .clz-menu {
    background-color: #FAFAFA;
    display: table;
    padding-bottom: 0.1rem;
  }

  .clz-menu > ul > li {
    display: inherit;
    float: left;
    height: 1.5625rem;
    width: 1.5625rem;
    background-color: darkgreen;
    border-radius: 0.1rem;
    margin-left: 0.75rem;
    margin-top: 0.1rem;
    text-align: center;
    line-height: 0.5rem;
  }

  .hot-list {
    background-color: #FAFAFA;
  }

  .hot-list-container {
    position: relative;
    width: 100%;
    height: 2.5rem;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .hot-list-container > img {
    height: 2.1875rem;
    width: 2.1875rem;
    border-radius: 0.1rem;
    margin-top: 0.05rem;
    margin-left: 0.05rem;
    margin-bottom: 0.05rem;
    margin-right: 0.05rem;
  }

  .hot-list-container > img [lazy=loading] {
    height: 2.1875rem;
    width: 2.1875rem;
    /*margin: auto;*/
    /*background-color: red;*/
  }

  .list-detail {
    position: absolute;
    left: 2.2875rem;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .list-detail > .list-title {
    font-size: 0.4rem;
    width: 100%;
    height: 1.7rem;
    /*padding: 4px;*/
    text-overflow: ellipsis;
    /*margin: 4px;*/
  }

  .list-detail > .list-time {
    font-size: 14px;
    line-height: 0.5rem;
    width: 100%;
    height: 0.5rem;
    background-color: beige;
    text-indent: 5px;
  }
</style>
