<template>
  <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
    <div class="video-block">
      <div class="video-thumb position-relative thumb-overlay">
        <RouterLink :to="{ name: 'MovieDetails', params: { id: movie.id } }"
          ><img
            alt=""
            class="img-fluid"
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
        /></RouterLink>
        <div class="box-content">
          <ul class="icon">
            <li>
              <a><i class="fas fa-play">W</i></a>
            </li>
            <li>
              <a><i class="fas fa-plus">+</i></a>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'MovieDetails', params: { id: movie.id } }"
                ><i class="fas fa-info">I</i></RouterLink
              >
            </li>
          </ul>
        </div>
        <!-- Box Content End -->
      </div>
      <!-- Video Thumb End -->
      <div class="video-content">
        <h2 class="video-title">
          <RouterLink
            :to="{ name: 'MovieDetails', params: { id: movie.id } }"
            >{{ movie.title }}</RouterLink
          >
        </h2>
        <div class="video-info d-flex align-items-center">
          <span class="video-year">{{ movie.release_date ? movie.release_date.slice(0, 4) : '' }}</span>
          <span class="video-type">{{ getGenres(movie.genre_ids) }}</span>
        </div>
      </div>
      <!-- video Content End -->
    </div>
    <!-- video Block End -->
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getGenres(genreIds) {
      var genreNames = this.genres.filter((gr) => genreIds.includes(gr.id));

      return genreNames.map((gr) => gr.name).join(", ");
    },
  },
};
</script>

<style lang="scss" scoped>
.video-type {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.video-block {
  margin-bottom: 30px;
  &::after,
  &::before {
    height: 50%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform-origin: 100% 0;
    transform: rotateZ(90deg);
  }
  .video-content {
    .video-title {
      font-size: 18px;
      text-align: left;
      line-height: 24px;
      margin: 12px 0 10px;
      font-weight: 600;
      text-transform: uppercase;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    .video-info span {
      font-size: 14px;
      text-align: left !important;
      color: #a3a3a3;
      margin-right: 8px;
      padding-right: 10px;
      line-height: 12px;
      display: inline-block;
    }
  }
}

.video-block:hover .icon {
  top: 0;
}
.video-block .icon {
  padding: 7px 5px;
  list-style: none;
  background: #ff0000;
  top: -100%;
  right: 0;
  z-index: 2;
  transition: all 0.3s ease 0.2s;
}
.video-block .icon,
.video-block .title {
  margin: 0;
  position: absolute;
}

.video-block .icon li a {
  display: block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  transition: all 0.3s ease 0s;
  text-align: center;
  &:hover {
    color: #fff;
    box-shadow: 0 0 10px #000 inset, 0 0 0 3px #fff;
  }
}
.video-block .video-thumb {
  max-width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
}
</style>
