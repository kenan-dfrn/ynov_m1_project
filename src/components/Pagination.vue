<template>
  <div v-if="totalPages > 1" class="col-12">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li v-for="i in prevPages" :key="`prev-pagination-${i}`" class="page-item"><a class="page-link" v-if="i >= 0" @click="goTo(i )">{{ i + 1}}</a></li>
        <li class="page-item"><a class="page-link">{{ page + 1 }}</a></li>
        <li v-for="i in nextPages" :key="`next-pagination-${i}`" class="page-item"><a class="page-link" @click="goTo(i)">{{ i + 1}}</a></li>

        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    goTo (page) {
      this.$emit('updatePage', page)
    }
  },
  computed: {
    prevPages () {
      let pages = []
      for (let i = 1; i <= 3; i++) {
        pages.push(this.page - i)
      }
      return pages.reverse()
    },
    nextPages () {
      let pages = []
      for (let i = 1; i <= 3; i++) {
        //if (!(this.page + i >= this.totalPages)) {
          pages.push(this.page + i)
        //}
      }
      return pages
    }
  }
}
</script>

<style>

</style>