<template>
  <div id="app">
    <section class="home" :style="{ '--bg-main': onColor }">
      <header-view></header-view>
      <div class="content">
        <navbar-view></navbar-view>
        <div class="main">
          <router-view />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderView from "./components/global/HeaderView.vue";
import navbarView from "./components/global/navbarView.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    HeaderView,
    navbarView,
  },
  computed:{
    onColor(){
      return this.$store.state.a.onColor;
    }

  }
};
</script>
