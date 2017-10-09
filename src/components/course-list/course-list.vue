<template>
  <ul class="course-list">
    <li v-for="item in propsData" :key="item.id" class="course-list-item">
      <a
        href="javascript:;"
        @touchstart="touchstart($event)"
        @touchend="touchend($event, item.id, item.url)"
      >
      <!-- <a  @touchend="readCourse(item.id)"> -->
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

// 导入api文档
import {infoParams, commOK} from '../../api/config'

export default {
  name: 'CourseList',
  data () {
    return {
      // 点击的某个课程id
      touchendCouseId: ''  
    }
  },
  props: {
    propsData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  destroyed () {
    // 组件销毁的时候, 请求服务器
    this.postCouseList(this.touchendCouseId)
  },
  methods: {
    // 点击课程后, 
    touchend(event, courseId, courseUrl) {
      this.touchEndTime = (+new Date)

      // 在手离开的时候, 需要判断是否产生了移动, 以及是否点击了很长时间
      if (event.changedTouches[0].clientX === this.touchStartX) {
        // 证明没有移动
        if (+new Date - this.touchstartTime <= 500) {
          // 证明点击的时间很短
          // 点击后让其加载新的文档, 
          this.touchendCouseId = courseId
          window.location.assign(courseUrl)
          this.$destroy()
        }
      }
    },

    touchstart(event) {
      this.touchstartTime = +new Date
      this.touchStartX = event.changedTouches[0].clientX
    },

    // 请求服务器, 传入id的课程的阅读量+1
    postCouseList(courseId) {
      postCouseList(courseId).then((res) => {
        if (commOK(res.data)) { // 判断数据获取成功
          // 修改对应id的课程数据
          this.reviseCourseRead(courseId, res.data.data)
        }
      }).catch((err) => {
        console.log(err)
      })
    },

    // 根据课程id, 修改课程阅读量
    reviseCourseRead(courseId, readCount) {
      this.propsData.forEach((item, index) => {
        if (item.id === courseId) {
          item.read_num = readCount
        }
      })
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
 
