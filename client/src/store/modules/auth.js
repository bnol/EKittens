export default {
  namespaced: true,
  state: {
    connected: false,
    user: null,
  },
  mutations: {
    connected(state, { user }) {
      state.connected = true;
      state.user = user;
    },
  },
};
