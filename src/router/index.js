import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home
}]

const router = new VueRouter({
  routes
})

//判断登录状态，挂载路由导航守卫 to:将要访问的路径  from:从那个路径跳转而来  next:放行
router.beforeEach((to, from, next) => {
  //获取token
  const token = window.sessionStorage.getItem('token');
  if (to.path == '/login') {
    //存在token直接重定向到后台首页
    if (token) {
      return next('/home');
    }
    return next();
  }
  if (!token) {
    return next('/login');
  }
  next();
});

export default router
