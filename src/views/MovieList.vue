<template>
  <MovieCard v-for="index in 1/*(movie, index) in testapi.data*/" :key="`movie-${index}`" :movie="testapi.data" />
</template>

<script>
import axios from 'axios'
import MovieCard from '@/components/MovieCard.vue'

export default {
  components: { MovieCard },
  data () {
    return {
      testapi: []
    }
  },
  async mounted () {
    this.testapi = await axios.get('https://api.themoviedb.org/3/movie/latest?api_key=5545b123bb0d696c917f4b88dd656165')
  }
}
</script>

<style>

</style>