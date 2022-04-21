<template>
  <MovieSlider title="Popular Movies" :items="movieList" />

  <input type="text" v-model="filters.title" />
</template>

<script>
import MovieSlider from '@/components/MovieSlider.vue'

export default {
  components: { MovieSlider },
  data () {
    return {
      filters: {
        title: "",
        genres: null,
      },
      movieList: [],
    };
  },
  async mounted() {
    this.movieList = await this.$Movie.getPopularMovies();
  },
  watch: {
    "filters.title": async function () {
      let movies = await this.$Movie.getPopularMovies();
      this.movieList = movies.filter((dt) =>
        dt.title.match(new RegExp(this.filters.title, "i"))
      );
    },
  },
};
</script>

<style>

</style>
