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
      genreName: "Popular"
    };
  },
  async mounted() {
    this.getMovieList()
    this.genres = await this.$Genre.getGenreList();
  },
  watch: {
    "lazy.params.title": async function () {
      this.getMovieList();
    },
    "lazy.params.genre": function (value) {
      if(value == -1)
      {
        this.genreName = 'Popular'
      } else {
        this.genreName = this.genres.find(gr => gr.id == value).name
      }
      this.getMovieList();
    },
    movieList: function (value) {
      console.log(value);
    },
  },
  methods: {
    async searchByGenre(id) {
      this.lazy.params.genre = id;
    },
    async updatePage(page) {
      this.lazy.params.page = page;
      this.getMovieList();
    },
    async getMovieList() {
      let movies = [];
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

      this.movieList = movies;
    },
    async ChangeFilter(filter) {
      this.lazy.params.title = filter;
    },
  },
};
</script>

<style></style>
