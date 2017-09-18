<template>
  <div class="home">
    <search class="search" @search="search" :searchRes="searchRes" :placeholder="placeholderText"></search>
    <banner></banner>
  </div>
</template>

<script>
  import Search from '../../base/search/search'
  import Banner from '../../components/banner/banner'


  export default {
    data () {
      return {
        placeholderText: '请输入想要搜索的内容',
        searchRes: []
      }
    },
    components: {
      Search,
      Banner
    },
    methods:  {
      search(searchValue) {
        console.log(searchValue)
      }
    }
  }
</script>
