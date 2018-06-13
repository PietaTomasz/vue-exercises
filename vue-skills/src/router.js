import Vue from 'vue';
import Router from 'vue-router';
import Skills from './components/Skills';
import Home from './components/Home';
import About from './components/About';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },{
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})