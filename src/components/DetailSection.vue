<template>
  <section class="play-details">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-12">
              <div class="play-thumb mb-4">
                <img
                  class="img-fluid"
                  v-bind:src="baseUrl + movie.poster_path"
                  alt=""
                />
                <div class="top-badge">
                  <div class="video-badge">
                    <img class="img-fluid" src="images/top-movies.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Col End -->
          </div>
          <!-- Row End -->
        </div>
        <!-- Col End -->
        <div class="col-md-9">
          <div class="play-details-content">
            <div
              class="title-block d-flex align-items-center justify-content-between"
            >
              <h2 class="play-title">{{ movie.title }}</h2>
            </div>
            <!-- Title Block -->
            <div class="details-info mb-4">
              <span v-if="movie.adult"
                ><i class="icofont-user mr-2" aria-hidden="true"></i> 18+</span
              >
              <span
                ><i class="icofont-clock-time mr-2" aria-hidden="true"></i> 2hr
                45min</span
              >
              <span
                ><i class="icofont-simple-smile mr-2" aria-hidden="true"></i>
                {{ movie.release_date }}</span
              >
              <span
                ><i class="icofont-movie mr-2" aria-hidden="true"></i>
                {{ getGenres() }}</span
              >
              <span v-if="movie.production_countries"
                ><i class="icofont-world mr-2" aria-hidden="true"></i>
                {{ movie.production_countries[0].iso_3166_1 }}</span
              >
            </div>
            <!-- Details Info -->
            <div class="details-desc">
              <p>
                {{ movie.overview }}
              </p>
            </div>
            <!-- Details Desc -->
            <div class="movie-persons mb-4">
              <div class="person-block">
                <h5 class="title">Director</h5>
                <p class="name">Christopher Nolan</p>
              </div>
              <!-- Person Block -->
              <div class="person-block">
                <h5 class="title">Cast</h5>
                <p>{{ getCast() }}...</p>
              </div>
              <!-- Person Block -->
            </div>
            <!-- Movie Persons -->
            <div class="details-buttons">
              <div class="row d-flex align-items-center">
                <div class="col-6 col-xl mb-xl-0 mb-3">
                  <a
                    href="watch-movie.html"
                    class="btn d-block hvr-sweep-to-right"
                    tabindex="0"
                    ><i class="icofont-ui-play mr-2" aria-hidden="true"></i
                    >Play</a
                  >
                </div>
                <!-- Col End -->
                <div class="col-6 col-xl mb-xl-0 mb-3">
                  <a
                    href="watch-movie.html"
                    class="btn d-block hvr-sweep-to-right"
                    tabindex="0"
                    ><i class="icofont-plus mr-2" aria-hidden="true"></i>MY
                    List</a
                  >
                </div>
                <!-- Col End -->
                <div class="col-6 col-xl mb-xl-0 mb-3">
                  <a
                    id="trailer"
                    class="btn d-block hvr-sweep-to-right"
                    tabindex="0"
                    data-toggle="modal"
                    data-target="#trailer-modal"
                    aria-hidden="true"
                    ><i class="icofont-ui-movie mr-2" aria-hidden="true"></i
                    >Trailer</a
                  >
                  <!-- Modal Trailer -->
                  <div
                    class="modal fade"
                    id="trailer-modal"
                    tabindex="0"
                    role="dialog"
                    aria-labelledby="trailer-modal"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-lg"
                      role="document"
                      id="trailerModal"
                    >
                      <!-- Modal Content -->
                      <div class="modal-content">
                        <!-- modal header -->
                        <div class="modal-header">
                          <h5 class="modal-title">Trailer</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true"
                              ><i class="fas fa-times"></i
                            ></span>
                          </button>
                        </div>
                        <!-- Modal Body -->
                        <div class="modal-body">
                          <video class="video d-block" controls="" loop="">
                            <source src="video/01-video.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <!-- Modal Body -->
                      </div>
                      <!-- Modal Content -->
                    </div>
                    <!-- Modal Dialog -->
                  </div>
                  <!-- Modal Trailer -->
                </div>
                <!-- Col End -->
                <div class="col-6 col-xl mb-xl-0">
                  <a
                    id="share"
                    class="btn hvr-sweep-to-right d-block"
                    tabindex="0"
                    data-toggle="modal"
                    data-target="#share-modal"
                  >
                    <i class="icofont-share mr-2" aria-hidden="true"></i
                    >Share</a
                  >
                  <!-- Modal Share -->
                  <div
                    class="modal fade"
                    id="share-modal"
                    tabindex="0"
                    role="dialog"
                    aria-labelledby="share-modal"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-lg"
                      role="document"
                      id="sharemodal"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Share</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true"
                              ><i class="fas fa-times"></i
                            ></span>
                          </button>
                        </div>
                        <!-- modal header End -->
                        <div class="modal-body">
                          <div class="icon-container d-flex">
                            <div class="icon-block">
                              <i class="social-icon fab fa-twitter fa-2x"></i>
                              <p>Twitter</p>
                            </div>
                            <div class="icon-block">
                              <i class="social-icon fab fa-facebook fa-2x"></i>
                              <p>Facebook</p>
                            </div>
                            <div class="icon-block">
                              <i class="social-icon fab fa-instagram fa-2x"></i>
                              <p>Instagram</p>
                            </div>
                            <div class="icon-block">
                              <i class="social-icon fab fa-telegram fa-2x"></i>
                              <p>Telegram</p>
                            </div>
                          </div>
                        </div>
                        <!-- Modal Body End -->
                      </div>
                      <!-- Modal Content End -->
                    </div>
                    <!-- Modal Dialog End -->
                  </div>
                  <!-- Modal Share End -->
                </div>
                <!-- Col End -->
              </div>
              <!-- Row End -->
            </div>
            <!-- Details Buttons End -->
          </div>
          <!-- Details Content End -->
        </div>
        <!-- Col End -->
      </div>
      <!-- row End -->
    </div>
    <!-- Container End -->
  </section>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    cast: {
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
    getGenres() {
      let genres = [];
      this.movie.genres?.forEach((gr) => {
        genres.push(gr.name);
      });
      return genres.join(", ");
    },
    getCast() {
      let actors = [];
      this.cast?.forEach((gr) => {
        actors.push(gr.name);
      });
      return actors.join(", ");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/icofont/icofont.min.css";

/* html,body,page content */
html {
  width: 100%;
  height: 100%;
  position: relative;
}

body {
  color: #fff;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: #202020;
  display: block;
}

.container-fluid {
  padding: 0 100px;
}

section,
.section-padding,
.main-content {
  padding: 50px 0;
  position: relative;
}

/* spaces */
.gap-100 {
  clear: both;
  height: 100px;
}

.gap-50 {
  clear: both;
  height: 50px;
}
/* Font Awesome Icons */
.fab:before {
  position: relative;
  top: 13px;
  font-size: 22px;
}

/* a */
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

a:hover {
  text-decoration: none;
  color: #ff0000;
}

a:focus {
  outline: 0;
}

a:hover .btn {
  background-color: #ff0000;
}

/* img */
img {
  max-width: 100%;
  height: auto;
  display: inline-block;
}
.details-info span {
  font-size: 16px;
  text-align: left !important;
  //color: #a3a3a3;
  margin-right: 15px;
  padding-right: 15px;
  line-height: 12px;
  display: inline-block;
}
/* unstyled */
.unstyled {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* input form */
.form-control {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #dadada;
  padding: 5px 20px;
  height: 50px;
  background: none;
  color: #959595;
  font-size: 12px;
  border-radius: 0;
}

.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #ff0000;
}

.form-control.input-msg {
  height: 50px;
}

/* hr */
hr {
  background-color: #e7e7e7;
  border: 0;
  height: 1px;
  margin: 40px 0;
}

/* button */
.btn {
  background: #ff0000;
  color: #fff;
  padding: 10px 30px;
  border: 0;
  border-radius: 0;
}

.btn:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #ff0000;
}

.btn:hover {
  background: #000 !important;
  color: #fff;
}

.btn-primary {
  background: #ff0000;
}

.btn-primary:hover,
.btn:focus {
  background: #272d33;
  color: #fff;
}

/* button Hover */
.hvr-sweep-to-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.hvr-sweep-to-right:before {
  background: #333;
}

/* ul, ol */
ol,
ul {
  margin-bottom: 20px;
}

ul,
li {
  list-style: none;
}

.list-round,
.list-arrow,
.list-check {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-round li {
  line-height: 28px;
}

.list-round li:before {
  font-family: "FontAwesome";
  content: "\f138";
  margin-right: 10px;
  color: #ff0000;
  font-size: 12px;
}

ul.list-arrow {
  padding: 0;
}

ul.list-arrow li:before {
  font-family: "FontAwesome";
  content: "\f105";
  margin-right: 10px;
  color: #ff0000;
  font-size: 16px;
}

ul.list-check li:before {
  font-family: "FontAwesome";
  content: "\f00c";
  margin-right: 10px;
  color: #ff0000;
  font-size: 14px;
}

/* page banners */
.banner-single {
  width: 100%;
  margin: 0 auto;
  display: block;
  position: relative;
  max-height: 500px;
  height: 500px;
}

.banner-wrap .banner-content {
  padding: 8% 0;
  width: 50%;
  z-index: 50;
  text-align: left !important;
}

.banner-wrap .banner-content p {
  text-align: left;
  color: #fff;
  margin-bottom: 30px;
}

.transparent-block {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
}

.banner-caption {
  position: absolute;
  bottom: 30px;
  z-index: 1;
}

.banner-name {
  margin-left: 120px;
  margin-top: -60px;
}

.play-icon {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  display: block;
  padding-left: 5px;
  text-align: center;
}

.play-icon .circle {
  width: 70px;
  height: 70px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #ff0000;
  margin: auto;
  transform: scale(1, 1);
}

.play-icon .circle.pulse {
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
  background-color: #ffabab;
}

.play-icon svg {
  fill: #fff;
  stroke: #fff;
  stroke-linejoin: round;
  stroke-width: 5;
  transition: all 0.3s;
}

.play-icon svg:hover {
  cursor: pointer;
  fill: #fff;
  stroke: #fff;
  transform: scale(1.2, 1.2);
}

/* banner gradients */
.banner-bg {
  padding: 100px 0 50px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 90vh;
  position: relative;
  z-index: 1;
}

.Page-title {
  font-size: 51px;
  position: relative;
  z-index: 2;
}

.Page-title h1 {
  color: #ffffff;
  text-align: center;
  font-weight: 300;
}

/* Breadcrumb */
.breadcrumb {
  background: transparent !important;
  padding: 25px 0 25px;
}

.breadcrumb-nav {
  position: relative;
  z-index: 2;
}

.breadcrumb-nav .breadcrumb {
  display: inline-block;
}

.breadcrumb-nav ol {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
  margin-top: 15px;
}

.breadcrumb li {
  float: left;
  padding-right: 10px;
  color: #777;
}

.breadcrumb li a {
  padding: 0 9px;
  font-size: 13px;
  color: inherit;
}

.breadcrumb li a:hover {
  color: #ff0000;
}

.breadcrumb li:last-child i {
  padding-right: 10px;
}

.border-frame {
  padding: 50px;
  margin: 0 auto;
  background: #000;
}

.card,
.list-group-item {
  background: transparent;
}

.list-group-item {
  border: none;
}

/*  Pills  */
.nav-pills .nav-link.active {
  color: #fff;
  background-color: #ff0000;
  border-radius: 0;
}

/*  Owl Carousel  */
.owl-theme .owl-dots .owl-dot span {
  width: 30px;
  height: 3px;
  margin: 5px 7px;
  background: #ff0000;
  display: block;
  transition: opacity 0.2s ease;
  border-radius: 30px;
}

.owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 35px;
}
</style>
