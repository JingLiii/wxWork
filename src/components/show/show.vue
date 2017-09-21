<template>
  <div class="show">
    <search @goSearch="goSearch"></search>
    <h5 v-show="showNotFindMsg" class="msg">抱歉, 没有找到您所需要的内容</h5>
    <course-list :propsData="courseListData"></course-list>
  </div>
</template>

<script>
  // 组件
  import Search from '../../base/search/search'
  import CourseList from "../../components/course-list/course-list.vue"
  // api方法
  import getSearchData from '../../api/search'
  import {infoParams} from '../../api/config'
  // 工具函数
  import {toArray} from '../../common/js/tools'

  export default {
    name: 'Show',
    data () {
      return {
        // 我们搜索的数据
        majorName: '',
        courseListData: [],
        showNotFindMsg: true
      }
    },
    methods: {
      goSearch(name) {
        // 专业名称发生变化, 更改专业列表
        getSearchData(name).then((res) => {
          const data = res.data
          if (data.status === infoParams.STATUS_OK && data.msg === infoParams.MSG_OK) {
            this.courseListData = toArray(data.data)
            this.showNotFindMsg = false
          } else if (data.msg === infoParams.MSG_NOTFIND_COURSE) {
            this.showNotFindMsg = true  
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    created () {
      // 获取传来的专业名称
      this.goSearch(this.$router.history.current.params.name)
    },
    components: {
      Search,
      CourseList
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/variable.stylus"
  .show
    .msg
      font-size $font-size-text-large-x
      text-align center
      margin (36rem/32) 0
</style>

