<template>
  <div class="container-fluid">
    <loading :active.sync="isLoading"/>
    <div class="row">
      <div class="col-sm-3 col-md-2">
        <div
          class="nav flex-sm-column nav-pills text-center justify-content-around sticky-top my-2"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link active"
            id="v-pills-all-tab"
            data-toggle="pill"
            href="#all"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >全部</a>
          <a
            class="nav-link"
            id="v-pills-office-tab"
            data-toggle="pill"
            href="#office"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >Office系列</a>
          <a
            class="nav-link"
            id="v-pills-sql-tab"
            data-toggle="pill"
            href="#sql"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >資料庫系列</a>
          <a
            class="nav-link"
            id="v-pills-others-tab"
            data-toggle="pill"
            href="#others"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >其他程式系列</a>
        </div>
      </div>
      <!-- 全部 -->
      <div class="col-sm-9 col-md-10">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="v-pills-all-tab"
          >
            <div class="row">
              <div
                class="col-sm-12 col-md-6 col-lg-4 mb-4"
                v-for="(item) in filterArray"
                :key="item.id"
              >
                <div class="card border-0 shadow-sm">
                  <div
                    style="height: 150px; background-size: cover; background-position: center"
                    :style="{'backgroundImage': `url(${item.imgURL})`}"
                  ></div>
                  <div class="card-body">
                    <!-- 分類 -->
                    <section class="d-flex justify-content-between">
                      <div>
                        <h5 class="card-title">
                          <!-- 標題 -->
                          <a href="#" class="text-dark">{{item.title}}</a>
                        </h5>
                      </div>
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <h5 class="badge badge-secondary mb-2">{{item.language}}</h5>
                        <h5 class="badge badge-secondary">{{item.category}}</h5>
                      </div>
                    </section>
                    <!-- 內容 -->
                    <p class="card-text">{{item.content}}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <!-- <div class="h5">2,800 元</div> -->
                      <del
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >原價 {{item.origin_price | currency}} 元</del>
                      <div class="h6" v-else>原價 {{item.origin_price | currency}} 元</div>
                      <div
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >限時 {{item.price | currency}} 元</div>
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      @click.prevent="gotoDetail(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm ml-auto"
                      @click="addToCart(item.id)"
                    >
                      <!-- <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i> -->
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Office系列 -->
          <div
            class="tab-pane fade"
            id="office"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div class="row">
              <div
                class="col-sm-12 col-md-6 col-lg-4 mb-4"
                v-for="(item) in filterArrayOffice"
                :key="item.id"
              >
                <div class="card border-0 shadow-sm">
                  <div
                    style="height: 150px; background-size: cover; background-position: center"
                    :style="{'backgroundImage': `url(${item.imgURL})`}"
                  ></div>
                  <div class="card-body">
                    <!-- 分類 -->
                    <section class="d-flex justify-content-between">
                      <div>
                        <h5 class="card-title">
                          <!-- 標題 -->
                          <a href="#" class="text-dark">{{item.title}}</a>
                        </h5>
                      </div>
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <h5 class="badge badge-secondary mb-2">{{item.language}}</h5>
                        <h5 class="badge badge-secondary">{{item.category}}</h5>
                      </div>
                    </section>
                    <!-- 內容 -->
                    <p class="card-text">{{item.content}}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <!-- <div class="h5">2,800 元</div> -->
                      <del
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >原價 {{item.origin_price | currency}} 元</del>
                      <div class="h6" v-else>原價 {{item.origin_price | currency}} 元</div>
                      <div
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >限時 {{item.price | currency}} 元</div>
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                       @click.prevent="gotoDetail(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm ml-auto"
                      @click="addToCart(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 資料庫系列 -->
          <div
            class="tab-pane fade"
            id="sql"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <div class="row">
              <div
                class="col-sm-12 col-md-6 col-lg-4 mb-4"
                v-for="(item) in filterArrayDB"
                :key="item.id"
              >
                <div class="card border-0 shadow-sm">
                  <div
                    style="height: 150px; background-size: cover; background-position: center"
                    :style="{'backgroundImage': `url(${item.imgURL})`}"
                  ></div>
                  <div class="card-body">
                    <!-- 分類 -->
                    <section class="d-flex justify-content-between">
                      <div>
                        <h5 class="card-title">
                          <!-- 標題 -->
                          <a href="#" class="text-dark">{{item.title}}</a>
                        </h5>
                      </div>
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <h5 class="badge badge-secondary mb-2">{{item.language}}</h5>
                        <h5 class="badge badge-secondary">{{item.category}}</h5>
                      </div>
                    </section>
                    <!-- 內容 -->
                    <p class="card-text">{{item.content}}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <!-- <div class="h5">2,800 元</div> -->
                      <del
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >原價 {{item.origin_price | currency}} 元</del>
                      <div class="h6" v-else>原價 {{item.origin_price | currency}} 元</div>
                      <div
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >限時 {{item.price | currency}} 元</div>
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                       @click.prevent="gotoDetail(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm ml-auto"
                      @click="addToCart(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 其他程式系列 -->
          <div
            class="tab-pane fade"
            id="others"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <div class="row">
              <div
                class="col-sm-12 col-md-6 col-lg-4 mb-4"
                v-for="(item) in filterArrayOther"
                :key="item.id"
              >
                <div class="card border-0 shadow-sm">
                  <div
                    style="height: 150px; background-size: cover; background-position: center"
                    :style="{'backgroundImage': `url(${item.imgURL})`}"
                  ></div>
                  <div class="card-body">
                    <!-- 分類 -->
                    <section class="d-flex justify-content-between">
                      <div>
                        <h5 class="card-title">
                          <!-- 標題 -->

                          <a class="text-dark" @click.prevent="">{{item.title}}</a>
                        </h5>
                      </div>
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <h5 class="badge badge-secondary mb-2">{{item.language}}</h5>
                        <h5 class="badge badge-secondary">{{item.category}}</h5>
                      </div>
                    </section>
                    <!-- 內容 -->
                    <p class="card-text">{{item.content}}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <!-- <div class="h5">2,800 元</div> -->
                      <del
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >原價 {{item.origin_price | currency}} 元</del>
                      <div class="h6" v-else>原價 {{item.origin_price | currency}} 元</div>
                      <div
                        class="h6"
                        v-if="item.origin_price !== item.price"
                      >限時 {{item.price | currency}} 元</div>
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                       @click.prevent="gotoDetail(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm ml-auto"
                      @click="addToCart(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cart/>
  </div>
</template>

<script>
import $ from "jquery"
import Cart from "../components/Cart"
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
      couponCode: ""
    };
  },
  components: {
    Cart,
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/products/all`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        //console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    getSingleItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(api).then(response => {
        //console.log(response);
        vm.isLoading = false;
        vm.product = response.data.product;
        vm.status.loadingItem = false;
        $("#productModal").modal("show");
        vm.status.loadingItem = "";
        vm.getCart();
      });
    },
    addToCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        //console.log(response);
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
    gotoDetail(id){
      this.$router.push(`/detailbook/${id}`);
    }
  },
  computed: {
    filterArray(){
      const vm = this;
      return vm.products.filter(function(item) {
        return item.is_enable === 1;
      });
    },
    filterArrayOther() {
      const vm = this;
      return vm.products.filter(function(item) {
        return item.category === "其它程式" && item.is_enable === 1;
      });
    },
    filterArrayDB() {
      const vm = this;
      return vm.products.filter(function(item) {
        return item.category === "資料庫" && item.is_enable === 1;
      });
    },
    filterArrayOffice() {
      const vm = this;
      return vm.products.filter(function(item) {
        return item.category === "Office" && item.is_enable === 1;
      });
    }
  },
  created() {
    this.getProducts();
    this.getCart();
    
  }
};
</script>

<style scoped>
.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 24px;
}
</style>
