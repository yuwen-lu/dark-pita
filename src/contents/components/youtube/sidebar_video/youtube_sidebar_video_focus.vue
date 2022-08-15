<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      elements: null,
      target: null
    };
  },
  methods: {},
  mounted() {
    this.emitter.on('youtube_sidebar_video_focus', (message) => {
      this.elements = document.querySelectorAll('[id^=contents]');
      this.target = this.elements[this.elements.length - 1];

      if (message === 'on') {
        console.log('youtube sidebar video focus mode on');
        this.target.style.visibility = 'hidden';
        this.$emit('update');
      } else if (message === 'off') {
        console.log('youtube sidebar video focus mode off');
        this.target.style.visibility = 'visible';
        this.$emit('update');
      }
    });
  }
};
</script>
<style lang=""></style>
