<template>
  <div class="container">
    <loading :active.sync="isLoading"/>
    <div class="row mt-4">
      <div class="col-md col-12">
        <div class="alert alert-light text-center rounded" role="alert">第一步: 輸入資料</div>
      </div>
      <div class="col-md col-12">
        <div class="alert text-center rounded" :class="{'alert-primary text-primary' : !order.is_paid, 'alert-light' : order.is_paid}" role="alert">第二步: 金流付款</div>
      </div>
      <div class="col-md col-12">
        <div class="alert text-center rounded" :class="{'alert-primary text-primary' : order.is_paid, 'alert-light' : !order.is_paid}" role="alert">第三步: 完成付款</div>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
        <h4>購買項目</h4>
        <table class="table">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }} / 本</td>
              <td class="align-middle">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">總計</td>
              <td>{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>
        <h4>購買人資料</h4>
        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.phone }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right" v-if="order.is_paid === false">
          <button class="btn btn-danger">確認付款去</button>
        </div>
        <div class="text-right" v-else>
          <button class="btn btn-primary" @click="gotoIndex">回首頁</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: "",
      order: {
        user: {}
      },
      isLoading: false
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order/${vm.orderId}`;

      this.$http.get(api).then(response => {
        vm.order = response.data.order;
        //console.log("購物車內容", vm.getProduct);
        console.log(response);
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.getOrder();
          vm.isLoading = false;
        }
        //console.log(response);
      });
    },
    gotoIndex() {
      this.$router.push("/");
    }
  },
  created() {
    this.orderId = this.$route.params.id;
    //對應router -> index.js 的 check_out/:id
    //console.log(this.orderId);
    this.getOrder();
  }
};
</script>