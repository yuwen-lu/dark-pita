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
      let that = this;
      setTimeout(() => {
        that.elements = document.querySelectorAll('[id^=contents]');
        that.target = that.elements[that.elements.length - 1];

        if (message === 'on') {
          console.log('youtube sidebar video focus mode on');
          that.target.style.visibility = 'hidden';
        } else if (message === 'off') {
          console.log('youtube sidebar video focus mode off');
          that.target.style.visibility = 'visible';
        }

        that.$emit('update');
      }, 3000);
    });
  }
};
</script>
<style lang=""></style>
