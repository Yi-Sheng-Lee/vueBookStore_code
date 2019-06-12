import Vue from 'vue'

// 將 event bus 掛載在 Vue 原型下面，可對 bus 直接做呼叫

Vue.prototype.$bus = new Vue()

// 自定義名稱 'messsage:push'
// message: 傳入參數
// status: 樣式，預設值為 warning

// this.$bus.$emit('messsage:push', message, status)
