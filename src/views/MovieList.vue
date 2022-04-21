<template>
  <MovieSlider title="Similar Movies" :items="testapi" />

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
      testapi: [],
    };
  },
  async mounted() {
    this.testapi = await this.$Movie.getPopularMovies();
    console.log(this.testapi[0]);
  },
  watch: {
    "filters.title": async function () {
      var movies = await this.$Movie.getPopularMovies();
      this.testapi = movies.filter((dt) =>
        dt.title.match(new RegExp(this.filters.title, "i"))
      );
    },
  },
};
</script>

<style></style>
