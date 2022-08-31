<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll(
        '[id^=corePriceDisplay_desktop_feature_div]'
      )[0],
      tag: null
    };
  },
  mounted() {
    this.emitter.on('amazon_discount_price_disclosure', (message) => {
      this.target = document.querySelectorAll(
        '[id^=corePriceDisplay_desktop_feature_div]'
      )[0];
      this.tag = document.getElementsByClassName('basisPrice')[0];

      if (this.target !== null && this.tag !== null) {
        if (message === 'on') {
          console.log('amazon discount price disclosure on');
          this.sendAction(1, 'toggle amazon_discount_price_disclosure');
          let tag = this.tag.textContent;
          let tooltipContent = 'This price may not be the cheapest.';
          if (tag.search(/was/i) !== -1) {
            tooltipContent =
              'The <strong>Was Price</strong> is determined using the 90-day median price paid by customers for the product on Amazon. That means there could still have been lower prices than now.';
          } else if (tag.search(/list/i) !== -1) {
            tooltipContent =
              'The <strong>List Price</strong> is the suggested retail price of a product as provided by a manufacturer, supplier, or seller. It may not necessarily reflect the prevailing market price of a product.';
          } else if (tag.search(/new/i) !== -1) {
            tooltipContent =
              'The <strong>New price</strong> is the current price of the same product in new condition on Amazon.com.';
          }

          this.target.innerHTML +=
            '<span id="DP_tooltip">' + tooltipContent + '</span>';

          let tooltip = document.getElementById('DP_tooltip');
          tooltip.style.cssText =
            'visibility: hidden; width: 300px; background-color: black; color: #fff; text-align: center; border-radius: 4px; padding: 8px;  position: absolute; z-index: 1; bottom: 100%; right: 50%; margin-left: -60px;';
          this.target.style.cssText = 'position: relative;';
          this.target.onmouseenter = () => {
            tooltip.style.visibility = 'visible';
            this.sendAction(1, 'trigger amazon_discount_price_disclosure');
          };
          this.target.onmouseleave = () => {
            tooltip.style.visibility = 'hidden';
          };
        } else if (message === 'off') {
          console.log('amazon discount price disclosure off');
          this.sendAction(0, 'toggle amazon_discount_price_disclosure');
          let tooltip = document.getElementById('DP_tooltip');
          this.target.removeChild(tooltip);
          this.target.style.cssText = '';
          this.target.onmouseenter = () => {};
          this.target.onmouseleave = () => {};
        }
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped></style>
