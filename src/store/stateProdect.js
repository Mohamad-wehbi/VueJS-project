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

var usersStorege = {
  fetch: function (users) {
    localStorage.setItem("allProdect", JSON.stringify(users));
  },
  save: function () {
    return JSON.parse(localStorage.getItem("allProdect") || "[]");
  },
};

export default {
  view: "users",
  toggels: false,
  delAll: false,
  len: "0",
  newUser: { name: "", adress: "", phone: "" },
  esc: null,
  check: null,
  activeBtn: "all",
  userInput: {
    name: "",
    adress: "",
    phone: "",
    sellect: false,
    active: false,
  },
  users: usersStorege.save(),
  colors: ["#2350e4", "#ff4c10", "#ff2020", "#9d057c", "#000000"],
  onColor: "#000000",
};
