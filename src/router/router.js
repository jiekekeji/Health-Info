/**
 * Created by Administrator on 2017/1/20.
 */

/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


//配置组件为懒加载的方式
const Main = resolve => require(['../components/Main.vue'], resolve)
const MainHome = resolve => require(['../components/MainHome.vue'], resolve)
const MainHot = resolve => require(['../components/MainHot.vue'], resolve)
const MainVideo = resolve => require(['../components/MainVideo.vue'], resolve)
const MainMe = resolve => require(['../components/MainMe.vue'], resolve)


const ImgDetail = resolve => require(['../components/ImgDetail.vue'], resolve)
const Page3 = resolve => require(['../components/Page3.vue'], resolve)


Vue.use(VueRouter);

//路由映射配置
const routes = [
  {
    path: '/',
    redirect: '/MainHome',
    component: Main,
    children: [
      {
        path: 'MainHome',
        component: MainHome,
      }, {
        path: 'MainHot',
        component: MainHot,
      }, {
        path: 'MainVideo',
        component: MainVideo,
      }, {
        path: 'MainMe',
        component: MainMe,
      }
    ]
  },
  {
    path: '/Main',
    redirect: '/MainHome',
    component: Main,
    children: [
      {
        path: 'MainHome',
        component: MainHome,
      }, {
        path: 'MainHot',
        component: MainHot,
      }, {
        path: 'MainVideo',
        component: MainVideo,
      }, {
        path: 'MainMe',
        component: MainMe,
      }
    ]
  },
  {
    name: 'ImgDetail',
    path: '/ImgDetail',
    component: ImgDetail,
  },
  {
    path: '/Page3',
    component: Page3
  }
];


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

//创建实例
const router = new VueRouter({
  scrollBehavior,
  routes,
  mode: 'history',
  history: true,
  root: '/',
  saveScrollPosition: true,
  hashbang: false,
  suppressTransitionError: true
});

export default router;
