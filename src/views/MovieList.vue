<template>
  <NavBar  :genres="genres" @searchByGenre="searchByGenre" @searchWithFilter="searchWithFilter"/>
  <MovieSlider :title="genreTitle" :items="movieList" />


</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MovieSlider from '@/components/MovieSlider.vue'


export default {
  components: { MovieSlider, NavBar },
  data () {
    return {
      movieList: [],
      genres:{},
      genreId: null,
      genreName: '',
      genreTitle:'Movies',
    };
  },
  async mounted() {
    this.movieList = await this.$Movie.getPopularMovies();
    this.genres = await this.$Genre.getGenreList()
  },
  methods: {
     async searchByGenre (genre) {
        this.genreName = genre[0].name
        this.pageName
        this.movieList = await this.$Movie.getMoviesByGenre(genre[0].id)
     },
     async searchWithFilter(filter) {
       console.log(filter)
        let movies = await this.$Movie.getPopularMovies();
        this.movieList = movies.filter((dt) =>
        dt.title.match(new RegExp(filter, "i"))
        );
     }
  },
  computed: {
    pageName() {
      this.genreTitle = `${this.genreName} Movies`
      return this.genreTitle
    }
  }
};
</script>

<style>

</style>
