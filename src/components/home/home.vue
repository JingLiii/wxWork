<template>
  <div class="home">
    <search class="search" @search="search" :searchRes="searchRes" :placeholder="placeholderText"></search>
    <swipe class="swipe">
      <swipe-item class="item1 is-active"></swipe-item>
      <swipe-item class="item2"></swipe-item>
      <swipe-item class="item3"></swipe-item>
    </swipe>
  </div>
</template>

<script>
  import Search from '../../base/search/search'
  import Swipe from '../../base/swipe/swipe'
  import SwipeItem from '../../base/swipe/swipe-item'
  // 没用好, 不知道什么情况, 就是实现不了
  // import {Swipe, SwipeItem} from 'vue-swipe'
  export default {
    data () {
      return {
        placeholderText: '请输入想要搜索的内容',
        searchRes: []
      }
    },
    components: {
      Search,
      Swipe,
      SwipeItem
    },
    methods:  {
      search(searchValue) {
        console.log(searchValue)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home
  .swipe
    height 200px
    color #fff
    .item1
      background red
    .item2
      background blue
    .item3
      background pink
    
</style>
