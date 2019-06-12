<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="md-card">
      <div class="md-card-media">
        <!-- swiper -->
        <swiper :options="swiperTopOption" class="text-center">
          <swiper-slide>
            <img src="@/assets/swiper-01.jpg" alt="swiper-01" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/swiper-02.jpg" alt="swiper-02" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/swiper-03.jpg" alt="swiper-03" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/swiper-04.jpg" alt="swiper-04" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/swiper-05.jpg" alt="swiper-05" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/swiper-06.jpg" alt="swiper-06" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/swiper-07.jpg" alt="swiper-07" class="img-fluid">
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>-->
        </swiper>
      </div>
    </div>
    <div class="container mt-3 text-center">
      <!-- 中文書 -->
      <section class="mt-4">
        <h5>中文新書榜</h5>
        <div>
          <div class="md-card">
            <div class="md-card-media">
              <!-- swiper -->
              <swiper :options="swiperEnglishOption" class="text-center">
                <swiper-slide v-for="(item, index) in filterTradChinese" :key="index">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <section>
                      <img :src="item.imgURL" alt class="img-fluid-h d-block" @click.prevent="gotoDetail(item.id)">
                    </section>
                    <section class="my-2">
                      <p class="txt">{{item.title}}</p>
                    </section>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </section>

      <!-- 簡體書 -->
      <section class="mt-4">
        <h5>簡體新書榜</h5>
        <div>
          <div class="md-card">
            <div class="md-card-media">
              <!-- swiper -->
              <swiper :options="swiperEnglishOption" class="text-center">
                <swiper-slide v-for="(item, index) in filterChinese" :key="index">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <section>
                      <img :src="item.imgURL" alt class="img-fluid-h d-block" @click.prevent="gotoDetail(item.id)">
                    </section>
                    <section class="my-2">
                      <p class="txt">{{item.title}}</p>
                    </section>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </section>

      <!-- 英文書 -->
      <section class="mt-4">
        <h5>英文新書榜</h5>
        <div>
          <div class="md-card">
            <div class="md-card-media">
              <!-- swiper -->
              <swiper :options="swiperEnglishOption" class="text-center">
                <swiper-slide v-for="(item, index) in filterEnglish" :key="index">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <section>
                      <img :src="item.imgURL" alt class="img-fluid-h d-block" @click.prevent="gotoDetail(item.id)">
                    </section>
                    <section class="my-2 ">
                      <p class="txt">{{item.title}}</p>
                    </section>
                  </div>
                </swiper-slide>
                <!-- <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
              </swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      swiperTopOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperChineseOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSimpleChineseOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperEnglishOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        //init: false,
        //   loop: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  methods: {
    getProducts(page = 1) {
      // ES6 小方法，預設值帶入 page = 1 ，之後 page 參數有改變就會帶入改變的參數
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/products/all`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        console.log(vm.products);
        vm.isLoading = false;
      });
    },
    gotoDetail(id){
      this.$router.push(`/detailbook/${id}`);
    }
  },
  computed: {
    filterTradChinese(){
      const vm = this;
      return vm.products.filter(function(item){
        return item.language === '繁體中文' && item.new === "1";
      });
    },
    filterChinese(){
      const vm = this;
      return vm.products.filter(function(item){
        return item.language === '簡體中文' && item.new === "1";
      });
    },
    filterEnglish(){
      const vm = this;
      return vm.products.filter(function(item){
        return item.language === '英文' && item.new === "1";
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scope>
/* .swiper-button-prev,
.swiper-button-next {
  width: 27px;
  height: 22px; 
}*/

/* .s-h{
  height: 40px;
} */
.img-fluid-h{
  width: 100%;
  height: 255px;
}
</style>
