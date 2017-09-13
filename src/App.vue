<template>
  <div id="app">
    <search></search>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './base/search'
export default {
  name: 'app',
  components: {
    Search
  }
}
</script>


<style lang="stylus" scoped>
  @import "./common/stylus/variable.stylus"

  #app
    // background $color-theme
</style>


