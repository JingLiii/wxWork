<template>
  <div class="choose">
    <div class="choose-box">
      <icon class="icon" name="search"></icon>
      <div class="desc">文学</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>

  @import "../../common/stylus/variable.stylus"
  @import "../../common/stylus/mixin.stylus"

  .choose
    background-color $color-background-components
    width 100%
    .choose-box
      width 20%
      height (150rem/32)
      position relative
      .icon
        width (44rem/32)
        height (44rem/32)
        color $color-theme-d
        position-absolute 50% 50% (-44rem/64) (-44rem/64)
      .desc
        width 100%
        text-align center
        padding-top (105rem/32)
        color $color-text
        font-size $font-size-text
</style>

