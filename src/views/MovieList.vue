<template>
  <input type="text" v-model="filters.title" />
  <MovieSlider title="Similar Movies" :items="[]" />
  <MovieCard
    v-for="(movie, index) in testapi"
    :key="`movie-${index}`"
    :movie="movie"
  />
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import MovieSlider from "@/components/MovieSlider.vue";

export default {
  components: { MovieCard, MovieSlider },
  data() {
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
