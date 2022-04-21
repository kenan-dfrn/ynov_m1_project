<template>
  <NavBar  :genres="genres" @searchByGenre="searchByGenre"/>
  <MovieCard v-for="(movie, index) in testapi" :key="`movie-${index}`" :movie="movie" />
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar, MovieCard },
  data () {
    return {
      testapi: [],
      genres:{},
      genreId: null
    }
  },
  async mounted () {
    this.testapi = await this.$Movie.getPopularMovies()
    this.genres = await this.$Genre.getGenreList()

  },
  methods: {
      async searchByGenre (genreId) {
          this.testapi = await this.$Movie.getMoviesByGenre(genreId)
      },
  },
  
}
</script>

<style>

</style>