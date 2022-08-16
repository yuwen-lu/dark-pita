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
    this.emitter.on('amazon_discount_price_disclosure', (message) => {
      this.target = document.querySelectorAll('[id^=apex_desktop]')[0];

      if (message === 'on') {
        console.log('amazon discount price disclosure on');
        let tag = this.target.getElementsByTagName('tr')[0].childNodes[0]
          .textContent;
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
        };
        this.target.onmouseleave = () => {
          tooltip.style.visibility = 'hidden';
        };
      } else if (message === 'off') {
        console.log('amazon discount price disclosure off');
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
