<template>
  <div>
    <DetailSection :movie="movie" />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import DetailSection from "../components/DetailSection.vue";
export default {
  components: { MovieCard, DetailSection },
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

<style lang="scss" scoped>
.btn {
  background: #ff0000;
  color: #fff;
  padding: 10px 30px;
  border: 0;
  border-radius: 0;
}
</style>
