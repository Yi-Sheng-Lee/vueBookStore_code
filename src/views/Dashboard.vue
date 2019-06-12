<template>
  <div>
    <NavBar/>
    <Alert/>
    <div class="container-fluid">
      <div class="row">
        <SideBar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/dashboardSideBar';
import NavBar from '../components/dashboardNavBar';
import Alert from "../components/AlertMessage";



export default {
    components: {
        SideBar,
        NavBar,
        Alert,
    }
}
</script>
