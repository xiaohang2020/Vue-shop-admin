import Vue from 'vue'
import VueRouter from 'vue-router'

/* import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue' */
//路由赖加载
const Login = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Login.vue')
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Welcome.vue')
/* import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue' */
const Users = () => import(/* webpackChunkName: "user_rights_roles" */ '../components/user/Users.vue')
const Rights = () => import(/* webpackChunkName: "user_rights_roles" */ '../components/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "user_rights_roles" */ '../components/power/Roles.vue')
/* import Goods from '../components/goods/Goods.vue'
import Cate from '../components/goods/Cate.vue' */
const Goods = () => import(/* webpackChunkName: "goods_cate" */ '../components/goods/Goods.vue')
const Cate = () => import(/* webpackChunkName: "goods_cate" */ '../components/goods/Cate.vue')
/* import Params from '../components/goods/Params.vue'
import Add from '../components/goods/Add.vue'
import Edit from '../components/goods/Edit.vue' */
const Params = () => import(/* webpackChunkName: "goods_cate" */ '../components/goods/Params.vue')
const Add = () => import(/* webpackChunkName: "goods_cate" */ '../components/goods/Add.vue')
const Edit = () => import(/* webpackChunkName: "goods_cate" */ '../components/goods/Edit.vue')
/* import Orders from '../components/order/Orders.vue'
import Report from '../components/report/Report.vue' */
const Orders = () => import(/* webpackChunkName: "oders_report" */ '../components/order/Orders.vue')
const Report = () => import(/* webpackChunkName: "oders_report" */ '../components/report/Report.vue')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: Welcome
  }, {
    path: '/users',
    component: Users
  }, {
    path: '/rights',
    component: Rights
  }, {
    path: '/roles',
    component: Roles
  }, {
    path: '/goods',
    component: Goods
  }, {
    path: '/categories',
    component: Cate
  }, {
    path: '/params',
    component: Params
  }, {
    path: '/goods/add',
    component: Add
  }, {
    path: '/goods/edit',
    component: Edit
  }, {
    path: '/orders',
    component: Orders
  }, {
    path: '/reports',
    component: Report
  }]
}]

const router = new VueRouter({
  routes
})

//判断登录状态，挂载路由导航守卫 to:将要访问的路径  from:从那个路径跳转而来  next:放行
router.beforeEach((to, from, next) => {
  //获取token
  const token = window.sessionStorage.getItem('token');
  if (to.path === '/login') {
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
