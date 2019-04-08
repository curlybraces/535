export const state = () => ({
  list: []
});

export const mutations = {
  add(state, blog) {
    state.list.push(blog);
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
