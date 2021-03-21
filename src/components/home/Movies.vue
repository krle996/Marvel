<template>
  <div>
    <div class="title_margin">
      <span class="title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 172 172"
          style=" fill:#000000;"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <path d="M0,172v-172h172v172z" fill="none" />
            <g fill="#ff0000">
              <path
                d="M13.76,13.76v144.48h144.48v-144.48zM20.64,20.64h13.76v10.32h-13.76zM137.6,20.64h13.76v10.32h-13.76zM20.64,37.84h13.76v10.32h-13.76zM137.6,37.84h13.76v10.32h-13.76zM20.64,55.04h13.76v10.32h-13.76zM137.6,55.04h13.76v10.32h-13.76zM20.64,72.24h13.76v10.32h-13.76zM137.6,72.24h13.76v10.32h-13.76zM41.28,82.56h89.44v6.88h-89.44zM20.64,89.44h13.76v10.32h-13.76zM137.6,89.44h13.76v10.32h-13.76zM20.64,106.64h13.76v10.32h-13.76zM137.6,106.64h13.76v10.32h-13.76zM20.64,123.84h13.76v10.32h-13.76zM137.6,123.84h13.76v10.32h-13.76zM20.64,141.04h13.76v10.32h-13.76zM137.6,141.04h13.76v10.32h-13.76z"
              />
            </g>
          </g>
        </svg> Movies
      </span>
    </div>
    <div class="content">
      <div class="movie_items">
        <md-card v-for="(movie, index) in movies" :key="index">
          <router-link :to="`movies/${movie.id}`" tag="div">
            <md-card-media md-ratio="1:1">
              <img :src="require(`../../assets/pictures/home/movies/${movie.img}`)" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="movie_title">{{ movie.title }}</span>
                <div class="movie_year">{{ movie.year }}</div>
              </md-card-header>
            </md-card-area>
          </router-link>
        </md-card>
      </div>
      <div class="div-button">
        <router-link to="/movies" tag="span">
          <span class="buttonShow">See all movies</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters["movies/getHomeMovies"];
    }
  },
  created() {
    this.$store.dispatch("movies/getHomeMovies", {
      limit: 3
    });
  }
};
</script>

<style scoped>
.title {
  font-size: 60px;
  font-family: "Orbitron", sans-serif;
  color: rgb(255, 0, 0);
  border-bottom: 15px solid rgb(0, 0, 0);
  border-radius: 0px 0px 20px 0px;
  padding-left: 140px;
}

.title_margin {
  margin-top: 100px;
}

.md-card {
  width: 32%;
  margin-bottom: 20px;
  font-family: "Anton", sans-serif;
  text-align: center;
  background-color: white;
  cursor: pointer;
}

.md-card:hover {
  opacity: 0.3;
}

.movie_items {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.movie_title {
  font-size: 24px;
}

.movie_year {
  font-size: 20px;
  color: black;
  opacity: 0.5;
  padding: 10px;
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .title {
    font-size: 40px;
    border-radius: 0px 0px 20px 0px;
    padding-left: 120px;
  }

  .title_margin {
    margin-top: 80px;
  }

  svg {
    width: 45px;
    height: 45px;
  }

  .movie_title {
    font-size: 20px;
  }

  .movie_year {
    font-size: 16px;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .title {
    font-size: 30px;
    border-radius: 0px 0px 15px 0px;
    padding-left: 80px;
    border-bottom: 12px solid rgb(0, 0, 0);
  }

  .title_margin {
    margin-top: 60px;
  }

  svg {
    width: 40px;
    height: 40px;
  }

  .md-card {
    width: 48%;
  }

  .movie_items {
    margin-top: 40px;
  }

  .movie_title {
    font-size: 16px;
  }

  .movie_year {
    font-size: 12px;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .title {
    font-size: 20px;
    border-radius: 0px 0px 10px 0px;
    padding-left: 30px;
    border-bottom: 8px solid rgb(0, 0, 0);
  }

  .title_margin {
    margin-top: 50px;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  .md-card {
    width: 48%;
  }

  .movie_items {
    margin-top: 30px;
  }

  .movie_title {
    font-size: 12px;
  }

  .movie_year {
    font-size: 8px;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .title {
    font-size: 15px;
    border-radius: 0px 0px 5px 0px;
    padding-left: 10px;
    border-bottom: 5px solid rgb(0, 0, 0);
  }

  .title_margin {
    margin-top: 40px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .md-card {
    width: 100%;
  }

  .movie_items {
    margin-top: 20px;
  }

  .movie_title {
    font-size: 10px;
  }

  .movie_year {
    font-size: 6px;
  }
}
</style>