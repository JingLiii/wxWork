<template>
  <div class="home">
    <search class="search" @goSearch="goSearch" :placeholder="placeholderText"></search>
    <banner class="banner" :listImg="bannerPic"></banner>
    <choose class="choose" :propsData="professionData" @selectBox="goSearch"></choose>
    <course-list class="course-list" :propsData="courseListData"></course-list>
    <div class="button-all-out">
      <button class="button-all" @click="goSearch('全部')">查看全部</button>
    </div>
  </div>
</template>

<script>
  // 导入组件
  import Search from '../../base/search/search'
  import Banner from '../../components/banner/banner'
  import Choose from '../../components/choose/choose'
  import CourseList from "../../components/course-list/course-list.vue"
  // 导入api方法
  import {infoParams} from '../../api/config'
  import getHomeData from '../../api/home'
  // 导入工具方法
  import {toArray} from '../../common/js/tools'

  export default {
    data () {
      return {
        // 搜索框的占位内容
        placeholderText: '这里是首页自定义的内容',
        // 轮播图数据
        bannerPic: [],
        // 选择专业数据
        professionData: [],
        // 课程列表数据
        courseListData: []
      }
    },
    components: {
      Search,         
      Banner,
      Choose,
      CourseList
    },
    methods:  {
      // 开始搜索, 并展示搜索结果
      goSearch(name) {
        this.$router.push({
          path: `/show/${name}`
        })
      }
    },
    created () {
      setTimeout(() => {
        // 获取数据, 渲染页面
        getHomeData().then((respose) => {
          const data = respose.data
          if (data.status === infoParams.STATUS_OK && data.msg === infoParams.MSG_OK) {
            // banner数据
            this.bannerPic = toArray(data.data.pic)
            // 选择专业数据
            this.professionData = toArray(data.data.category)
            // 首页需要展示的课程数据
            this.courseListData = toArray(data.data.course)
          }
        }).catch((err) => {
          console.log(err)
        })
      }, 20);
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/variable.stylus"
  @import "../../common/stylus/mixin.stylus"
  .home
    background-color $color-background-body
    .banner
      height (386rem/32)
    .choose
      margin-bottom (20rem/32)
    .button-all-out
      position relative
      background $color-background-components
      height (138rem/32)
      width 100%
      .button-all
        position-absolute 50% 50% (-58rem/64) (-200rem/64) 
        width (200rem/32)
        height (58rem/32)
        border 1px solid $color-theme
        background #fff
        outline none
        border-radius 5px
</style>

