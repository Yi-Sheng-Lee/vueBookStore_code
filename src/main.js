import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './bus'
import currency from './filters/currency'
import date from './filters/date'
import 'swiper/dist/css/swiper.css'

axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.component('Loading', Loading)

Vue.filter('currency', currency)
Vue.filter('date', date)

Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)
Vue.use(VeeValidate, {
  // eslint-disable-next-line no-use-before-define
  i18n,
  dictionary: {
    zhTW
  }
})

/* eslint-disable no-new */
const i18n = new VueI18n({
  locale: 'zhTW'
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  if (to.meta.requiresAuth) {
    const api = `https://vue-course-api.hexschool.io/api/user/check`
    axios.post(api).then(response => {
      console.log(response.data)
      if (response.data.success) {
        next()
      } else {
        console.log('要驗證')
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
