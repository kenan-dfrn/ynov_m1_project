<template>
  <section class="container">
    <div v-if="title" class="col-12">
      <h2 class="block-title">{{ title }}</h2>
    </div>
    <div class="col-12">
      <div class="row">
        <MovieCard v-for="(item, index) in items" :key="`item-${title.replaceAll(' ', '-')}-${index}`" :movie="item" />
                                        
      </div>
    </div>
  </section>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  components: { MovieCard },
  props: {
    title: { type: String },
    items: { type: Array, default: [] },
  }
}
</script>

<style lang="scss" scoped>
  .block-title {
    margin-bottom: 45px;
    position: relative;
    letter-spacing: .64px;
    color: #fff;
    line-height: 25px;
    font-weight: 700;
    font-size: 28px;
    text-transform: uppercase;
    &::before {
      background: #ff0000;
      content: "";
      height: 3px;
      left: 0;
      position: absolute;
      bottom: -15px;
      width: 50px;
    }
  }
</style>