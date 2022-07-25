<template>
  <div>
    <div class="status" v-show="visible">
      <p>Dark Pita is on...</p>
      <button @click="highlight" class="button">button</button>
    </div>

    <Popup class="popup" :text="text" v-show="visible" />
  </div>
</template>

<script>
import Popup from './components/Popup.vue';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

export default {
  data() {
    return {
      visible: false,
      popUpX: 0,
      popUpY: 0,
      text: '',
      driver: new Driver({ allowClose: false })
    };
  },
  components: {
    Popup
  },
  methods: {
    highlight() {
      this.driver.highlight('#header');
    },
    test() {
      console.log('i am button');
    }
  }
};
</script>

<style lang="scss" scoped>
.status {
  @apply fixed top-0 left-0 bg-dark px-6 py-3 w-auto z-999;

  p {
    @apply m-0 font-menlo text-white text-xs;
  }
}
.button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
.popup {
  @apply fixed top-64 left-12;
}
</style>
