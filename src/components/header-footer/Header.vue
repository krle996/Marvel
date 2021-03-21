<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <router-link to="/">
          <img :src="logo" class="img_logo" />
        </router-link>
      </div>
      <div>
        <div class="display_ul">
          <ul>
            <li>
              <router-link to="/characters" active-class="active" exact>characters</router-link>
            </li>
            <li>
              <router-link to="/movies" active-class="active" exact>movies</router-link>
            </li>
            <li>
              <router-link to="/comics" active-class="active" exact>comics</router-link>
            </li>
            <li>
              <router-link to="/games" active-class="active" exact>games</router-link>
            </li>
          </ul>
        </div>
        <div class="menu_icon">
          <img :src="icon" height="50px" width="50px" @click="showDrawer = !showDrawer" />
        </div>

        <md-drawer class="side-drawer" :md-right="true" :md-active.sync="showDrawer">
          <md-list @click="closeDrawer">
            <md-list-item>
              <span class="md-list-item-text">
                <router-link to="/characters" tag="span" active-class="active" exact>characters</router-link>
              </span>
            </md-list-item>

            <md-list-item>
              <span class="md-list-item-text">
                <router-link to="/movies" tag="span" active-class="active" exact>movies</router-link>
              </span>
            </md-list-item>

            <md-list-item>
              <span class="md-list-item-text">
                <router-link to="/comics" tag="span" active-class="active" exact>comics</router-link>
              </span>
            </md-list-item>

            <md-list-item>
              <span class="md-list-item-text">
                <router-link to="/games" tag="span" active-class="active" exact>games</router-link>
              </span>
            </md-list-item>
          </md-list>
        </md-drawer>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../../assets/pictures/logo/logo-header.png";
import MenuIcon from "../../assets/pictures/logo/menu.png";

export default {
  data() {
    return {
      logo: Logo,
      icon: MenuIcon,
      showDrawer: false
    };
  },
  methods: {
    closeDrawer() {
      this.showDrawer = false;
    }
  }
};
</script>

<style scoped>
header {
  background: #111111;
  border-bottom: 5px solid rgb(255, 0, 0);
  padding: 10px 0px 10px 0px;
  width: 100%;
}

header .logo {
  float: left;
  border: 2px solid rgb(255, 0, 0);
  padding: 5px;
  margin-left: 30px;
}

.img_logo {
  height: 70px;
  width: 170px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

ul .active {
  color: white;
}

li {
  float: left;
  font-size: 30px;
  padding: 25px 15px 15px 15px;
}

li a {
  display: inline;
  font-family: "Orbitron", sans-serif;
  color: rgb(255, 0, 0);
  text-align: center;
  margin: 30px 0px 0px 50px;
  text-decoration: none;
}

li a:hover {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.md-drawer {
  background: #111111;
  width: 280px;
}

.md-drawer .active {
  color: white;
}

.md-list-item-text {
  font-family: "Orbitron", sans-serif;
  font-size: 25px;
  color: red;
  padding: 10px;
  cursor: pointer;
}

.md-list-item-text:hover {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  .menu_icon {
    display: none;
  }
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .img_logo {
    height: 50px;
    width: 120px;
  }

  .logo {
    margin-left: 100px;
  }

  .menu_icon {
    display: none;
  }

  li {
    font-size: 25px;
    padding: 15px 15px 15px 0px;
  }

  li a {
    margin: 20px 10px 0px 50px;
    text-decoration: none;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .img_logo {
    height: 50px;
    width: 120px;
  }

  .logo {
    margin-left: 30px;
  }

  .display_ul {
    display: none;
  }

  .menu_icon {
    position: absolute;
    right: 30px;
    top: 17px;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .img_logo {
    height: 50px;
    width: 120px;
  }

  .logo {
    margin-left: 30px;
  }

  .display_ul {
    display: none;
  }

  .menu_icon {
    position: absolute;
    right: 30px;
    top: 17px;
  }

  .md-drawer {
    width: 220px;
  }

  .md-list-item-text {
    font-size: 15px;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .img_logo {
    height: 40px;
    width: 100px;
  }

  .logo {
    margin-left: 30px;
  }

  .display_ul {
    display: none;
  }

  .menu_icon {
    position: absolute;
    right: 30px;
    top: 13px;
  }

  .md-drawer {
    width: 180px;
  }

  .md-list-item-text {
    font-size: 10px;
  }
}
</style>