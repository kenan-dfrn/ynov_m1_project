<template>
  <input type="text" v-model="filter" />
  <v-text-field label="Another input"></v-text-field>
  <MovieCard
    v-for="(movie, index) in testapi"
    :key="`movie-${index}`"
    :movie="movie"
  />
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: { MovieCard },
  data() {
    return {
      testapi: [],
      filter: "",
    };
  },
  async mounted() {
    this.testapi = await this.$Movie.getPopularMovies();
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
