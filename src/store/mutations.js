
let filters = {
  all: function (users) {
    return users.filter(function (el) {
      return el;
    });
  },
  isActive: function (users) {
    return users.filter(function (el) {
      return !el.sellect;
    });
  },
  notActive: function (users) {
    return users.filter(function (el) {
      return el.sellect;
    });
  },
};



export default{
  addUser: function (state) {
    if (
      state.userInput.name &&
      state.userInput.adress &&
      state.userInput.phone
    ) {
      state.users.push({
        name: state.userInput.name,
        adress: state.userInput.adress,
        phone: state.userInput.phone,
        sellect: state.userInput.sellect,
        active: state.userInput.active,
      });
      (state.userInput.name = ""),
        (state.userInput.adress = ""),
        (state.userInput.phone = "");
    }
  },
  activeUsers: function (state) {
    state.len = filters["isActive"](state.users).length;
    if (state.len == 0) {
      state.check = true;
    } else {
      state.check = false;
    }
  },
  deleteUser: function (state, index) {
    state.users.splice(index, 1);
  },
  addActive: function (state, txt) {
    state.activeBtn = txt;
  },
  saveUser: function (state, user) {
    if (user.name && user.adress && user.phone) {
      user.active = false;
    }
  },
  hiding: function (state, user) {
    user.active = true;
    state.esc = user;
    state.newUser.name = user.name;
    state.newUser.adress = user.adress;
    state.newUser.phone = user.phone;
  },
  afterUser: function (state) {
    state.esc.name = state.newUser.name;
    state.esc.adress = state.newUser.adress;
    state.esc.phone = state.newUser.phone;
    state.esc.active = false;
  },
  unActive: function (state) {
    state.check = !state.check;
    state.users.forEach((element) => {
      element.sellect = state.check;
    });
  },
  deleteAll: function (state, noActive) {
    if (state.users.length && noActive.length) {
      if (
        confirm("Rre you sure you want to delete all unavailable users?!")
      ) {
        state.users = filters.isActive(state.users);
      }
    }
  },
  updateDelAll: function (state, noActive) {
    if (state.users.length && noActive.length) {
      state.delAll = true;
    } else {
      state.delAll = false;
    }
  },
  unUpdate: function (state) {
    state.users.forEach(function (el) {
      el.active = false;
    });
  },
  hideToggels(state){
    state.toggels = !state.toggels;
  },
  addOnColor(state, color){
    state.onColor = color;
  },
  addView(state, views){
    state.view = views;
  },
}


