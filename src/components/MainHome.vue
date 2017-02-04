<template>
  <div class="content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!--1、指示点放在这或放在外面-->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style scoped>
  @import "../assets/swiper/swiper-3.4.0.min.css";

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

<script>
  import Swiper from '../assets/swiper/swiper-3.4.0.jquery.min'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    ready(){
      console.log('MainHome ready');
    },
    components: {},
    created () {


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

</script>
