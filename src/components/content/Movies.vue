<template>
  <div class="bg">
    <div class="main">
      <div class="round">
        <img class="cover" :src="require(`../../assets/pictures/content/movies2.jpg`)" />
        <div class="text_positon">MOVIES</div>
      </div>
    </div>
    <div class="content">
      <div class="cards">
        <div class="movie_items">
          <md-card v-for="(movie, index) in movies" :key="index">
            <router-link :to="`/movies/${movie.id}`" tag="span">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters["movies/getAllMovies"];
    }
  },
  created() {
    this.$store.dispatch("movies/getAllMovies");
  }
};
</script>

<style scoped>
.main {
  background-color: rgb(255, 255, 255);
  position: relative;
  text-align: center;
}

.cover {
  width: 100%;
  height: 550px;
  border-radius: 0px 0px 130px 0px;
}

.text_positon {
  text-shadow: 10px 10px black;
  font-family: "Bebas Neue", cursive;
  font-size: 170px;
  color: white;
  text-align: center;
  letter-spacing: 15px;
  margin-bottom: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.md-card {
  width: 32%;
  background-color: white;
  font-family: "Anton", sans-serif;
  border: 2px solid rgb(107, 107, 107);
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
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
  .cover {
    height: 470px;
    border-radius: 0px 0px 100px 0px;
  }

  .text_positon {
    font-size: 140px;
    letter-spacing: 13px;
    margin-bottom: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  .cover {
    height: 380px;
    border-radius: 0px 0px 70px 0px;
  }

  .text_positon {
    font-size: 100px;
    letter-spacing: 11px;
    margin-bottom: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .md-card {
    width: 48%;
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
  .cover {
    height: 240px;
    border-radius: 0px 0px 40px 0px;
  }

  .text_positon {
    font-size: 50px;
    letter-spacing: 13px;
    margin-bottom: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .md-card {
    width: 48%;
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
  .cover {
    height: 150px;
    border-radius: 0px 0px 20px 0px;
  }

  .text_positon {
    font-size: 20px;
    letter-spacing: 13px;
    margin-bottom: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .md-card {
    width: 100%;
  }

  .movie_title {
    font-size: 10px;
  }

  .movie_year {
    font-size: 6px;
  }
}
</style>