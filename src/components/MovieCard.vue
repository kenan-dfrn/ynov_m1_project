<template>
  <div class="wrapper">
    <div class="main_card">
      <div class="card_left">
        <div class="card_datails">
          <h1>{{ movie.title }}</h1>
          <div class="card_cat">
            <p class="PG">PG - 13</p>
            <p class="year">{{ movie.release_date }}</p>
            <p class="genre">Action | Adventure</p>
            <p class="time">2h 28m</p>
          </div>
          <p class="disc">{{ movie.overview }}</p>
          <a :href="`/movie/${movie.id}`">Read More</a>
          <div class="social-btn">
            <!-- WATCH TRAILER-->
            <button><i class="fas fa-play"></i> SEE TRAILER</button>
            <!-- GET-->
            <button><i class="fas fa-download"></i> DOWNLOAD</button>
            <!--USERS RATINGS-->
            <button>
              <i class="fas fa-thumbs-up"></i>
              {{ movie.vote_average * 10 }}%
            </button>
            <!--BOOKMARK-->
            <button>
              <i class="fas fa-star"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="card_right">
        <div class="img_container">
          <img v-bind:src="baseUrl + movie.poster_path" />
        </div>
        <div class="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
            <i class="fas fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      baseUrl: "https://image.tmdb.org/t/p/original",
    };
  },
};
</script>

<style lang="scss">
.main_card {
  color: #fff;
  width: 760px;
  height: 390px;
  margin: 50px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 770px;
  background: #00c9ff;
  background: -webkit-linear-gradient(to right, #92fe9d, #00c9ff);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#92fe9d),
    to(#00c9ff)
  );
  background: -webkit-linear-gradient(left, #92fe9d, #00c9ff);
  background: -o-linear-gradient(left, #92fe9d, #00c9ff);
  background: linear-gradient(to right, #92fe9d, #00c9ff);
  -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
}

.card_left {
  width: 90%;
}

.card_datails {
  width: 90%;
  padding: 30px;
  margin-top: -25px;
}
.card_datails h1 {
  font-size: 30px;
}
.card_right img {
  height: 390px;
  border-radius: 2px;
}
.card_right {
  border-radius: 2px;
}

.card_cat {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.PG,
.year,
.genre,
.time {
  color: fff;
  padding: 10px;
  font-weight: bold;
  border-radius: 15px;
}

.PG {
  background: #92fe9d;
  -webkit-box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  -webkit-transition: 300ms ease-in-out;
}

.disc {
  font-weight: 100;
  line-height: 27px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
a {
  color: darkcyan;
  display: block;
  text-decoration: none;
}
.social-btn {
  margin-left: -10px;
}
button {
  color: #fff;
  border: none;
  padding: 20px;
  outline: none;
  font-size: 12px;
  margin-top: 30px;
  margin-left: 10px;
  background: #92fe9d;
  border-radius: 12px;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  -webkit-transition: 300ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
}

button:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.play_btn {
  height: 100%;
  margin: -394px auto;
  position: relative;
  text-align: center;
  background: rgba(0, 244, 170, 0.4);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
}
.fa-play-circle {
  color: #255;
  font-size: 160px;
  margin-top: 110px;
  -webkit-animation: bounce 1s -0.4s infinite;
  animation: bounce 1s -0.4s infinite;
}

.fa-play-circle:hover {
  color: aqua;
  animation: bounce 0.4s infinite;
}
@-webkit-keyframes bounce {
  8% {
    transform: scale(0.3);
    -webkit-transform: scale(0.8);
    opacity: 1;
  }
  10% {
    transform: scale(1.8);
    opacity: 0;
  }
}

@keyframes bounce {
  8% {
    transform: scale(0.3);
    -webkit-transform: scale(0.8);
    opacity: 1;
  }
  20% {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
