<template>
  <div class="bg-light">
    <div class="container-md container-fluid-lg text-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="nav-link mx-md-5">
          <div>
            <h5 class="m-0 text-center">添添書局</h5>
            <small>Tan Tan Bookstore</small>
          </div>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  t-16 d-lg-flex justify-content-center my-2" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item mx-5">
              <router-link class="nav-link " data-toggle="collapse" data-target="#navbarNav" to="/introduction">書局介紹</router-link>
            </li>
            <li class="nav-item mx-5">
              <router-link to="/books" data-toggle="collapse" data-target="#navbarNav" class="nav-link">書籍分類</router-link>
            </li>
            <!-- <li class="nav-item mx-5">
              <a class="nav-link" data-toggle="collapse" data-target="#navbarNav" href="#">辦理活動</a>
            </li> -->
            <router-link to="/newest" class="nav-item mx-5">
              <a class="nav-link" data-toggle="collapse" data-target="#navbarNav" href="#">最新公告</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
.t-16{
  font-size: 1rem;
}
</style>
