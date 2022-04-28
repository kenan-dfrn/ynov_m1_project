<template>
  <NavBar
    :genres="genres"
    @searchByGenre="searchByGenre"
    @searchWithFilter="ChangeFilter"
  />
  <MovieSlider
    :title="genreName + ' Movies'"
    :items="movieList.results"
    :genres="genres"
  />

  <Pagination
    @updatePage="updatePage($event)"
    :page="lazy.params.page"
    :totalPages="movieList.total_pages"
  />
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
          page: 0,
        },
      },
      movieList: [],
      genres: [],
      genreName: "Popular",
    };
  },
  async mounted() {
    this.getMovieList();
    this.genres = await this.$Genre.getGenreList();
  },
  watch: {
    "lazy.params.title": async function () {
      this.lazy.params.page = 0;
      this.getMovieList();
    },
    "lazy.params.genres": function (value) {
      console.log(value);
      if (value == -1) {
        this.genreName = "Popular";
      } else {
        this.genreName = this.genres.find((gr) => gr.id == value).name;
      }
      this.lazy.params.page = 0;
      this.getMovieList();
    },
  },
  methods: {
    async searchByGenre(id) {
      this.lazy.params.genres = id;
      this.lazy.params.title = "";
      this.lazy.params.page = 0;
      this.getMovieList();
    },
    async updatePage(page) {
      this.lazy.params.page = page;
      this.getMovieList();
    },
    async getMovieList() {
      let movies = [];
      if (this.lazy.params.title.length >= 1) {
        movies = await this.$Movie.getMovieByName(this.lazy.params);
      } else if (this.lazy.params.genres >= 0) {
        movies = await this.$Movie.getMoviesByGenre(this.lazy.params);
      } else {
        movies = await this.$Movie.getPopularMovies(this.lazy.params);
      }

      this.movieList = movies;
    },
    async ChangeFilter(filter) {
      this.lazy.params.title = filter;
      this.lazy.params.genres = null;
      this.lazy.params.page = 0;
    },
  },
};
</script>

<style></style>
