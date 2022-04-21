<template>
  <MovieCard v-for="(movie, index) in testapi" :key="`movie-${index}`" :movie="movie" />
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
    const docs = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5545b123bb0d696c917f4b88dd656165')
    this.testapi = docs.data.results
  }
}
</script>

<style>

</style>