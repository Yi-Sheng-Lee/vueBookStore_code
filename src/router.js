import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 避免User亂打傳到空白頁面
      path: '*',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: 'introduction',
          name: 'introduction',
          component: () => import('./views/Introduction.vue')
        },
        {
          path: 'books',
          name: 'books',
          component: () => import('./views/Books.vue')
        },
        {
          path: 'newest',
          name: 'newest',
          component: () => import('./views/Newest.vue')
        },
        {
          path: 'checkorder',
          name: 'checkorder',
          component: () => import('./views/CheckOrder.vue')
        },
        {
          path: 'checklist/:id',
          name: 'checklist',
          component: () => import('./views/CheckList.vue')
        },
        {
          path: 'detailbook/:bookid',
          name: 'detailbook',
          component: () => import('./views/DetailBook.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/Products.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('./views/Coupons.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'customerlist',
          name: 'CustomerList',
          component: () => import('./views/CustomerList.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
