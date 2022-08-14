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
    this.emitter.on('youtube_video_dislike_fairness', async (massage) => {
      if (massage === 'on') {
        console.log('youtube video dislike fairness on');
        this.target = document.getElementById(
          'top-level-buttons-computed'
        ).childNodes[1];

        chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
          let currentTab = await tab;
          if (currentTab !== null) {
            let url = currentTab.url;
            let id = this.getValueArray(url)[0];
            this.target.querySelector(
              '#text'
            ).innerText = await this.fetchPrice(id);
          }
        });

        this.$emit('update');
      } else if (massage === 'off') {
        console.log('youtube video dislike fairness off');
        this.target = document.getElementById(
          'top-level-buttons-computed'
        ).childNodes[1];
        this.target.querySelector('#text').innerText = 'Dislike';
        this.$emit('update');
      }
    });
  }
};
</script>
<style lang="scss" scoped></style>
