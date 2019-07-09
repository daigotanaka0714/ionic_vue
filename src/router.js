import Vue from 'vue';
import Top from './views/Top.vue';
import {
  IonicVueRouter
} from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import( /* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
