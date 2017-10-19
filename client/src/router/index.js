import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Games from '@/components/Games';
import Login from '@/components/Login';
import Room from '@/components/Room/Room';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
    },
    {
      path: '/games/:id',
      name: 'Room',
      component: Room,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(router);
  next();
  // if (transition.to.auth) {
  //   if (!transition.to.router.app.$store.state.auth.authorized) {
  //     transition.abort();
  //     router.go({ path: '/' });
  //   }
  // }
  // transition.next();
});

export default router;
