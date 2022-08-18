<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: null
    };
  },
  methods: {
    async fetchPrice(id) {
      const res = await fetch(
        'https://returnyoutubedislikeapi.com/votes?videoId=' + id
      );
      const data = await res.json();
      return data.dislikes;
    },
    getValueArray(url) {
      return url.match(/(?<=[\?&]\w+=)[^&]+(?=(&|$))/g);
    }
  },
  mounted() {
    this.emitter.on('youtube_video_dislike_fairness', async (message) => {
      let that = this;
      setTimeout(() => {
        that.target = document.getElementById(
          'top-level-buttons-computed'
        ).childNodes[1];

        if (that.target !== null) {
          if (message === 'on') {
            console.log('youtube video dislike fairness on');
            this.sendAction(1, 'toggle youtube_video_dislike_fairness');
            chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
              let currentTab = await tab;
              if (currentTab !== null) {
                let url = currentTab.url;
                let id = that.getValueArray(url)[0];
                that.target.querySelector(
                  '#text'
                ).innerText = await that.fetchPrice(id);
              }
            });
          } else if (message === 'off') {
            console.log('youtube video dislike fairness off');
            this.sendAction(0, 'toggle youtube_video_dislike_fairness');
            that.target.querySelector('#text').innerText = 'Dislike';
          }

          that.$emit('update');
        }
      }, 3000);
    });
  }
};
</script>
<style lang="scss" scoped></style>
