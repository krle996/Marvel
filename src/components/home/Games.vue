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
                d="M151.0375,3.3325c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.59906,0.36281 -2.72781,1.80063 -2.6875,3.44c0,6.53063 -3.02344,10.11844 -8.6,13.6525c-5.57656,3.53406 -13.63906,6.39625 -21.93,9.89c-8.29094,3.49375 -16.8775,7.69969 -23.5425,14.7275c-6.06031,6.39625 -10.26625,15.18438 -10.965,26.9825c-6.19469,-0.51062 -10.05125,-2.49937 -14.19,-4.6225c-5.0525,-2.59344 -10.83062,-5.59 -20.5325,-5.59c-20.70719,0 -48.16,47.07156 -48.16,82.56c0,16.20563 8.4925,27.52 20.64,27.52c18.24813,0 30.6375,-9.90344 41.6025,-18.5975c8.385,-6.65156 15.68156,-12.3625 23.7575,-12.3625c8.07594,0 15.3725,5.71094 23.7575,12.3625c10.965,8.69406 23.35438,18.5975 41.6025,18.5975c12.1475,0 20.64,-11.31437 20.64,-27.52c0,-35.48844 -27.45281,-82.56 -48.16,-82.56c-9.70187,0 -15.48,2.99656 -20.5325,5.59c-3.96406,2.0425 -7.68625,3.91031 -13.4375,4.515c0.67188,-10.11844 4.04469,-16.89094 9.03,-22.145c5.56313,-5.87219 13.16875,-9.83625 21.1775,-13.2225c8.00875,-3.38625 16.24594,-6.11406 22.8975,-10.32c6.65156,-4.20594 11.825,-10.50812 11.825,-19.4575c0.04031,-0.99437 -0.36281,-1.94844 -1.075,-2.62031c-0.72562,-0.68531 -1.70656,-1.02125 -2.6875,-0.92719zM127.28,92.88c3.80281,0 6.88,3.07719 6.88,6.88c0,3.80281 -3.07719,6.88 -6.88,6.88c-3.80281,0 -6.88,-3.07719 -6.88,-6.88c0,-3.80281 3.07719,-6.88 6.88,-6.88zM41.28,96.32h10.32v10.32h10.32v10.32h-10.32v10.32h-10.32v-10.32h-10.32v-10.32h10.32zM113.52,106.64c3.80281,0 6.88,3.07719 6.88,6.88c0,3.80281 -3.07719,6.88 -6.88,6.88c-3.80281,0 -6.88,-3.07719 -6.88,-6.88c0,-3.80281 3.07719,-6.88 6.88,-6.88zM141.04,106.64c3.80281,0 6.88,3.07719 6.88,6.88c0,3.80281 -3.07719,6.88 -6.88,6.88c-3.80281,0 -6.88,-3.07719 -6.88,-6.88c0,-3.80281 3.07719,-6.88 6.88,-6.88zM127.28,120.4c3.80281,0 6.88,3.07719 6.88,6.88c0,3.80281 -3.07719,6.88 -6.88,6.88c-3.80281,0 -6.88,-3.07719 -6.88,-6.88c0,-3.80281 3.07719,-6.88 6.88,-6.88z"
              />
            </g>
          </g>
        </svg>
        Games
      </span>
    </div>
    <div class="content">
      <div class="game_items">
        <md-card v-for="(game, index) in games" :key="index">
          <router-link :to="`/games/${game.id}`" tag="span">
            <md-card-media md-ratio="1:1">
              <img :src="require(`../../assets/pictures/home/games/${game.img}`)" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="game_title">{{ game.title }}</span>
                <div class="game_year">{{ game.year }}</div>
              </md-card-header>
            </md-card-area>
          </router-link>
        </md-card>
      </div>
      <div class="div-button">
        <router-link to="/games" tag="span">
          <span class="buttonShow">See all games</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    games() {
      return this.$store.getters["games/getHomeGames"];
    }
  },
  created() {
    this.$store.dispatch("games/getHomeGames", {
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
  padding-left: 150px;
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

.game_items {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.game_title {
  font-size: 24px;
}

.game_year {
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

  .game_title {
    font-size: 20px;
  }

  .game_year {
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

  .game_items {
    margin-top: 40px;
  }

  .game_title {
    font-size: 16px;
  }

  .game_year {
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
    margin-top: 60px;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  .md-card {
    width: 48%;
  }

  .game_items {
    margin-top: 30px;
  }

  .game_title {
    font-size: 12px;
  }

  .game_year {
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
    margin-top: 60px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .md-card {
    width: 100%;
  }

  .game_items {
    margin-top: 20px;
  }

  .game_title {
    font-size: 10px;
  }

  .game_year {
    font-size: 6px;
    color: black;
    opacity: 0.5;
  }
}
</style>