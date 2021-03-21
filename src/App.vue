<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Header from "../src/components/header-footer/Header";
import Footer from "../src/components/header-footer/Footer";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

.container {
  margin: 0 auto;
}

.clear:after {
  content: "";
  display: table;
  clear: both;
}
</style>
