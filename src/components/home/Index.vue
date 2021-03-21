<template>
  <div>
    <app-carousel />
    <app-home-movies />
    <app-home-comics />
    <app-home-games />
    <app-home-characters />
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Movies from "./Movies";
import Comics from "./Comics";
import Games from "./Games";
import Characters from "./Characters";

export default {
  components: {
    "app-carousel": Carousel,
    "app-home-movies": Movies,
    "app-home-comics": Comics,
    "app-home-games": Games,
    "app-home-characters": Characters
  }
};
</script>

<style>
.content {
  width: 75%;
  margin: 0 auto;
}

.bg {
  background-color: rgb(218, 218, 218);
}

.buttonShow {
  color: red;
  background-color: white;
  font-size: 15px;
  font-family: "Orbitron", sans-serif;
  border-radius: 5px;
  border: 3px solid red;
  box-shadow: none;
  padding: 10px;
  cursor: pointer;
}

.buttonShow:hover {
  border: none;
}

.div-button {
  text-align: center;
  text-decoration: none;
  margin: 10px 0px 0px 0px;
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .buttonShow {
    font-size: 12px;
    border: 2px solid red;
    border-radius: 3px;
    padding: 8px;
  }

  .div-button {
    margin: 5px 0px 0px 0px;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .buttonShow {
    font-size: 9px;
    border-radius: 2px;
    border: 2px solid red;
    padding: 10px;
  }

  .div-button {
    margin: 5px 0px 0px 0px;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .buttonShow {
    font-size: 6px;
    border-radius: 2px;
    border: 1px solid red;
    padding: 4px;
  }

  .div-button {
    margin: 0px 0px 0px 0px;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .buttonShow {
    font-size: 4px;
    border-radius: 1px;
    border: 1px solid red;
    padding: 4px;
  }

  .div-button {
    margin: 0px 0px 0px 0px;
  }
}
</style>

<style scoped>
div {
  background-color: rgb(26, 26, 26);
  width: 100%;
}
</style>