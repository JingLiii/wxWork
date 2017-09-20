<template>
  <div class="home">
    <search class="search" @search="search" :searchRes="searchRes" :placeholder="placeholderText"></search>
    <banner class="banner"></banner>
    <choose class="choose"></choose>
    <course-list class="course-list"></course-list>
    <div class="button-all-out">
      <button class="button-all">查看全部</button>
    </div>
  </div>
</template>

<script>
  import Search from '../../base/search/search'
  import Banner from '../../components/banner/banner'
  import Choose from '../../components/choose/choose'
  import CourseList from "../../components/course-list/course-list.vue"

  import getHomeData from '../../api/home'

  export default {
    data () {
      return {
        placeholderText: '请输入想要搜索的内容',
        searchRes: []
      }
    },
    components: {
      Search,         
      Banner,
      Choose,
      CourseList
    },
    methods:  {
      search(searchValue) {
        console.log(searchValue)
      }
    },
    // 获取数据, 渲染页面
    created () {
      setTimeout(() => {
        getHomeData().then(function (respose) {
          console.log(respose)
        }).catch(function (err) {
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

