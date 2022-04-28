<template>
  <NavBar  :genres="genres" @searchByGenre="searchByGenre"/>
  <MovieSlider title="Popular Movies" :items="movieList.results" />
  <Pagination @updatePage="updatePage($event)" :page="lazy.params.page" :totalPages="movieList.total_pages"/>
  <input type="text" v-model="lazy.params.title" />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MovieSlider from '@/components/MovieSlider.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: { MovieSlider, NavBar, Pagination },
  data () {
    return {
      lazy: {
        params: {
          title: "",
          genres: null,
          page: 0
        }
      },
      movieList: [],
      genres: [],
      genreId: null
    };
  },
  async mounted() {
    this.movieList = await this.$Movie.getPopularMovies(this.lazy.params);
    this.genres = await this.$Genre.getGenreList()
  },
  watch: {
    "lazy.params.title": async function () {
      let movies = await this.$Movie.getPopularMovies();
      this.movieList = movies.results.filter((dt) =>
        dt.title.match(new RegExp(this.lazy.params.title, "i"))
      );
    },
  },
  methods: {
     async searchByGenre (genreId) {
        this.movieList = await this.$Movie.getMoviesByGenre(genreId)
     },
     async updatePage (page) {
        this.lazy.params.page = page
        let movies = await this.$Movie.getPopularMovies(this.lazy.params);
        this.movieList = movies.results.filter((dt) => dt.title.match(new RegExp(this.lazy.params.title, "i")));
     }
  },
};
</script>

<style>

</style>
