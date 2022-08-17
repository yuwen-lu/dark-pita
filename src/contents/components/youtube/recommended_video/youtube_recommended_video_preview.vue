<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.getElementById('preview')
    };
  },
  methods: {},
  mounted() {
    this.emitter.on('youtube_recommended_video_preview', (message) => {
      let that = this;
      setTimeout(() => {
        that.target = document.getElementById('preview');

        if (message === 'on') {
          console.log('youtube recommended video block preview on');
          this.sendAction(1, 'toggle youtube_recommended_video_preview');
          that.target.style.visibility = 'hidden';
        } else if (message === 'off') {
          console.log('youtube recommended video block preview off');
          this.sendAction(0, 'toggle youtube_recommended_video_preview');
          that.target.style.visibility = 'visible';
        }

        that.$emit('update');
      }, 2000);
    });
  }
};
</script>
<style lang=""></style>
