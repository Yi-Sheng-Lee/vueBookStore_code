<template>
  <div>
    <header>
      <Nav/>
    </header>
    <main class="main">
      <Alert/>
      <router-view></router-view>
    </main>
    <footer class="footer bg-light">
      <Footer/>
    </footer>
    <Top/>
  </div>
</template>

<script>
import Alert from '../components/AlertMessage'
import Nav from '../components/IndexNav'
import Footer from '../components/Footer'
import Top from '../components/Top'

export default {
  name: 'App',
  components: {
    Alert,
    Nav,
    Footer,
    Top
  }
}
</script>
<style scope>
  .main{
    margin: 2rem 0;
  }
  .footer{
    padding: 2rem 0;
  }
</style>
