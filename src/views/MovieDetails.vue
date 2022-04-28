<template>
  <div>
    <RouterLink :to="{ name: 'Movies' }"
      ><i class="icofont-arrow-left"></i
    ></RouterLink>

    <DetailSection :movie="movie" :cast="credit?.cast?.slice(0, 6)" />
    <RelatedMovie :relatedMovie="recommendations?.results?.slice(0, 6)" />
  </div>
</template>

<script>
import DetailSection from "../components/DetailSection.vue";
import RelatedMovie from "../components/RelatedMovie.vue";

export default {
  components: { DetailSection, RelatedMovie },
  data() {
    return {
      movie: {},
      recommendations: [],
      similar: [],
      credit: {},
    };
  },
  async mounted() {
    const askedId = this.$route.params.id;
    this.movie = await this.$Movie.getMovie(askedId);
    this.recommendations = await this.$Movie.getRecommendations(askedId);
    this.similar = await this.$Movie.getSimilarMovies(askedId);

    this.credit = await this.$Movie.getCreditMovie(askedId);
  },
};
</script>

<style lang="scss" scoped>
.icofont-arrow-left {
  font-size: 40px;
}
a:link,
a:visited {
  text-decoration: none;
  color: white;
}
</style>
