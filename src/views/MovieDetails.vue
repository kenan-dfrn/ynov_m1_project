<template>
  <div id="movie-details" class="container-fluid"></div>
  <MovieCard :movie="movie" />
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
export default {
  components: { MovieCard },
  data() {
    return {
      movie: {},
      recommendations: [],
    };
  },
  async mounted() {
    const askedId = this.$route.params.id;
    this.movie = await this.$Movie.getMovie(askedId);
    this.recommendations = await this.$Movie.getRecommendations(askedId);
  },
};
</script>

<style></style>
