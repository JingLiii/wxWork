<template>
  <ul class="course-list">
    <li class="course-list-item">
      <div class="left">
        <img class="head" src="../../common/image/01.jpg" alt="">
      </div>
      <div class="right">
        <h5 class="title">国际工程动力学专业</h5>
        <div class="desc">
          <span class="desc-name">人物名称</span>
          <span class="desc-college">毕业大学</span>
          <span class="desc-major">专业名称</span>
        </div>
        <div class="see">
          <icon class="icon" name="search"></icon>
          <span class="see-account">332人看过</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CourseList'
}
</script>


<style lang="stylus" scoped>
  @import "../../common/stylus/variable.stylus"
  @import "../../common/stylus/mixin.stylus"

  .course-list
    width 100% 
    background $color-background-components
    .course-list-item
      width 100%
      height (158rem/32)
      .left
        float left
        width (166rem/32)
        height 100%
        position relative
        .head
          width (110rem/32)
          height (110rem/32)
          border-radius 100%
          position-absolute 50% 50% (-110rem/64) (-110rem/64)
      .right
        box-sizing border-box
        padding-top (24rem/32)
        margin-left (166rem/32)
        height 100%
        border-bottom #eee solid 1px
        .title
          font-size $font-size-text-large
          color $color-text-dd
          height (52rem/32)
          line-height (52rem/32)
        .desc
          height (32rem/32)
          .desc-name
            font-size $font-size-text
            color $color-text-d
        .see
          .icon
            width (25rem/32)
            height (25rem/32)
            vertical-align top
          .see-account
            font-size (18rem/32)





</style>
 
