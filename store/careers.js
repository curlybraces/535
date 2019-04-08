export const state = () => ({
  list: []
});

export const mutations = {
  add(state, career) {
    state.list.push(career);
  },
  emptyList(state) {
    state.list = [];
  }
};

export const getters = {
  list: state => {
    return state.list;
  }
};
