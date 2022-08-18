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
    this.emitter.on('youtube_recommended_video_focus', (message) => {
      let that = this;
      setTimeout(() => {
        that.target = document.querySelectorAll('[id^=contents]')[0];

        if (that.target !== null) {
          if (message === 'on') {
            console.log('youtube recommended video focus mode on');
            this.sendAction(1, 'toggle youtube_recommended_video_focus');
            that.target.style.visibility = 'hidden';
          } else if (message === 'off') {
            console.log('youtube recommended video focus mode off');
            this.sendAction(0, 'toggle youtube_recommended_video_focus');
            that.target.style.visibility = 'visible';
          }

          that.$emit('update');
        }
      }, 2000);
    });
  }
};
</script>
<style lang=""></style>
