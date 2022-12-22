<template>
  <div class="header">
    <span class="colors" :class="{ unhide: toggels }">
      <div class="title-color"><h3>Colors List</h3></div>
      <div class="color-span">
        <span
          v-for="(color, index) in colors"
          :style="{ 'background-color': color }"
          @click="addOnColor(color)"
          :key="index"
        ></span>
      </div>
      <i @click="hideToggels()" class="fa-solid fa-snowflake"></i>
    </span>
    <div class="title">
      <h1>Crud Operations</h1>
      <div class="social">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohamad-wehbi-4481b41ba/"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("a");



export default {
  
  computed: {
    ...mapState(["toggels", "onColor", "colors"]),
    ...mapGetters(["noActive"]),
  },
  methods: {
    ...mapMutations(["hideToggels"]),
    updateDelAll: function(){
      this.$store.commit('a/updateDelAll', this.noActive);
    },
    addOnColor: function(color){
      this.$store.commit('a/addOnColor', color);
    },
  },
  created: function () {
    this.updateDelAll();
  },
};
</script>
