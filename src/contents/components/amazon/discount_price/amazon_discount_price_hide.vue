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
  methods: {},
  mounted() {
    this.emitter.on('amazon_discount_price_hide', (message) => {
      this.target = document.querySelectorAll('[id^=apex_desktop]')[0];

      if (message === 'on') {
        console.log('amazon discount price hide on');
        this.target.style.display = 'none';
      } else if (message === 'off') {
        console.log('amazon discount price hide off');
        this.target.style.display = 'visible';
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang=""></style>
