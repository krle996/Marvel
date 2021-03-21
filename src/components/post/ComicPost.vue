<template>
  <div class="main clear" v-if="post">
    <div class="title">{{ post.title }}</div>
    <div class="content">
      <img class="image" :src="require(`../../assets/pictures/home/comics/${post.img}`)" />
      <span class="items">
        <span class="title_items">Writer:</span>
        {{ post.writer }}
      </span>
      <br />
      <span class="items">
        <span class="title_items">Penciler:</span>
        {{ post.penciler }}
      </span>
      <br />
      <span class="items">
        <span class="title_items">Year:</span>
        {{ post.year }}
      </span>
      <br />
      <br />
      <span class="items">
        <span class="title_items">Description:</span>
      </span>
      <br />
      <span class="items_desc">{{ post.desc }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters["comics/getComicPost"];
    }
  },
  created() {
    let id = this.$route.params.id;
    this.$store.dispatch("comics/getComicPost", id);
  },
  destroyed() {
    this.$store.commit("comics/clearPost");
  }
};
</script>

<style scoped>
.main {
  background: rgb(255, 255, 255);
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
}

.title {
  color: rgb(100, 100, 100);
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-size: 70px;
  line-height: normal;
  margin-bottom: 90px;
}

.title_items {
  color: rgb(100, 100, 100);
  font-size: 40px;
}

.content {
  color: rgb(0, 0, 0);
  font-family: "Anton", sans-serif;
  font-size: 30px;
}

.items {
  display: block;
  padding-bottom: 20px;
}

.items_desc {
  font-size: 25px;
  text-align: justify;
  line-height: normal;
}

.image {
  float: right;
  width: 400px;
  height: 600px;
  padding-left: 12px;
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .title {
    font-size: 50px;
    margin-bottom: 90px;
  }

  .title_items {
    font-size: 30px;
  }

  .content {
    font-size: 25px;
  }

  .items {
    display: block;
    padding-bottom: 10px;
    line-height: normal;
  }

  .items_desc {
    font-size: 25px;
  }

  .image {
    width: 300px;
    height: 500px;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .title {
    font-size: 35px;
    margin-bottom: 90px;
  }

  .title_items {
    font-size: 25px;
  }

  .content {
    font-size: 20px;
  }

  .items {
    display: block;
    padding-bottom: 8px;
    line-height: normal;
  }

  .items_desc {
    font-size: 20px;
  }

  .image {
    width: 220px;
    height: 350px;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .title {
    font-size: 25px;
    margin-bottom: 70px;
  }

  .title_items {
    font-size: 20px;
  }

  .content {
    font-size: 15px;
  }

  .items {
    display: block;
    padding-bottom: 5px;
    line-height: normal;
  }

  .items_desc {
    font-size: 15px;
  }

  .image {
    width: 150px;
    height: 250px;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .title {
    font-size: 20px;
    margin-bottom: 50px;
  }

  .title_items {
    font-size: 20px;
  }

  .content {
    font-size: 15px;
  }

  .items {
    display: block;
    padding-bottom: 5px;
    line-height: normal;
  }

  .items_desc {
    font-size: 15px;
  }

  .image {
    width: 100%;
    height: 450px;
  }
}
</style>