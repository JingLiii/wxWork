<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div
              class="swiper-slide" 
              :key="str.url" v-for="str in listImg" 
              :style="setImageStyle(str.url)"
            ></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import a from '../../common/image/01.jpg'
  import b from '../../common/image/02.jpg'
  import c from '../../common/image/03.jpg'

  export default {
    data () {
      return {
        listImg: [
          {
            url: a
          },
          {
            url: b
          },
          {
            url: c
          }
        ]
      }
    },
    methods: {
      setImageStyle(url) {
        return `background-image: url(${url}); background-size: cover`
      }
    },
    mounted () {
      var swiper = new Swiper('.swiper-container', {
        // 分页挂载到哪个元素上
        pagination: '.swiper-pagination',
        // 点击分页按钮, 是否切换各个分页
        paginationClickable: false,
        // 是否循环轮播
        loop: true, 
        speed: 300,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        paginationBulletRender: function (swiper, index, className) {
          return `<span class="${className}" style="background: #168fed"></span>`
        }
      });
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
    .swiper-pagination
      // background red
      .swiper-pagination-bullet-my
        background pink
      .swiper-pagination-bullet-active
        background green
</style>
