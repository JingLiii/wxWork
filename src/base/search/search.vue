// 搜索组件
// 属性
// placeholder: 占位符内容  searchRes: 搜索到的匹配数据
// 事件
// search: 每一次键盘抬起事件, 参数为输入框里的内容


<template>
  <div class="search">
    <div class="input-out">
      <!-- <div @click="clickPlaceholer" v-show="!inputContent" v-text="placeholder" class="placeholder">
      </div> -->
      <input type="search" ref="input" :placeholder="placeholder" v-model="inputContent">
      <icon class="icon" name="search"></icon>
      <ul class="search-list" ref="searchList">
        <li v-for="res in searchRes" :key="res" v-text="res"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        inputContent: ''
      }
    },
    // 只要文本框内的内容改变了, 然后稍微一等就告诉父组件.
    watch: {
      inputContent(newInput) {
        this.$emit('search', newInput)
      }
    },
    props: {
      // 占位的内容: 父组件传入
      placeholder: {
        type: String,
        default: '提示搜索内容'
      },
      // 搜索结果: 展示在ul中
      searchRes: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/variable.stylus"
  @import "../../common/stylus/mixin.stylus"

  .search
    width 100%
    background-color $color-background-components
    height (90rem/32)
    position relative
    box-sizing border-box
    padding-top (22rem/32)
    .input-out
      width (690/750)*100%
      margin 0 auto
      height (46rem/32)
      position relative
      input
        width 100%
        height (46rem/32)
        box-sizing border-box
        border solid (2rem/32) $color-input-border
        border-radius (30rem/32)
        outline none
        font-size $font-size-text
        color $color-text-dd
        padding-left (56rem/32)
      input[type='search']::-webkit-search-cancel-button
          display none
      input[type='search']::-webkit-input-placeholder
          color $color-input-text
      .icon
        position-absolute 50% (22rem/32) (-20rem/64) 0
        width (20rem/32)
        height (20rem/32)
      .search-list
        li
          width 100%
          height (30rem/32)
          line-height (30rem/32)
          text-align center
          border solid 1px #aaa

    
</style>

