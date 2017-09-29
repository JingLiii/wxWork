<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div
              class="swiper-slide" 
              :key="str.path" v-for="str in listImg" 
              :style="setImageStyle(str.path)"
            ></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    props: {
      listImg: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      setImageStyle(url) {
        return `background-image: url(${url}); background-size: cover`
      },
      initSwiper(){
        new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: false,
          paginationType: 'custom',
          loop: true, 
          speed: 300,
          autoplay: 4000,
          // 滑动结束后, 继续轮播 true:滑动结束后不播放, false: 滑动结束后继续播放
          autoplayDisableOnInteraction: false,
          // 自定义分页样式
          paginationCustomRender: function (swiper, current, total) {
            const activeColor = '#168fed'
            const normalColor = '#aeaeae'
            let color = ''
            let paginationStyle = ''
            let html = ''
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor
              } else {
                color = normalColor
              }
              paginationStyle = `background:${color};opacity:1;margin-right:0.875rem;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        })
      }
    },
    mounted () {
      // 设置延时处理, 是为了保证循环轮播的前后两张, 在复制节点的时候, 已经有了数据
      setTimeout(() => {
        this.initSwiper()
      }, 300);
    }
  }
</script>

<style lang="stylus" scoped>

  @import "../../common/stylus/variable.stylus"

  .swiper-container
    background-color $color-background-components
    position relative
    width 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img
          width 100%
          height 100%
</style>
