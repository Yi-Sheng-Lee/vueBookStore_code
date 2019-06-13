<template>
  <div class="mt-4">
    <loading :active.sync="isLoading"/>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>編號</th>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買商品</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sortOrder" :key="item.id">
          <td>{{index + 1}}</td>
          <td>{{item.create_at | date}}</td>
          <td>
            <span v-text="item.user.email" v-if="item.user"></span>
          </td>
          <td>
                <table class="table-small table-borderless">
                  <tbody>
                    <tr v-for="(product) in item.products" :key="product" class="d-flex justify-content-between">
                      <td width=400>{{product.product.title}}</td>
                      <td>{{product.qty}}本</td>
                    </tr>
                  </tbody>
                </table>
                <!-- <div>
                          {{product.product.title}}
                          <span>數量 : </span><span>{{product.qty}}</span>
                      <span>{{ product.product.unit }}</span>
                </div>-->
          </td>
          <td class="text-right">{{item.total | currency}}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @emitPages="getOrderPage"></Pagination>
    <!-- modal -->
  </div>
</template>

<script>
// 因為只有載入bootstrap 套件，並沒有真正載入jQuery的套件
import Pagination from '../components/Pagination'
export default {
  data () {
    return {
      getOrder: [],
      tempProduct: {},
      pagination: {}, // 分頁
      isNew: 'false', // 判斷是新增及修改變數，true: 新增， false: 修改
      isLoading: false, // 判斷是否要取用 loading 效果
      status: {
        // 局部 loading 效果
        fileupLoading: false
      }
    }
  },
  components: {
    Pagination
  },
  methods: {
    getOrderPage (page = 1) {
      // ES6 小方法，預設值帶入 page = 1 ，之後 page 參數有改變就會帶入改變的參數
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/orders?page=${page}`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        // console.log(response.data)
        vm.isLoading = false
        vm.getOrder = response.data.orders
        vm.pagination = response.data.pagination
      })
    }
  },
  computed: {
    sortOrder () {
      const vm = this
      let finishArray = []
      if (vm.getOrder.length) {
        finishArray = vm.getOrder.sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0
          const bIsPaid = b.is_paid ? 1 : 0
          return bIsPaid - aIsPaid
        })
      }
      return finishArray
    }
  },
  created () {
    this.getOrderPage()
  }
}
</script>
<style scoped>
  .table-small td{
    padding: 0;
  }
</style>
