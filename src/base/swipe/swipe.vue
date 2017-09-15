// 轮播图组件

<template>
  <!-- 最外层 -->
  <div class="swipe">
    <!-- 所有的轮播, 都在这里面再放一层, 这是展示的图片 -->
    <div class="items-wrap" ref="wrap">
      <slot></slot>
    </div>
    <!-- 小圆点 -->
    <div class="douts-wrap" v-show="showDouts">
      <div class="dout"></div>
    </div>
  </div>
</template>

<script>
  // 引入需要的操作
  import {once, addClass, removeClass} from '../../common/js/dom'

  export default {
    // 组件使用的名称
    name: 'swipe',
    // 创建组件
    created () {
      // 拖拽方式
      this.dragState = {}
    },
    data () {
      return {
        // 是否准备好了
        ready: false,
        // 是否正在拖拽
        dragging: false,
        // 用户是否正在滚动
        userScrolling: false,
        // 动画是否在进行
        animating: false,
        // 索引, 对应当前展示的item
        index: 0,
        // 有多少个.
        pages: [],
        // 定时器
        timer: null,
        // 是否重新初始化定时器
        reInitTimer: null,
        // 没有拖拽
        noDrag: false
      }
    },
    props: {
      // 每个动画时长
      speed: {
        type: Number,
        default: 300
      },
      // 多久自动播放一次
      auto: {
        type: Number,
        default: 3000
      },
      // 是否连续播放
      continuous: {
        type: Boolean,
        default: true
      },
      // 是否展示小圆点
      showDouts: {
        type: Boolean,
        default: true
      },
      // 阻碍? 不知道这是干嘛的..
      // 官方文档描述: 当滑动开始的时候, 阻止默认事件, 如果有些用户的安卓浏览器的版本低于4.2
      prevent: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      // 创建每一个item
      swipeItemCreated() {
        if (!this.ready) { // 这个组件已经准备完成
          return
        }
        // 清除 '充值定时器'
        clearTimeout(this.reInitTimer)
        // 设置 '重置定时器', 我认为应该是为了确保页面渲染后, 再放置数据
        this.reInitTimer = setTimeout(() => {
          // 重置页面, 其实这里就是设置每一个item
          this.reInitPages()
        }, 100)
      },
      // 改变位置函数
      translate(element, offset, speed, callback) {
        if (speed) { // 确保传入动画执行的时间
          // 开始动画状态
          this.animating = true
          // 开始动画
          element.style.webkitTransition = '-webkit-transform' + speed + 'ms ease-in-out'
          // 设置定时器, 回到起初偏移量
          setTimeout(() => {
            element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
          }, 50)

          // 定义标志位, 还没有搞清楚这是干啥的
          let called = false
          // 动画执行完成后的回调函数
          var transitionEndCallback = () => {
            // 如果还不需要执行回调的时候
            if (called) return
            called = true
            // 动画执行结束了
            this.animating = false
            // 清楚元素的所有样式
            element.style.webkitTransform = ''
            element.style.webkitTransition = ''
            // 如果存在回调函数, 就改变回调函数中的this, 指向调用的对象
            if (callback) {
              callback.apply(this, arguments)
            }
          }

          // 执行绑定的函数, 就这一次
          // 就是绑定上了, 如果执行完了, 就是这个事件解除绑定
          once(element, 'webkitTransitionEnd', transitionEndCallback);
          setTimeout(transitionEndCallback, speed + 100)
        } else { // 没有传入动画执行的时间, 变成起初的一个状态
          element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
          element.style.webkitTransition = ''
        }
      },
      // 设置展示的页面
      reInitPages() {
        // 获取所有的item元素
        let children = this.$children
        // 没有拖拽, 如果当前就是子元素的索引不再第一个, 那是判断为正在拖拽过程
        // 如果是的话, 就是变成当前的一个拖拽类型
        this.noDrag = children.length === 1 && this.noDragWhenSingle
        // 所有展示的页面??
        let pages = []
        this.index = 0
        // 遍历每一个元素, 让他们动起来
        children.forEach((child, index) => {
          // 把每一个元素都保存起来
          pages.push(child.$el)
          // 每一个元素都取消展示状态
          removeClass(child.$el, 'is-active')
          // 如果是第一个元素的话
          if (index === 0) {
            addClass(child.$el, 'is-active')
          }
        })
        // 把所有的展示页赋值
        this.pages = pages
      },
      // 动画函数
      doAnimate(towards, options) {
        // 如果没有元素的话, 不执行
        if (this.$children.length === 0) return
        // 如果传入了参数, options, 就是true !opitions就是false, false的话, 就直接返回了
        // 
        if (!options && this.children.length < 2) return
        var prevPage, nextPage, currentPage, pageWidth, offsetLeft
        var speed = this.speed || 300
        var index = this.index
        var pages = this.pages
        var pageCount = pages.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
.swipe
  overflow hidden
  position relative
  height 100%
  .items-wrap
    position relative
    overflow hidden
    height 100%
    transform translateZ(0)
  .douts-wrap
    position absolute
    bottom 10px
    left 50%
    transform translateX(-50%)
    .dout
      width 8px
      height 8px
      display inline-block
      border-radius 100%
      background #000000
      opacity 0.2
      margin 0 3px
    .is-active
      background #ffffff


</style>
