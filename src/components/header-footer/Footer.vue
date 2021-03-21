<template>
  <footer class="clear">
    <div>
      <div class="logo">
        <img :src="logo" class="img_logo" />
        <br />All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../../assets/pictures/logo/logo-footer.jpg";

export default {
  data() {
    return {
      logo: Logo
    };
  }
};
</script>

<style scoped>
footer {
  background-color: rgb(136, 0, 0);
  width: 100%;
}

footer .logo {
  float: left;
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-family: "Bebas Neue", cursive;
  color: white;
  padding: 5px;
}

.img_logo {
  width: 170px;
  height: 70px;
  margin-bottom: 5px;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  footer .logo {
    padding: 5px;
    font-size: 23px;
  }

  .img_logo {
    width: 150px;
    height: 60px;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  footer .logo {
    font-size: 20px;
  }

  .img_logo {
    width: 130px;
    height: 50px;
    margin-bottom: 2px;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  footer .logo {
    font-size: 15px;
  }

  .img_logo {
    width: 100px;
    height: 40px;
    margin-bottom: 1px;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  footer .logo {
    font-size: 10px;
  }

  .img_logo {
    width: 70px;
    height: 30px;
    margin-bottom: 0px;
  }
}
</style>