<template>
  <MovieSlider title="Similar Movies" :items="testapi" />

</template>

<script>
import MovieSlider from '@/components/MovieSlider.vue'

export default {
  components: { MovieSlider },
  data () {
    return {
      filters: {
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
    filter: async function () {
      var movies = await this.$Movie.getPopularMovies();
      this.testapi = movies.filter((dt) =>
        dt.title.match(new RegExp(this.filter, "i"))
      );
    },
  },
};
</script>

<style></style>
