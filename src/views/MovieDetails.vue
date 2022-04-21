<template>
  <div id="movie-details" class="container-fluid">
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      movie: {},
      recommendations: []
    }
  },
  async mounted () {
    const askedId = this.$route.params.id
    this.movie = await this.$Movie.getMovie(askedId)
    this.recommendations = await this.$Movie.getRecommendations(askedId)
  }
}
</script>

<style>

</style>