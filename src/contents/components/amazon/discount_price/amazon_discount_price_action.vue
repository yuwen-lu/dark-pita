<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll('[id^=apex_desktop]')[0]
    };
  },
  mounted() {
    this.emitter.on('amazon_discount_price_action', (message) => {
      this.target = document.querySelectorAll('[id^=apex_desktop]')[0];

      if (message === 'on') {
        console.log('amazon discount price action guide on');
        let tag = this.target.getElementsByTagName('tr')[0].childNodes[0]
          .textContent;
        let tooltipContent = 'NO Buying, 100% Saving.';

        this.target.innerHTML +=
          '<span id="DP_tooltip">' + tooltipContent + '</span>';

        let tooltip = document.getElementById('DP_tooltip');
        tooltip.style.cssText =
          'visibility: hidden; width: 320px; background-color: rgb(220 38 38); color: #fff; font-size: 24px; text-align: center; border-radius: 4px; padding: 12px;  position: absolute; z-index: 1; bottom: 100%; right: 50%; margin-left: -60px;';
        this.target.style.cssText = 'position: relative;';
        this.target.onmouseenter = () => {
          tooltip.style.visibility = 'visible';
        };
        this.target.onmouseleave = () => {
          tooltip.style.visibility = 'hidden';
        };
      } else if (message === 'off') {
        console.log('amazon discount price action guide off');
        let tooltip = document.getElementById('DP_tooltip');
        this.target.removeChild(tooltip);
        this.target.style.cssText = '';
        this.target.onmouseenter = () => {};
        this.target.onmouseleave = () => {};
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped></style>
