<template>
  <div class="mt-4">
      <loading :active.sync="isLoading"/>
    <div class="text-right">
      <button class="btn btn-primary" @click="openModal(true)">建立優惠券</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>編號</th>
          <th>名稱</th>
          <th>優惠碼</th>
          <th>優惠折扣</th>
          <!-- <th>啟用狀態</th> -->
          <th>編輯</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in coupons" :key="item.id">
          <td>{{index+1}}</td>
          <td>{{item.title}}</td>
          <td>{{item.code}}</td>
          <td>{{item.percent}} %</td>
          <!-- <td v-if="item.is_enable" true-value=1 false-value=0 class="text-success">啟用</td>
          <td v-else>未啟用</td> -->
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="openDeleteModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @emitPages="getCoupons"></Pagination>
    <!-- modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增優換券</span>
              <span v-else>編輯 {{tempCoupon.title}}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="title">優惠券名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempCoupon.title"
                  >
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="percent">優惠碼</label>
                    <input
                      type="text"
                      class="form-control"
                      id="percent"
                      placeholder="請輸入優惠碼"
                      v-model="tempCoupon.code"
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="percent">優惠折扣</label>
                    <input
                      type="number"
                      class="form-control"
                      id="percent"
                      placeholder="請輸入優惠折扣"
                      v-model="tempCoupon.percent"
                    >
                  </div>
                </div>
                <!-- <hr> -->
                <!-- <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempCoupon.is_enable"
                      :true-value="1"
                      :false-value="0"
                    >
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deletCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//因為只有載入bootstrap 套件，並沒有真正載入jQuery的套件
import $ from "jquery";
import Pagination from "../components/Pagination";
export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {}, //分頁
      isNew: "false", //判斷是新增及修改變數，true: 新增， false: 修改
      isLoading: false, //判斷是否要取用 loading 效果
    //   status: {         //局部 loading 效果
    //       fileupLoading: false,
    //   }
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getCoupons(page = 1) { // ES6 小方法，預設值帶入 page = 1 ，之後 page 參數有改變就會帶入改變的參數
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {}; //如果是空的話，tempCoupon會是空的
        this.isNew = true; //並將isNew改為true
      } else {
        this.tempCoupon = Object.assign({}, item); // ES6寫法，將 item 放入新陣列中，再安排給 tempCoupon，
        // 因為物件傳參考的特性，所以這樣寫，避免 item 的東西受到汙染
        this.isNew = false; //將 isNew 設成 false
      }
      $("#productModal").modal("show");
    },
    updateCoupon() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethod = "post";
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = "put";
      }
      //$http[httpMethod] => $http.post or $http.put
      //用[]選取httpMethod
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide"); //關閉建立式窗
          vm.getCoupons(); //重新取得資料
        } else {
          $("#productModal").modal("hide"); //關閉建立式窗
          vm.getCoupons(); //重新取得資料
          console.log("新增失敗");
        }
      });
    },
    openDeleteModal(item) {
      this.tempCoupon = Object.assign({}, item);
      $("#delProductModal").modal("show");
    },
    deletCoupon() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      console.log(vm.tempCoupon.id);
      this.$http.delete(api, { data: vm.tempCoupon }).then(response => {
        console.log(response.data);
        $("#delProductModal").modal("hide");
        vm.getCoupons(); //重新取得資料
      });
    },
  },
  created() {
    this.getCoupons();
  }
};
</script>