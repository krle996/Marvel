<template>
  <div>
    <div class="title_margin">
      <span class="title">
        Comics
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
                d="M20.64,13.76v120.4h3.44c33.48625,0 60.37469,13.39719 60.37469,13.39719l1.54531,0.76594l1.54531,-0.76594c0,0 26.88844,-13.39719 60.37469,-13.39719h3.44v-120.4h-3.44c-33.84906,0 -59.71625,12.45656 -61.92,13.545c-2.20375,-1.08844 -28.07094,-13.545 -61.92,-13.545zM27.52,20.94906c28.36656,0.80625 50.40406,10.17219 55.04,12.26844v106.11594c-7.32344,-3.15781 -27.90969,-11.01875 -55.04,-11.74437zM144.48,20.94906v106.64c-27.13031,0.72562 -47.71656,8.58656 -55.04,11.74437v-106.11594c4.63594,-2.09625 26.67344,-11.46219 55.04,-12.26844zM6.88,30.96v116.96h3.44c44.00781,0 74.2825,13.46438 74.2825,13.46438l1.3975,0.61812l1.3975,-0.61812c0,0 30.27469,-13.46438 74.2825,-13.46438h3.44v-116.96h-6.88v110.32188c-41.96531,0.71219 -70.31844,12.52375 -72.24,13.35687c-1.92156,-0.83312 -30.27469,-12.64469 -72.24,-13.35687v-110.32188z"
              />
            </g>
          </g>
        </svg>
      </span>
    </div>
    <div class="content">
      <div class="comic_items">
        <md-card v-for="(comic, index) in comics" :key="index">
          <router-link :to="`/comics/${comic.id}`" tag="span">
            <md-card-media md-ratio="1:1">
              <img :src="require(`../../assets/pictures/home/comics/${comic.img}`)" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="comic_title">{{ comic.title }}</span>
                <div class="comic_year">{{ comic.year }}</div>
              </md-card-header>
            </md-card-area>
          </router-link>
        </md-card>
      </div>
      <div class="div-button">
        <router-link to="/comics" tag="span">
          <span class="buttonShow">See all comics</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    comics() {
      return this.$store.getters["comics/getHomeComics"];
    }
  },
  created() {
    this.$store.dispatch("comics/getHomeComics", {
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
  border-radius: 0px 0px 0px 20px;
  border-bottom: 15px solid rgb(0, 0, 0);
  padding-right: 140px;
}

.title_margin {
  margin-top: 100px;
  text-align: right;
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

.comic_items {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.comic_title {
  font-size: 24px;
}

.comic_year {
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
    border-radius: 0px 0px 0px 20px;
    padding-right: 120px;
  }

  .title_margin {
    margin-top: 80px;
  }

  svg {
    width: 45px;
    height: 45px;
  }

  .comic_title {
    font-size: 20px;
  }

  .comic_year {
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
    border-radius: 0px 0px 0px 15px;
    padding-right: 80px;
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

  .comic_items {
    margin-top: 40px;
  }

  .comic_title {
    font-size: 16px;
  }

  .comic_year {
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
    border-radius: 0px 0px 0px 10px;
    padding-right: 30px;
    border-bottom: 8px solid rgb(0, 0, 0);
  }

  .title_margin {
    margin-top: 60px;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  .md-card {
    width: 48%;
  }

  .comic_items {
    margin-top: 30px;
  }

  .comic_title {
    font-size: 12px;
  }

  .comic_year {
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
    border-radius: 0px 0px 0px 5px;
    padding-right: 10px;
    border-bottom: 5px solid rgb(0, 0, 0);
  }

  .title_margin {
    margin-top: 60px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .md-card {
    width: 100%;
  }

  .comic_items {
    margin-top: 20px;
  }

  .comic_title {
    font-size: 10px;
  }

  .comic_year {
    font-size: 6px;
    color: black;
    opacity: 0.5;
  }
}
</style>