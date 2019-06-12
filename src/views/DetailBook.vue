<template>
  <div>
    <loading :active.sync="isLoading"/>
    <!-- <Alert/> -->
    <div class="row container">
      <div class="col-md-6 text-center">
        <img :src="product.imgURL" alt class="img-fluid">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item border-0 pl-0">
            <h4 class="text-primary">{{product.title}}</h4>
          </li>
          <li class="list-group-item border-0 pl-0">
            <span>語言 :&nbsp;&nbsp;</span>
            {{product.language}}
          </li>
          <li class="list-group-item border-0 pl-0">
            <span>定價 :&nbsp;&nbsp;</span>
            {{product.origin_price | currency}}
          </li>
          <li class="list-group-item border-0 pl-0">
            <span>優惠價 :&nbsp;&nbsp;</span>
            {{product.price | currency}}
          </li>
          <li class="list-group-item border-0 pl-0">
            <span>商品說明 :&nbsp;&nbsp;</span>
            {{product.description}}
          </li>
          <li class="list-group-item border-0 pl-0">
            <div class="d-flex justify-content-between">
              <form class="form-inline mr-5">
                  <select class="form-control form-control-sm" v-model="count">
                    <option  :value="num"  v-for="(num) in 10" :key="num">選購 {{num}} 本</option>
                  </select>
              </form>
              <div class="d-flex align-items-center ">
                <div class="text-muted text-nowrap mr-3">
                  小計
                  <strong>{{ count * product.price | currency }}</strong> 元
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="addToCart(product.id, count)"
                >
                加到購物車
                  <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Cart/>
  </div>
</template>

<script>
import $ from 'jquery';
import Alert from "../components/AlertMessage";
import Cart from "../components/Cart"
export default {
  data() {
    return {
      productId: "",
      count: 1,
      product: {},
      status: {
          loadingItem:"",
      },
      isLoading: false,
    };
  },
  components: {
    Alert,
    Cart
  },
  methods: {
    getSingleItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/product/${vm.productId}`;
      vm.status.loadingItem = id;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.product = response.data.product;
        vm.getCart();
        console.log(vm.product);
      });
    },
    addToCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      vm.status.loadingItem = id;
      this.$http.post(api, { data: cart }).then(response => {
        //console.log(response);
        vm.status.loadingItem = "";
        $("#productModal").modal("hide");
        if (response.data.success) {
          vm.$bus.$emit("messsage:push", ("light", response.data.message));
          vm.getCart();
        }
      });
    },
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      this.$http.get(api).then(response => {
        //console.log("getCart response", response);
        vm.getProduct = response.data.data;
        vm.status.loadingItem = "";
        vm.$bus.$emit("orderEvent", vm.getProduct);
      });
    },
  },
  created() {
    this.productId = this.$route.params.bookid;
    this.getSingleItem(this.productId);
  }
};
</script>

<style scoped>
.row{
    margin: 1rem 0;
    /* justify-content: center; */
    align-items: center;
}
</style>
