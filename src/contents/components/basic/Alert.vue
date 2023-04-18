<template>
  <div class="DP_heading">
    <div class="DP_alert">
      <img
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pita.png?v=1660736175003"
      />
      <p>
        <span>Dark Pita</span>
        <span style="padding-left: 20px"> </span> dark patterns
        detected
      </p>
      <button @click="toggleMask" v-if="!isMask">Show</button>
      <button @click="toggleMask" v-if="isMask">Close</button>
      <button @click="reset">Reset</button>
      <a href="https://kapa-moon.github.io/dark-pita-manual/" target="_blank">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5A8.5 8.5 0 0 0 3.5 12c0 1.47.373 2.883 1.073 4.137l.15.27-1.112 3.984 3.987-1.112.27.15A8.5 8.5 0 1 0 12 3.5Zm0 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-8.75a2.75 2.75 0 0 1 2.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 0 1-1.5 0c0-1.01.297-1.574 1.051-2.359l.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 0 0-2.493-.128l-.007.128a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 12 6.75Z"
            fill="#FFFFFF"
          />
        </svg>
        <!-- <img
          src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/icons8-information-48.png?v=1660785219550"
          style="width: 20px; height: 20px"
        /> -->
      </a>
    </div>

    <button @click="closeAlert">
      <svg
        class="DP_alert_close"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m4.397 4.554.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084-.073.084Z"
          fill="#FFFFFF"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    targetNames: {
      type: Object
    },
    website: {
      type: String
    },
    isAlert: {
      type: Boolean
    },
    isMask: {
      type: Boolean
    }
  },
  watch: {
    isAlert(newValue, oldValue) {
      // Trigger saved changes
      if (newValue) {
        let that = this;
        let targets = [];
        Object.keys(this.targetNames).forEach((key) => {
          if (that.targetNames[key]) {
            targets.push(key);
          }
        });

        chrome.storage.sync.get('savedSettings', function(settings) {
          if (JSON.stringify(settings.savedSettings) !== '{}') {
            Object.keys(settings.savedSettings).forEach((key) => {
              // console.log(key, settings.savedSettings[key]);
              if (settings.savedSettings[key] === 'on') {
                for (let i = 0; i < targets.length; i++) {
                  if (key.search(targets[i]) !== -1) {
                    that.emitter.emit(key, 'on');
                  }
                }
              }
            });
          }
        });
      }

      // if the banner is on, move the top bar lower
      // otherwise, move the top bar higher
      console.log('isAlert changed to ' + newValue);
      chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
        this.currentTab = await tab;
        console.log(this.currentTab);

        if (this.currentTab !== null) {
          let url = this.currentTab.url;
          console.log('current site in alert:', url);
          if (url.search(/facebook.com/) !== -1) {
            let bannerElement = document.querySelectorAll('[role="banner"]')[0];
            for (var i = 0; i < bannerElement.children.length; i++) {
              if (newValue) {
                bannerElement.children[i].style.top = '64px';
              } else {
                bannerElement.children[i].style.top = '0px';
              }
            }
          } else if (url.search(/twitter.com\/home/) !== -1) {
            setTimeout(() => {
              let searchElement = document.querySelectorAll(
                '[aria-label="Search Twitter"]'
              )[0];
              if (newValue) {
                searchElement.style.top = '64px';
                document.body.style.paddingTop = '64px';
              } else {
                searchElement.style.top = '0px';
                document.body.style.paddingTop = '0px';
              }
            }, 2000);
          } else if (url.search(/youtube.com/) !== -1) {
            // need to manually change the top position of each screen componet (header, main content, left bar)
            let leftBar = document.getElementsByTagName('tp-yt-app-drawer')[0];
            console.log('leftBar', leftBar);
            // leftBar current position set to fixed, add its left value by 64 px;
            if (leftBar != undefined) {
              let leftBarCurrentTopValue = getComputedStyle(leftBar).top;
              if (newValue) {
                console.log('moving left bar down');
                leftBar.style.top =
                  parseInt(leftBarCurrentTopValue) + 64 + 'px';
              } else {
                console.log('moving left bar back to original position');
                leftBar.style.top =
                  parseInt(leftBarCurrentTopValue) - 64 + 'px';
              }
            } else {
              console.log('leftBar not retrieved');
            }

            let headerBar = document.getElementById('masthead-container');
            console.log('headerBar', headerBar);
            // headerBar current position set to fixed, add its left value by 64 px;
            if (headerBar != undefined) {
              let headerBarCurrentTopValue = getComputedStyle(headerBar).top;
              if (newValue) {
                headerBar.style.top =
                  parseInt(headerBarCurrentTopValue) + 64 + 'px';
              } else {
                headerBar.style.top =
                  parseInt(headerBarCurrentTopValue) - 64 + 'px';
              }
            } else {
              console.log('headerBar not retrieved');
            }

            let bannerElement = document.getElementsByTagName('ytd-browse')[0];
            if (bannerElement != undefined) {
              console.log('bannerElement: ' + bannerElement);
              if (newValue) {
                bannerElement.style.marginTop = '64px';
              } else {
                bannerElement.style.marginTop = '0px';
              }
            } else {
              console.log('bannerElement not retrieved');
            }

            let ytbAppElement = document.getElementsByTagName('ytd-app')[0];
            if (ytbAppElement != undefined) {
              console.log('ytbAppElement: ' + ytbAppElement);
              if (newValue) {
                ytbAppElement.style.top = '64px';
              } else {
                ytbAppElement.style.top = '0px';
              }
            } else {
              console.log('ytbAppElement not retrieved');
            }
          } else {
            if (newValue) {
              document.body.style.paddingTop = '64px';
            } else {
              document.body.style.paddingTop = '0px';
            }
          }
        }
      });
    }
  },
  data() {
    return {
      interventionState: {}
    };
  },
  methods: {
    toggleMask() {
      this.$emit('toggleMask', false);
    },
    closeAlert() {
      alert(
        'You can reopen the banner by clicking the Dark Pita icon and then clicking the Open Banner button.'
      );
      this.$emit('closeAlert', false);
    },
    reset() {
      let targets = [];
      Object.keys(this.targetNames).forEach((key) => {
        if (this.targetNames[key]) {
          targets.push(key);
        }
      });

      let that = this;
      this.sendAction(this.interventionState, 'before reset settings');
      chrome.storage.sync.get('savedSettings', function(settings) {
        that.interventionState = settings.savedSettings;
        if (JSON.stringify(settings.savedSettings) !== '{}') {
          Object.keys(settings.savedSettings).forEach((key) => {
            // console.log(key, settings.savedSettings[key]);
            if (settings.savedSettings[key] === 'on') {
              for (let i = 0; i < targets.length; i++) {
                if (key.search(targets[i]) !== -1) {
                  that.emitter.emit(key, 'off');
                  that.interventionState[key] = 'off';
                }
              }
            }
          });
        }

        chrome.storage.sync.set({ savedSettings: that.interventionState });
      });

      console.log('reset settings');
      this.sendAction(this.interventionState, 'reset settings');
      location.reload();
    }
  },
  mounted() {
    console.log('alert mounted');

    this.emitter.on('alert_button_show', (message) => {
      if (message === 'show') {
        this.toggleMask();
      }
    });
  }
};
</script>
<style lang="scss" scoped>
div {
  p {
    @apply p-0 m-0;
  }
}

.DP_heading {
  @apply fixed w-full top-0 left-0 z-extension;

  .DP_alert_close {
    @apply absolute top-[16px] right-[16px];
  }
}

.DP_alert {
  @apply font-cabin bg-dark w-full py-[12px] flex flex-row justify-center items-center gap-[16px] border-b border-gray-400 #{!important};

  p {
    @apply font-medium text-base text-white #{!important};

    span {
      @apply font-semibold uppercase;
    }
  }

  button {
    @apply bg-transparent w-[104px] hover:bg-white font-cabin font-normal text-sm text-white hover:text-dark px-[24px] py-[8px] rounded-[4px] border;
  }
}
</style>
