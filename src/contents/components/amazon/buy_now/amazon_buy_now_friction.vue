<template>
  <div v-show="DP_friction">
    <div class="DP_friction_overlay" @click="off"></div>
    <div class="DP_friction_text">
      <span>Think Twice Before You Buy Now :)</span>
      <br />
      <br />
      <span class="DP_friction_tips"
        >Click anywhere to turn off the overlay</span
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      DP_friction: false,
      target: document.getElementById('submit.buy-now')
    };
  },
  methods: {
    on() {
      this.DP_friction = true;
    },
    off() {
      this.DP_friction = false;
      this.target.onmouseenter = () => {};
    }
  },
  mounted() {
    this.emitter.on('amazon_buy_now_friction', (message) => {
      this.target = document.getElementById('submit.buy-now');

      if (this.target !== null) {
        if (message === 'on') {
          console.log('amazon buy now friction on');
          this.sendAction(1, 'toggle amazon_buy_now_friction');
          this.target.onmouseenter = () => {
            console.log('buy now friction overlay');
            this.sendAction(1, 'trigger amazon_buy_now_friction');
            this.on();
          };
        } else if (message === 'off') {
          console.log('amazon buy now friction off');
          this.sendAction(0, 'toggle amazon_buy_now_friction');
          this.off();
        }
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped>
.DP_friction_overlay {
  @apply fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-infinite cursor-pointer;
}

.DP_friction_text {
  @apply fixed top-2/4 left-2/4 text-[48px] font-cabin font-semibold text-white -translate-x-2/4 -translate-y-2/4 opacity-100 flex flex-col justify-center items-center z-infinite;
}

.DP_friction_tips {
  @apply text-[20px] font-cabin font-normal text-white bg-black px-4 py-2 select-none opacity-100;
}
</style>
