<template>
  <MovieCard v-for="(movie, index) in testapi" :key="`movie-${index}`" :movie="movie" />
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  components: { MovieCard },
  data () {
    return {
      testapi: []
    }
  },
  async mounted () {
    this.testapi = await this.$Movie.getPopularMovies()
  }
}
</script>

<style>

</style>