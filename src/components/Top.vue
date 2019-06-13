<template>
  <div>
    <!-- 往上鍵 -->
    <div class="go-top">
      <a href="#">
        <i class="fas fa-chevron-circle-up fa-2x"></i>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
$(window).scroll(function () {
  let pos = $(window).scrollTop()
  if (pos > 300) {
    $('.go-top').fadeIn()
  } else {
    $('.go-top').fadeOut()
  }
  // console.log(pos);
})
$(document).ready(function () {
  $('.go-top>a').on({
    click: function (e) {
      e.preventDefault()
      $('html, body').animate(
        {
          scrollTop: 0
        },
        1000
      )
    }
  })
})
export default {
}
</script>

<style>
.go-top {
  display: none;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: calc(3% + 50px);
  right: -11px;
  z-index: 100;
}
.go-top > a {
  display: block;
}
</style>
