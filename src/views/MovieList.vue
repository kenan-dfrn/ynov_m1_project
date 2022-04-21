<template>
  <MovieSlider title="Similar Movies" :items="[]" />
  <MovieCard v-for="(movie, index) in testapi" :key="`movie-${index}`" :movie="movie" />

</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import MovieSlider from '@/components/MovieSlider.vue'

export default {
  components: { MovieCard, MovieSlider },
  data () {
    return {
      filters: {
        genres: null,
      },
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