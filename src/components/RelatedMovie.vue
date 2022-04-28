<template>
  <section class="related-movies">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="block-title">Related Movies</h2>
        </div>
        <!-- Col End -->
      </div>
      <!-- Row End -->
      <div class="row">
        <div
          v-for="(item, index) in relatedMovie"
          :key="`item-${item.title.replaceAll(' ', '-')}-${index}`"
          class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2"
        >
          <div class="video-block">
            <div class="video-thumb position-relative thumb-overlay">
              <RouterLink
                :to="{ name: 'MovieDetails', params: { id: item.id } }"
              >
                <img
                  class="img-fluid"
                  v-bind:src="baseUrl + item.poster_path"
                  alt=""
              /></RouterLink>
              <div class="box-content">
                <ul class="icon">
                  <li>
                    <a href="watch-movie.html"><i class="fas fa-play"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fas fa-plus"></i></a>
                  </li>
                  <li>
                    <a href="movie-single.html"><i class="fas fa-info"></i></a>
                  </li>
                </ul>
              </div>
              <!-- Box Content End -->
            </div>
            <!-- Video Thumb End -->
            <div class="video-content">
              <h2 class="video-title">
                <RouterLink
                  :to="{ name: 'MovieDetails', params: { id: item.id } }"
                >
                  <a href="movie-single.html">{{ item.title }}</a>
                </RouterLink>
              </h2>
              <div class="video-info d-flex align-items-center">
                <span class="video-year">{{
                  item.release_date.slice(0, 4)
                }}</span>
                <span v-if="item.adult" class="video-age">+18</span>
                <span class="video-type">{{ getGenres(item.genre_ids) }}</span>
              </div>
            </div>
            <!-- video Content End -->
          </div>
          <!-- video Block End -->
        </div>
        <!-- Col End -->
      </div>
      <!-- Row End -->
    </div>
    <!-- Container End -->
  </section>
</template>

<script>
export default {
  props: {
    relatedMovie: {
      type: Array,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      baseUrl: "https://image.tmdb.org/t/p/original",
    };
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
}

a:link,
a:visited {
  text-decoration: none;
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
}
.video-block .icon li a,
.video-block .icon a:hover {
  border-radius: 50%;
}
.video-block .icon,
.video-block .title {
  margin: 0;
  position: absolute;
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
.video-block .video-thumb img {
  display: block;
  width: 100%;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

a:link,
a:visited {
  text-decoration: none;
}

section,
.section-padding,
.main-content {
  padding: 50px 0;
  position: relative;
}
.container-fluid {
  padding: 0 100px;
}
.video-block {
  position: relative;
  overflow: hidden;
}
.video-block .video-thumb {
  max-width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
}

.block-title {
  margin-bottom: 45px;
  position: relative;
  letter-spacing: 0.64px;
  color: #fff;
  line-height: 25px;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
}
.block-title:before {
  background: #ff0000;
  content: "";
  height: 3px;
  left: 0;
  position: absolute;
  bottom: -15px;
  width: 50px;
}
.video-block {
  position: relative;
  overflow: hidden;
}

.video-block .video-thumb {
  max-width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
}
.video-title {
  font-size: 18px;
  text-align: left;
  line-height: 24px;
  margin: 12px 0 10px;
  font-weight: 600;
  text-transform: uppercase;
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
.video-title a {
  color: #fff;
  text-decoration: none;
}
a:link,
a:visited {
  text-decoration: none;
}
a {
  color: #fff;
  -webkit-transition: all ease 0.4s;
  -o-transition: all ease 0.4s;
  transition: all ease 0.4s;
}
</style>
