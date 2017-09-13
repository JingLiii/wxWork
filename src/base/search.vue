<template>
  <div class="search">
      <input type="text">
      <i class="icon-search"></i>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  @import "../common/stylus/variable.stylus"

  .search
    // background-color $color-text
    height (90rem/32)
    position relative
    input
      position absolute
      top 50%
      left 50%
      margin-top -(46rem/64)
      margin-left -(690rem/64)
      width (690rem/32)
      height (46rem/32)
      box-sizing border-box
      padding-left (57rem/32)
      border solid (2rem/32) $color-input-border
      border-radius (30rem/32)
      outline none
      font-size $font-size-text
      color $color-input-text
</style>

