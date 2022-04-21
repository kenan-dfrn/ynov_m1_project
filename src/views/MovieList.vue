<template>
  <NavBar  :genres="genres" @searchByGenre="searchByGenre"/>
  <MovieSlider title="Popular Movies" :items="movieList.results" />
  <Pagination @updatePage="updatePage($event)" :page="filters.page" :totalPages="movieList.total_pages"/>
  <input type="text" v-model="filters.title" />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MovieSlider from '@/components/MovieSlider.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: { MovieSlider, NavBar, Pagination },
  data () {
    return {
      filters: {
        title: "",
        genres: null,
        page: 0
      },
      movieList: [],
      genres: [],
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
        this.movieList = await this.$Movie.getMoviesByGenre(genreId)
     },
     updatePage (page) {
       this.filters.page = page
     }
  },
};
</script>

<style>

</style>
