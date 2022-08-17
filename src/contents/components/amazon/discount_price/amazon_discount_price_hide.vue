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
      this.target = document.querySelectorAll('[id^=corePrice_desktop]')[0];
      this.price = document.getElementsByClassName('apexPriceToPay')[0];
      this.sibling = document.getElementById('desktop_unifiedPrice');

      if (
        this.target !== null &&
        this.target !== null &&
        this.sibling !== null
      ) {
        if (message === 'on') {
          console.log('amazon discount price hide on');
          this.sibling.parentNode.insertBefore(
            this.price,
            this.sibling.nextSibling
          );
          this.target.style.display = 'none';
        } else if (message === 'off') {
          console.log('amazon discount price hide off');
          this.sibling.parentNode.removeChild(this.price);
          this.target.style.display = 'visible';
        }
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang=""></style>
