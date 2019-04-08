export const state = () => ({
  list: []
});

export const mutations = {
  add(state, page) {
    state.list.push(page);
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
