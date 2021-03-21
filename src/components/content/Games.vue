<template>
  <div class="bg">
    <div class="main">
      <div class="round">
        <img class="cover" :src="require(`../../assets/pictures/content/games.jpg`)" />
        <div class="text_positon">GAMES</div>
      </div>
    </div>
    <div class="content">
      <div class="cards">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    games() {
      return this.$store.getters["games/getAllGames"];
    }
  },
  created() {
    this.$store.dispatch("games/getAllGames");
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

  .game_title {
    font-size: 12px;
  }

  .gsme_year {
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

  .game_title {
    font-size: 10px;
  }

  .game_year {
    font-size: 6px;
  }
}
</style>