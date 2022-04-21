<template>
  <section>
    <div>
      {{ title }}
    </div>
    <div>
      test
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Empty Section' },
    item: { type: String, default: [] }
  }
}
</script>

<style>

</style>