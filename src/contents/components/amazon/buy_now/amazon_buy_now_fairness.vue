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
  mounted() {
    this.emitter.on('amazon_buy_now_fairness', (message) => {
      this.target = document.getElementById('submit.buy-now');

      if (this.target !== null) {
        if (message === 'on') {
          console.log('amazon buy now fairness on');
          this.sendAction(1, 'toggle amazon_buy_now_fairness');
          this.target.style.cssText =
            'background: #ffd814 !important; border-color: #fcd200 !important;';
          this.target.classList.remove('a-button-oneclick');
          this.target.onmouseenter = () => {
            this.target.style.cssText =
              'background: #f7ca00 !important; border-color: #f2c200 !important; box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%) !important;';
          };
          this.target.onmouseleave = () => {
            this.target.style.cssText =
              'background: #ffd814 !important; border-color: #fcd200 !important;';
          };
        } else if (message === 'off') {
          console.log('amazon buy now fairness off');
          this.sendAction(0, 'toggle amazon_buy_now_fairness');
          this.target.style.cssText = '';
          this.target.classList.add('a-button-oneclick');
          this.target.onmouseenter = () => {
            this.target.style.cssText = '';
          };
          this.target.onmouseleave = () => {
            this.target.style.cssText = '';
          };
        }
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped>
.DP_buy_now {
  background: #ffd814 !important;
  border-color: #fcd200 !important;

  &:hover {
    background: #f7ca00 !important;
    border-color: #f2c200 !important;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%) !important;
  }
}
</style>
