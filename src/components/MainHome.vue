<template>
    <div class="base content">
        <!--start 顶部标题-->
        <div class="title-bar">首页</div>
        <!--end 顶部标题-->
        <!--star 轮播区域-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiperList">
                    <img v-bind:src="item.img" v-on:click="openDetail($index)">
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
        <div class="hot-list">
            <div class="hot-list-container">
                <img src="../assets/icon/icon-main-home-ac.png">
                <div class="list-detail">

                </div>
            </div>
        </div>
        <!--end 热门列表-->
    </div>
</template>


<script>
    import Vue from 'vue'
    import Swiper from '../assets/swiper/swiper-3.4.0.jquery.min'
    import {BaseURL, ImgURL} from '../constant/api'
    import 'mint-ui/lib/style.css'
    import {Indicator} from 'mint-ui';
    import {Lazyload} from 'mint-ui';
    Vue.use(Lazyload);

    export default{
        data(){
            return {
                ImgURL: ImgURL,
                swiperList: [],
            }
        },
        methods: {
            openDetail:function(index) {
                console.log('index');
                this.$router.push({path: 'ImgDetail', query: {userId: 123456}});
            }
        },
        computer: {
            formatImg: function (url) {
                return ImgURL + url;
            }
        },
        components: {},
        created () {
            var temthis = this;
            $.getJSON(BaseURL + '/list?page=2&rows=5&callback=?', function (json, code) {
                if (code !== 'success' || json.status !== true) {
                    return;
                }
                var length = json.tngou.length;
                for (var i = 0; i < length; i++) {
                    json.tngou[i].img = ImgURL + json.tngou[i].img;
                    console.log(json.tngou[i].img)
                    temthis.swiperList.push(json.tngou[i]);
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
        line-height: 0.5rem;
        text-align: center;
        height: 0.5rem;
        width: 100%;
    }

    .content {
    }

    .swiper-container {
        width: 100%;
        height: 120px;
        background-color: antiquewhite;
    }

    .swiper-slide > img {
        width: 100%;
        height: 120px;
    }

    .clz-menu {
        background-color: #FAFAFA;
        display: table;
        padding-bottom: 0.1rem;
    }

    .clz-menu > ul > li {
        display: inherit;
        float: left;
        height: 0.5rem;
        width: 0.5rem;
        background-color: darkgreen;
        border-radius: 0.1rem;
        margin-left: 0.24rem;
        margin-top: 0.1rem;
        text-align: center;
        line-height: 0.5rem;
    }

    .hot-list-container {
        position: relative;
        width: 100%;
        height: 0.8rem;
        background-color: azure;
        margin-top: 2px;
        margin-bottom: 2px;
    }

    .hot-list-container > img {
        height: 0.7rem;
        width: 0.7rem;
        border-radius: 0.1rem;
        margin-top: 0.05rem;
        margin-left: 0.05rem;
        margin-bottom: 0.05rem;
        margin-right: 0.05rem;
    }

    .list-detail {
        position: absolute;
        left: 0.8rem;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>
