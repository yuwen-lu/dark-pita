<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll('[id^=CardInstance]')[0],
      sponsord: document.getElementById(
        'ad-feedback-text-auto-sparkle-hsa-tetris'
      )
    };
  },
  methods: {},
  mounted() {
    this.emitter.on('amazon_disguised_ads_disclosure', (message) => {
      this.target = document.querySelectorAll('[id^=CardInstance]')[0];

      if (message === 'on') {
        console.log('amazon disguised ads disclosure on');
        this.sendAction(1, 'toggle amazon_disguised_ads_disclosure');
        this.sponsord = document.getElementById(
          'ad-feedback-text-auto-sparkle-hsa-tetris'
        );
        this.sponsord.style.visibility = 'hidden';
        this.target.style.cssText =
          'border-width: 4px; border-color: rgb(220 38 38);';
        let tip = document.createElement('div');
        tip.setAttribute('id', 'amazon_disguised_ads_disclosure_tip_id');
        tip.appendChild(document.createTextNode('This is an ADVERTISEMENT.'));
        tip.style.cssText =
          'background-color: rgb(220 38 38); color: rgb(255 255 255); font-size: 24px; position: absolute; top: 0; right: 0; padding: 4px;';
        this.target.appendChild(tip);
      } else if (message === 'off') {
        console.log('amazon disguised ads disclosure off');
        this.sendAction(0, 'toggle amazon_disguised_ads_disclosure');
        this.sponsord.style.visibility = 'visible';
        this.target.style.cssText = '';
        let tip = document.getElementById(
          'amazon_disguised_ads_disclosure_tip_id'
        );
        this.target.removeChild(tip);
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped></style>
