<template>
  <div>
    <div class="delete-icon">
      <i 
      :class="{ colorblue: delAll }"
      @click="deleteAll()"
      class="fa-solid fa-user-large-slash icondel"
      ></i>
  </div>
    <span v-text="activeUsers()" class="len-active"></span>
    <button class="sellect-all" v-show="!check" @click="unActive()">
      Sellect All</button
    ><button class="sellect-all color" v-show="check" @click="unActive()">
      UnSellect
    </button>
    <div class="btn">
      <button
        @click="addActive('isActive')"
        :class="{ activebtn: activeBtn == 'isActive' }"
      >
        is active
      </button>
      <button
        @click="addActive('all')"
        :class="{ activebtn: activeBtn == 'all' }"
      >
        all
      </button>
      <button
        @click="addActive('notActive')"
        :class="{ activebtn: activeBtn == 'notActive' }"
      >
        not active
      </button>
    </div>
    <div class="form">
      <input
        type="text"
        placeholder="Title"
        @keyup.enter="addUser()"
        v-model="userInput.name"
      />
      <input
        type="text"
        placeholder="Category"
        @keyup.enter="addUser()"
        v-model="userInput.adress"
      />
      <input
        type="number"
        placeholder="Price"
        @keyup.enter="addUser()"
        v-model="userInput.phone"
      />
    </div>
    <div class="table">
      <div class="head">
        <div class="titlehead">
          <span>select</span>
          <span>Title</span>
          <span>Category</span>
          <span>Price</span>
          <span>delete</span>
        </div>
      </div>
      <div class="tbady">
        <div
          class="user-class"
          v-for="(user, index) in filterUsers"
          :key="index"
        >
          <span
            ><span
              class="togel"
              @click="user.sellect = !user.sellect"
              :class="{ trans: user.sellect }"
              ><i
                :class="{ opesety: !user.sellect }"
                class="fa-solid fa-check"
              ></i></span
          ></span>
          <span @dblclick="hiding(user)"
            ><span :class="{ hide: user.active }"
              ><s v-show="user.sellect" v-text="user.name"></s
              ><label v-show="!user.sellect" v-text="user.name"></label></span
            ><input
              @keyup.esc="afterUser()"
              @keyup.enter="saveUser(user)"
              type="text"
              class="edit"
              :class="{ hide: !user.active }"
              v-model="user.name"
          /></span>
          <span @dblclick="hiding(user)"
            ><span :class="{ hide: user.active }"
              ><s v-show="user.sellect" v-text="user.adress"></s
              ><label v-show="!user.sellect" v-text="user.adress"></label></span
            ><input
              @keyup.esc="afterUser()"
              @keyup.enter="saveUser(user)"
              type="text"
              class="edit"
              :class="{ hide: !user.active }"
              v-model="user.adress"
          /></span>
          <span @dblclick="hiding(user)"
            ><span :class="{ hide: user.active }"
              ><s v-show="user.sellect" v-text="`$${user.phone}`"></s
              ><label
                v-show="!user.sellect"
                v-text="`$${user.phone}`"
              ></label></span
            ><input
              @keyup.esc="afterUser()"
              @keyup.enter="saveUser(user)"
              type="number"
              class="edit"
              :class="{ hide: !user.active }"
              v-model="user.phone"
          /></span>
          <span
            ><i
              @click="deleteUser(index)"
              class="fa-solid fa-trash-arrow-up"
            ></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("b");

export default {
  name: "UsersView",
  data: function () {
    return {};
  },

  computed: {
    ...mapState([
      "len",
      "newUser",
      "esc",
      "check",
      "activeBtn",
      "userInput",
      "users",
      "delAll",
    ]),
    ...mapGetters(["filterUsers", "noActive"]),
  },
  methods: {
    ...mapMutations(["addUser", "afterUser", "unActive", "unUpdate"]),
    deleteUser: function (index) {
      this.$store.commit("b/deleteUser", index);
    },
    addActive: function (txt) {
      this.$store.commit("b/addActive", txt);
    },
    hiding: function (user) {
      this.unUpdate();
      this.$store.commit("b/hiding", user);
    },
    saveUser: function (user) {
      this.$store.commit("b/saveUser", user);
    },
    updateDelAll: function () {
      this.$store.commit("b/updateDelAll", this.noActive);
    },
    activeUsers: function () {
      this.$store.commit("b/activeUsers");
      return `Active : ${this.len}`;
    },
    deleteAll: function () {
      this.$store.commit("b/deleteAll", this.noActive);
    },
  },
  created: function(){
    this.updateDelAll();
  },
  watch: {
    users: {
      handler: function (users) {
        localStorage.setItem("allProdect", JSON.stringify(users));
        this.updateDelAll();
      },
      deep: true,
    },
  },
};
</script>
