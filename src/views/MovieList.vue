<template>
  <NavBar  :genres="genres" @searchByGenre="searchByGenre"/>
  <MovieSlider
    :items="movieList.results"
    :genres="genres"
  />
    title="Popular Movies"
  <Pagination @updatePage="updatePage($event)" :page="lazy.params.page" :totalPages="movieList.total_pages"/>
  <input type="text" v-model="lazy.params.title" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MovieSlider from "@/components/MovieSlider.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: { MovieSlider, NavBar, Pagination },
  data() {
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
    };
  },
  async mounted() {
    this.movieList = await this.$Movie.getPopularMovies(this.lazy.params);
    this.genres = await this.$Genre.getGenreList()
  },
  watch: {
    "lazy.params.title": async function () {
      this.getMovieList()
    },
    movieList: function (value) {
      console.log(value);
    },
  },
  methods: {
     async searchByGenre (id) {
        this.lazy.params.genre = id
        this.getMovieList()
     },
     async updatePage (page) {
        this.lazy.params.page = page
        this.getMovieList()
     },
     async getMovieList () {
       let movies = []
       if (this.lazy.params.genre >= 0) {
         movies = await this.$Movie.getMoviesByGenre(this.lazy.params);
       } else {
         movies = await this.$Movie.getPopularMovies(this.lazy.params);
       }
      
      if (this.lazy.params.title) {
        movies.results = movies.results.filter((dt) =>
          dt.title.match(new RegExp(this.lazy.params.title, "i"))
        );
      }

      this.movieList = movies
    }
  },
};
</script>

<style></style>
