<template>
  <ul class="course-list">
    <li v-for="item in propsData" :key="item.id" class="course-list-item">
      <a :href="item.url" @click="readCourse(item.id)">
        <div class="left">
          <img class="head" :src="item.headpic" alt="">
        </div>
        <div class="right">
          <h5 class="title" v-text="item.course_name"></h5>
          <div class="desc">
            <span class="desc-name" v-text="item.teacher"></span>
            <span class="desc-college" v-text="item.tea_school"></span>
            <span class="desc-major" v-text="item.tea_major"></span>
          </div>
          <div class="see">
            <icon class="icon" name="eye"></icon>
            <span class="see-account">{{item.read_num}}人看过</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>

import postCouseList from '../../api/course-list'

export default {
  name: 'CourseList',
  props: {
    propsData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    // 点击课程后, 为课程阅读量+1
    readCourse(courseId) {
      postCouseList(courseId)
    }
  }
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
            vertical-align middle
          .see-account
            font-size (18rem/32)




</style>
 
