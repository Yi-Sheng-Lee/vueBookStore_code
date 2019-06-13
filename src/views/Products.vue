<template>
  <div class="mt-4">
      <loading :active.sync="isLoading"/>
    <div class="text-right">
      <button class="btn btn-primary" @click="openModal(true)">建立新商品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th width="80">語系</th>
          <th>產品名稱</th>
          <th width="80">原價</th>
          <th width="80">售價</th>
          <th width="120">啟用狀態</th>
          <th width="80">編輯</th>
          <th width="80">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.language}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">{{item.origin_price | currency}}</td>
          <td class="text-right">{{item.price | currency}}</td>
          <td v-if="item.is_enable" class="text-success">啟用</td>
          <td v-else>未啟用</td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="openDeleteModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>
    <!-- modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenter"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalCenter">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯 {{tempProduct.title}}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imgURL"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileupLoading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control" ref="files" @change="uploadFile">
                  <!-- 當發生改變時觸發 uploadFile 事件 -->
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  :src="tempProduct.imgURL"
                  alt
                >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                  >
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">語系</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入語系"
                      v-model="tempProduct.language"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="category">新書 (1: 新書; 0: 舊書)</label>
                    <input
                      type="number"
                      class="form-control"
                      id="new"
                      placeholder="請輸入0或1"
                      v-model="tempProduct.new"
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    >
                  </div>
                  <!-- <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    >
                  </div> -->
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enable"
                      :true-value="1"
                      :false-value="0"
                    >
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
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
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deletItem">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 因為只有載入bootstrap 套件，並沒有真正載入jQuery的套件
import $ from 'jquery'
import Pagination from '../components/Pagination'
export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      pagination: {}, // 分頁
      isNew: 'false', // 判斷是新增及修改變數，true: 新增， false: 修改
      isLoading: false, // 判斷是否要取用 loading 效果
      status: { // 局部 loading 效果
        fileupLoading: false
      }
    }
  },
  components: {
    Pagination
  },
  methods: {
    getProducts (page = 1) { // ES6 小方法，預設值帶入 page = 1 ，之後 page 參數有改變就會帶入改變的參數
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        // console.log(response.data)
        vm.isLoading = false
        vm.products = response.data.products
        vm.pagination = response.data.pagination
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {} // 如果是空的話，tempProduct會是空的
        this.isNew = true // 並將isNew改為true
      } else {
        this.tempProduct = Object.assign({}, item) // ES6寫法，將 item 放入新陣列中，再安排給 tempProduct，
        // 因為物件傳參考的特性，所以這樣寫，避免 item 的東西受到汙染
        this.isNew = false // 將 isNew 設成 false
      }
      $('#productModal').modal('show')
    },
    updateProduct () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      }
      // $http[httpMethod] => $http.post or $http.put
      // 用[]選取httpMethod
      this.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
        console.log(response.data)
        if (response.data.success) {
          $('#productModal').modal('hide') // 關閉建立式窗
          console.log('success')
          vm.getProducts(vm.pagination.current_page) // 重新取得資料
        } else {
          $('#productModal').modal('hide') // 關閉建立式窗
          vm.getProducts(vm.pagination.current_page) // 重新取得資料
          // console.log('新增失敗')
        }
      })
    },
    openDeleteModal (item) {
      this.tempProduct = Object.assign({}, item)
      $('#delProductModal').modal('show')
    },
    deletItem () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      // console.log(vm.tempProduct.id);
      this.$http.delete(api, { data: vm.tempProduct }).then(response => {
        console.log(response.data)
        $('#delProductModal').modal('hide')
        vm.getProducts() // 重新取得資料
      })
    },
    uploadFile () {
      // 查看圖片的資訊 => this.$refs.files
      // 查看圖片的位置 => this.$refs.files.files[0]
      // console.log(this)
      const vm = this
      const uploadFile = this.$refs.files.files[0]
      // 因為傳送格式為 formData ，所以建立一個formData
      const formData = new FormData()
      formData.append('file-to-upload', uploadFile)
      vm.status.fileupLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        // console.log(response.data);
        vm.status.fileupLoading = false
        if (response.data.success) {
          // vm.tempProduct.imgURL = response.data.imageUrl;
          // 因為上行的 tempProduct.imgURL 並沒有雙向綁定(沒和vue原件綁在一起)，使用vue.set綁定
          // 將 response.data.imageUrl 強制寫入 vm.tempProduct 的 imgURL 裡
          vm.$set(vm.tempProduct, 'imgURL', response.data.imageUrl)
        } else {
          vm.$bus.$emit('messsage:push', response.data.message, 'danger')
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
