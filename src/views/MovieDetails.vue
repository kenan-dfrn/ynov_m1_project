<template>
  <div>
    <RouterLink :to="{ name: 'Movies' }"><i class="icofont-arrow-left"></i></RouterLink>

    <DetailSection :movie="movie" :cast="credit?.cast?.slice(0, 6)" />
    <RelatedMovie
      :relatedMovie="recommendations?.results?.slice(0, 6)"
      :genres="genres"
    />
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
      genres: [],
    };
  },
  async mounted() {
    const askedId = this.$route.params.id;
    this.getMovieData(askedId)
    this.recommendations = await this.$Movie.getRecommendations(askedId);
    this.similar = await this.$Movie.getSimilarMovies(askedId);

    this.genres = await this.$Genre.getGenreList();

    this.credit = await this.$Movie.getCreditMovie(askedId);
  },
  methods: {
    async getMovieData (id) {
      let data = await this.$Movie.getMovie(id);
      let date = new Date(null);
      date.setMinutes(data.runtime); // specify value for SECONDS here
      data.runtime = date.toISOString().substr(11, 8);
      this.movie = data
    }
  }
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
