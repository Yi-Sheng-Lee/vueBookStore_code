<template>
  <div id="app">
    <loading :active.sync="isLoading"/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
 @import "./assets/all"
</style>
