<script>
// [TEST] normally execute in a not setup script file

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

// index.js
const count = computed(() => store.getters.getCount);
</script>

<template>
  <p>index.js</p>
  <div>count: {{ count }}</div>
</template>
