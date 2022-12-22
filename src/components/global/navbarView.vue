<template>
  <div class="navbar">
        <h2>+ Buat Order</h2>
        <ul>
          <router-link tag="li" to="/"  :class="{ active: view == 'users' }"  exact>
            <i class="fa-solid fa-user"></i><a @click="addView('users')" :class="{ maincolor: view == 'users' }">Users</a
            ><span :class="{ befor: view == 'users' }"></span
            ><span :class="{ after: view == 'users' }"></span>
          </router-link>
          <router-link tag="li" to="/prodect"
            
            :class="{ active: view == 'prodects' }"
          >
            <i class="fa-solid fa-cart-shopping"></i><a @click="addView('prodects')" :class="{ maincolor: view == 'prodects' }" >Brodect</a
            ><span :class="{ befor: view == 'prodects' }"></span
            ><span :class="{ after: view == 'prodects' }"></span>
          </router-link>
          <router-link tag="li" to="/contact" :class="{ active: view == 'contact' }" >
            <i class="fa-solid fa-phone"></i><a @click="addView('contact')" :class="{maincolor: view == 'contact' }">contact</a
            ><span :class="{ befor: view == 'contact' }"></span
            ><span :class="{ after: view == 'contact' }"></span>
          </router-link>
        </ul>
      </div>
</template>


<script>

import {createNamespacedHelpers} from "vuex";

const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("a");

export default {
  name: "NavbarView",
  computed:{
    ...mapState(['view'])
  },
  methods:{
    addView: function(view){
      this.$store.commit("a/addView", view);
    },
    cliked: function(){
      if(this.view == 'users'){
           this.$router.replace('/');
      }
      }
      
    },
    created:function(){
      this.cliked();
    }
  }
  


</script>