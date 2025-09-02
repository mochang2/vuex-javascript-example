// [TEST] normally execute when this is a module of module

export const modalTest = {
  namespaced: true,
  state: {
    isOpen: false,
  },
  getters: {
    getIsOpen: (state) => state.isOpen,
  },
  actions: {
    async open({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("open"); // [TEST] normally execute when a mutation is called inside action of a module
          resolve();
        }, 1000);
      });
    },
    async close({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("close");
          resolve();
        }, 1000);
      });
    },
  },
  mutations: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
};
