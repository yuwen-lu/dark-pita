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
    this.emitter.on('amazon_buy_now_fairness', (massage) => {
      if (massage === 'on') {
        console.log('buy now fairness on');
        this.target = document.getElementById('submit.buy-now');
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
      } else if (massage === 'off') {
        console.log('buy now fairness off');
        this.target.style.cssText = '';
        this.target.classList.add('a-button-oneclick');
        this.target.onmouseenter = () => {
          this.target.style.cssText = '';
        };
        this.target.onmouseleave = () => {
          this.target.style.cssText = '';
        };
      }
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
