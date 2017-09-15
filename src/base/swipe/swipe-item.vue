<template>
  <div class="swipe-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swipe-item',
  mounted () {
    this.parent && this.parent.swipeItemCreated(this)
  },
  destroyed () {
    this.parent && this.parent.swipeItemDestroyed(this)
  }
}
</script>

<style lang="stylus" scoped>
.swipe-item
  position absolute
  transform translateX(-100%)
  width 100%
  height 100%
  display none
.is-active
  display block
  transform none
</style>
