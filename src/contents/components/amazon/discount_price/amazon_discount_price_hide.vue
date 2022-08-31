<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: null,
      price: null
    };
  },
  methods: {},
  mounted() {
    this.emitter.on('amazon_discount_price_hide', (message) => {
      this.target = document.querySelectorAll('[id^=corePriceDisplay_desktop_feature_div]')[0];
      this.price = document.getElementsByClassName('priceToPay')[0];
      this.targetSibling = document.getElementById('desktop_unifiedPrice');
      this.priceSibling = document.getElementById(
        'jewelryPriceBreakup_feature_div'
      ).parentNode;

      if (
        this.target !== null &&
        this.price !== null &&
        this.targetSibling !== null &&
        this.priceSibling !== null
      ) {
        if (message === 'on') {
          console.log('amazon discount price hide on');
          this.sendAction(1, 'toggle amazon_discount_price_hide');
          this.targetSibling.parentNode.insertBefore(
            this.price,
            this.targetSibling.nextSibling
          );
          this.target.style.display = 'none';
        } else if (message === 'off') {
          console.log('amazon discount price hide off');
          this.sendAction(0, 'toggle amazon_discount_price_hide');
          this.targetSibling.parentNode.removeChild(this.price);
          this.priceSibling.parentNode.insertBefore(
            this.price,
            this.priceSibling
          );
          this.target.style.display = 'block';
        }
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang=""></style>
