import { createStore as cs } from "vuex"; // [TEST] normally execute when the name of the imported module is different with the exported name

// [TEST] normally execute when the imported path is relative
import { notStore, banner } from "./banner"; // [TEST] normally execute when named export, normally execute when another exported variable exists
import popup from "./popup"; // [TEST] normally execute when default export

export default cs({
  state: {
    count: 0, // [TEST] normally execute primitive type
    appDetail: {
      // [TEST] normally execute nested object
      scrollPosition: 100,
      size: {
        width: 0,
        height: 0,
      },
    },
    abc: "abc", // [TEST] normally execute when getters have the same name
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getAppDetail(state) {
      return state.appDetail;
    },
    abc: (state) => state.abc,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementBy(state, payload) {
      state.count += payload;
    },
    setScrollPosition(state, position) {
      state.appDetail.scrollPosition = position;
    },
  },
  modules: {
    myBanner: banner, // [TEST] normally execute when the name of module is different with the imported name
    popup, // [TEST] normally execute when the name of module is same with the imported name

    // the below code does not work in current version
    // test: {
    //   state: {
    //     abc: "abc",
    //   },
    //   getters: {
    //     getAbc: (state) => {
    //       return this.state.abc;
    //     },
    //   },
    // },
  },
});
