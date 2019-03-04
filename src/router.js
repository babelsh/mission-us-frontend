import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Objetivo from './views/Objetivo.vue';
import Atividade from './views/Atividade.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/home',
      name: 'home',
      component: Home,
      props: true,
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
      path: '/objetivo',
      name: 'objetivo',
      component: Objetivo,
    },
    {
      path: '/atividade',
      name: 'atividade',
      component: Atividade,
    },
  ],
});
