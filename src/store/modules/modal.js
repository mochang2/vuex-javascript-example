// [TEST] normally execute when this is a module of module

export const modalTest = {
  namespaced: true,
  state: {
    isOpen: false,
  },
  getters: {
    getIsOpen: (state) => state.isOpen,
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
