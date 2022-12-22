
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
  filterUsers: function (state) {
    return filters[state.activeBtn](state.users);
  },
  noActive: function (state) {
    return filters["notActive"](state.users);
  },
}


