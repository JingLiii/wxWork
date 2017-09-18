<template>
  <div class="show">
     <search></search>
     <course-list></course-list>
  </div>
</template>

<script>

  import Search from '../../base/search/search'
  import CourseList from "../../components/course-list/course-list.vue"

  export default {
    name: 'Show',
    components: {
      Search,
      CourseList
    }
  }
</script>
