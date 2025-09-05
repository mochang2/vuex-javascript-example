import { createStore as cs } from "vuex"; // [TEST] normally execute when the name of the imported module is different with the exported name

export default cs({
  state: {
    count: 0,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
});
