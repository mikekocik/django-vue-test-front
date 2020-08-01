import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  actions: {
    async GET_POSTS({ commit }) {
      const response = await Vue.$axios.get('/api/v1/posts');
      commit('SET_LIST', response.data);
    },
  },
  mutations: {
    SET_LIST: (state, list) => {
      state.posts = list;
    },
  },
};
