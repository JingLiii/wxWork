<template>
  <div class="home">
    <search @search="search" :searchRes="searchRes" :placeholder="placeholderText"></search>
  </div>
</template>

<script>
import Search from '../../base/search'
export default {
  data () {
    return {
      placeholderText: '请输入想要搜索的内容',
      searchRes: []
    }
  },
  components: {
    Search
  },
  methods: {
    search(searchValue) {
      console.log(searchValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
