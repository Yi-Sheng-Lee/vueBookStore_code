<template>
  <div>
      <!-- 購物車 -->
    <div class="cart-car">
      <a href="#" data-toggle="modal" data-target="#cartModal">
        <i class="fas fa-shopping-cart fa-2x"></i>
      </a>
      <p class="nums">{{len}}</p>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="cartModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModalTitle">購買清單</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- 購物車內容 -->
            <div class="w-75 mx-auto my-5" v-bind="getProduct">
              <div class="text-center" v-if="len === 0">
                <h4>購物車已空，快去購物吧</h4>
              </div>
              <table class="table" v-else>
                <thead>
                  <th></th>
                  <th>品名</th>
                  <th>數量</th>
                  <th>單價</th>
                </thead>
                <tbody>
                  <tr v-for="(item) in tempProduct.carts" :key="item.id">
                    <td class="align-middle">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="deleteCartItem(item.id)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="align-middle">
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                    </td>
                    <td class="align-middle">{{ item.qty }}</td>
                    <td class="align-middle text-right">{{ Math.floor(item.final_total) }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">{{ tempProduct.total }}</td>
                  </tr>
                  <tr v-if="tempProduct.final_total !== tempProduct.total">
                    <td colspan="3" class="text-right text-success">折扣價</td>
                    <td class="text-right text-success">{{ Math.floor(tempProduct.final_total) }}</td>
                  </tr>
                </tfoot>
              </table>
              <div class="input-group mb-3 input-group-sm" v-if="len !== 0">
                <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="checkCoupon">套用優惠碼</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer" v-if="len !== 0">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="goCheck">結帳去</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      getProduct: {},
      couponCode: '',
      tempProduct: {},
      len: 0
    }
  },
  methods: {
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`
      this.$http.get(api).then(response => {
        vm.getProduct = response.data.data
        vm.tempProduct = response.data.data
        vm.len = response.data.data.carts.length
        // console.log("vm.carttproduct", vm.len);
      })
    },
    deleteCartItem (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart/${id}`
      this.$http.delete(api).then(response => {
        // console.log('刪除');
        vm.getCart()
      })
    },
    checkCoupon () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/coupon`
      const coupon = {
        code: vm.couponCode
      }
      this.$http.post(api, { data: coupon }).then(response => {
        // console.log("coupon", response);
        vm.getCart()
      })
    },
    goCheck () {
      this.$router.push('/checkorder')
    }
  },
  created () {
    const vm = this
    vm.getCart()
    vm.$bus.$on('orderEvent', (order) => {
      vm.tempProduct = order
      vm.len = order.carts.length
      // console.log('Event Bus', vm.tempProduct.carts.length);
    })
  }
}
</script>

<style>

.cart-car {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 3%;
  right: -8px;
  z-index: 100;
}
.nums{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: -10px;
  z-index: 101;
  text-align: center;
  border-radius: 50%;
  background-color: red;
  color: white;
}
.cart-car > a{
  display: block;
}
</style>
