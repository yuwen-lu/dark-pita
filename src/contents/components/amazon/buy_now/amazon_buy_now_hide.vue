<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.getElementById('submit.buy-now')
    };
  },
  methods: {},
  mounted() {
    this.emitter.on('amazon_buy_now_hide', (message) => {
      this.target = document.getElementById('submit.buy-now');

      if (message === 'on') {
        console.log('amazon buy now hide on');
        this.sendAction(1, 'toggle amazon_buy_now_hide');
        this.target.style.display = 'none';
      } else if (message === 'off') {
        console.log('amazon buy now hide off');
        this.sendAction(0, 'toggle amazon_buy_now_hide');
        this.target.style.display = 'visible';
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang=""></style>
