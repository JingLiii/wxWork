<template>
  <div class="choose">
    <div @click="chooseBox(boxData.cid)" class="choose-box" v-for="boxData in propsData" :key="boxData.id">
      <img class="icon" :src="boxData.cg_lcon" alt="">
      <div class="desc" v-text="boxData.cg_name"></div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Choose',
    methods: {
      chooseBox(cid) {
        this.$emit('selectBox', cid)
      }
    },
    props: {
      propsData: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>


<style lang="stylus" scoped>

  @import "../../common/stylus/variable.stylus"
  @import "../../common/stylus/mixin.stylus"

  .choose
    background-color $color-background-components
    width 100%
    overflow hidden
    zoom 1
    ::after
      width 100
    .choose-box
      float left
      width 25%
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

