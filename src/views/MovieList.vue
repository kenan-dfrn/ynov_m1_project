<template>
  <NavBar  :genres="genres" @searchByGenre="searchByGenre"/>
  <MovieSlider title="Popular Movies" :items="movieList" />

  <input type="text" v-model="filters.title" />
</template>

<script>
import MovieSlider from '@/components/MovieSlider.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: { MovieSlider, NavBar },
  data () {
    return {
      filters: {
        title: "",
        genres: null,
      },
      movieList: [],
      genres:{},
      genreId: null
    };
  },
  async mounted() {
    this.movieList = await this.$Movie.getPopularMovies();
    this.genres = await this.$Genre.getGenreList()
  },
  watch: {
    "filters.title": async function () {
      let movies = await this.$Movie.getPopularMovies();
      this.movieList = movies.filter((dt) =>
        dt.title.match(new RegExp(this.filters.title, "i"))
      );
    },
  },
  methods: {
     async searchByGenre (genreId) {
        this.testapi = await this.$Movie.getMoviesByGenre(genreId)
     },
  },
};
</script>

<style>

</style>
