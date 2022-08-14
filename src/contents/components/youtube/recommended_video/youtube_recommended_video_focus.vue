<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll('[id^=contents]')[0]
    };
  },
  methods: {},
  mounted() {
    this.emitter.on('youtube_recommended_video_focus', (massage) => {
      if (massage === 'on') {
        console.log('youtube recommended video focus mode on');
        this.target = document.querySelectorAll('[id^=contents]')[0];
        this.target.style.visibility = 'hidden';
        this.$emit('update');
      } else if (massage === 'off') {
        console.log('youtube recommended video focus mode off');
        this.target = document.querySelectorAll('[id^=contents]')[0];
        this.target.style.visibility = 'visible';
        this.$emit('update');
      }
    });
  }
};
</script>
<style lang=""></style>
