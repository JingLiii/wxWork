<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div data-swiper-autoplay="2000" class="swiper-slide" :key="str.url" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
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
    mounted () {
      console.log('mounted', this)
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        onTouchEnd: function() {
          swiper.startAutoplay()
        }
      });
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper-container
    position relative
    width 100%
    height 200px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .swiper-pagination-bullet
      width 10px
      height 10px
      display inline-block
      background #fff
</style>
