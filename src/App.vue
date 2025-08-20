<script setup>
// [TEST] normally execute in vue files

import { useStore } from "vuex";
import { computed } from "vue";
import { useBanner } from "./compositions/useBanner";

const store = useStore();

// index.js
const count = computed(() => store.getters.getCount);
const increment = () => {
  store.commit("increment");
};
const incrementBy = () => {
  store.commit("incrementBy", 2);
};

const appDetail = computed(() => store.state.appDetail);
const setScrollPosition = () => {
  store.commit(
    "setScrollPosition",
    store.getters.getAppDetail.scrollPosition * -1
  );
};

const abc1 = computed(() => store.state.abc);
const abc2 = computed(() => store.getters.abc);

// banner.js
const { isBannerOpen1, isBannerOpen2, openBanner, closeBanner } = useBanner();

// popup.js
const isPopupOpen1 = computed(() => store.state.popup.isOpen);
const isPopupOpen2 = computed(() => store.getters["getIsOpen"]);
const openPopup = () => {
  store.commit("open");
};
const closePopup = () => {
  store.commit("close");
};

// modal.js
const isModalOpen1 = computed(() => store.state.myBanner.modal.isOpen);
const isModalOpen2 = computed(() => store.getters["myBanner/modal/getIsOpen"]);
const openModal = () => {
  store.commit("myBanner/modal/open");
};
const closeModal = () => {
  store.commit("myBanner/modal/close");
};
</script>

<template>
  <p>index.js</p>
  <br />
  <div class="btn-wrapper">
    <button type="button" @click="increment">increment count button</button>
    <button type="button" @click="incrementBy">
      increment count double button
    </button>
  </div>
  <br />
  <div>count: {{ count }}</div>
  <br />
  <div class="btn-wrapper">
    <button type="button" @click="setScrollPosition">scroll * -1</button>
  </div>
  <br />
  <div>appDetail: {{ JSON.stringify(appDetail) }}</div>
  <br />
  <div>abc1: {{ abc1 }}, abc2: {{ abc2 }}</div>
  <br />
  <br />
  <br />

  <p>banner.js</p>
  <br />
  <div class="btn-wrapper">
    <button type="button" @click="openBanner">open banner</button>
    <button type="button" @click="closeBanner">close banner</button>
  </div>
  <br />
  <div>
    isBannerOpen1: {{ isBannerOpen1 }}<br />isBannerOpen2: {{ isBannerOpen2 }}
  </div>
  <br />
  <br />
  <br />

  <p>popup.js</p>
  <br />
  <div class="btn-wrapper">
    <button type="button" @click="openPopup">open popup</button>
    <button type="button" @click="closePopup">close popup</button>
  </div>
  <br />
  <div>
    isPopupOpen1: {{ isPopupOpen1 }}<br />isPopupOpen2: {{ isPopupOpen2 }}
  </div>
  <br />
  <br />
  <br />

  <p>modal.js</p>
  <br />
  <div class="btn-wrapper">
    <button type="button" @click="openModal">open modal</button>
    <button type="button" @click="closeModal">close modal</button>
  </div>
  <br />
  <div>
    isModalOpen1: {{ isModalOpen1 }}<br />isModalOpen2: {{ isModalOpen2 }}
  </div>
  <br />
  <br />
  <br />
</template>

<style scoped>
p {
  font-weight: bold;
  text-decoration: underline;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
}

.btn-wrapper button {
  flex-grow: 1;
}
</style>
