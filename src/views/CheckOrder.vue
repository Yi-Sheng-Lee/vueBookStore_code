<template>
  <div class="container">
    <loading :active.sync="isLoading"/>
    <div class="row mt-4">
      <div class="col-md col-12">
        <div class="alert alert-primary text-center text-primary rounded" role="alert">第一步: 輸入資料</div>
      </div>
      <div class="col-md col-12">
        <div class="alert alert-light text-center rounded" role="alert">第二步: 金流付款</div>
      </div>
      <div class="col-md col-12">
        <div class="alert alert-light text-center rounded" role="alert">第三步: 完成付款</div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8" v-bind="getProduct">
      <h1 class="text-center">結帳清單</h1>
      <table class="table table-striped">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="(item) in getProduct.carts" :key="item.id">
            <td class="align-middle">
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">已套用優惠券</div>
            </td>
            <td class="align-middle">{{ item.qty }} 本</td>
            <td class="align-middle">{{ item.final_total | currency }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">總計</td>
            <td>{{ getProduct.final_total | currency }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    </div>

    <div class="row justify-content-center">
      <form class="col-md-6">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input
            type="email"
            class="form-control"
            :class="{'is-invalid': errors.has('email')}"
            name="email"
            id="useremail"
            v-model="form.user.email"
            placeholder="請輸入 Email"
            v-validate="'required|email'"
          >
          <span class="text-danger" v-if="errors.has('email')">{{'電子郵件欄位不正確'}}</span>
        </div>
        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input
            type="text"
            class="form-control"
            :class="{'is-invalid': errors.has('name')}"
            name="name"
            id="username"
            v-model="form.user.name"
            placeholder="輸入姓名"
            v-validate="'required'"
          >
          <span class="text-danger" v-if="errors.has('name')">{{'欄位的姓名不正確'}}</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input
            type="tel"
            class="form-control"
            id="usertel"
            name="tel"
            v-model="form.user.phone"
            placeholder="請輸入電話"
            v-validate="'required|numeric'"
          >
          <span class="text-danger" v-if="errors.has('tel')">{{'欄位的電話不正確'}}</span>
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input
            type="text"
            class="form-control"
            name="address"
            id="useraddress"
            v-model="form.user.address"
            placeholder="請輸入地址"
            v-validate="'required|'"
          >
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="comment">留言</label>
          <textarea
            name
            id="comment"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-right d-flex justify-content-between">
          <button type="button" class="btn btn-primary" @click.prevent="back">回上頁</button>
          <button type="submit" class="btn btn-danger" @click.prevent="createOrder">送出訂單</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      product: {}, // 存放modal 資料
      getProduct: {},
      isLoading: false,
      status: {
        //局部 loading 效果
        loadingItem: ""
      },
      form: {
        user: {
          name: "",
          email: "",
          phone: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      this.$http.get(api).then(response => {
        vm.getProduct = response.data.data;
        vm.status.loadingItem = "";
        //console.log("購物車內容", vm.getProduct);
      });
    },
    deleteCartItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        console.log(vm.getProduct);
        vm.getCart();
        vm.isLoading = false;
      });
    },
    checkCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/coupon`;
      const coupon = {
        code: vm.couponCode
      };
      this.$http.post(api, { data: coupon }).then(response => {
        //console.log("購物車內容", response);
        vm.getCart();
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order`;
      const order = vm.form;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$http.post(api, { data: order }).then(response => {
            console.log("check", response);
            vm.isLoading = true;
            if (response.data.success) {
              console.log(response.data.orderId);
              vm.$router.push(`checklist/${response.data.orderId}`);
              vm.isLoading = false;
            }
          });
        } else {
        }
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getCart()
  }
}
</script>

<style>
@media screen and (min-width: 576px){
  .w-md-50{
    width: 50%;
}
}

</style>
