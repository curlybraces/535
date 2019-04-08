export const state = () => ({
  list: []
});

export const mutations = {
  add(state, service) {
    state.list.push(service);
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
