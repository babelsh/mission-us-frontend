import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Descobrindo from './views/Descobrindo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/descobrindo',
      name: 'descobrindo',
      component: Descobrindo,
    }
  ],
});
