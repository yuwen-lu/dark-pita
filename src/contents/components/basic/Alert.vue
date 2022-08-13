<template>
  <div class="DP_heading" v-show="isAlert">
    <div class="DP_alert">
      <img
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/dawn.png?v=1659250496384"
      />
      <p>
        <span>Dark Pita</span> detected dark patterns on this site that may be
        affecting your personal wellbeing
      </p>
      <button @click="toggleMask" v-if="!isMask">
        Show All
      </button>
      <button @click="toggleMask" v-if="isMask">
        Close
      </button>
      <button @click="reset">
        Reset
      </button>
    </div>

    <button @click="closeAlert">
      <svg
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
    }
  },
  data() {
    return {
      isMask: false,
      isAlert: true,
      interventionState: {}
    };
  },
  methods: {
    toggleMask() {
      this.isMask = !this.isMask;
      this.$emit('toggleMask', false);
    },
    closeAlert() {
      this.isAlert = false;
    },
    reset() {
      let targets = [];
      Object.keys(this.targetNames).forEach((key) => {
        if (this.targetNames[key]) {
          targets.push(key);
        }
      });

      let that = this;
      chrome.storage.sync.get('savedSettings', function(settings) {
        that.interventionState = settings.savedSettings;
        if (JSON.stringify(settings.savedSettings) !== '{}') {
          Object.keys(settings.savedSettings).forEach((key) => {
            console.log(key, settings.savedSettings[key]);
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
        // console.log(that.interventionState);
        chrome.storage.sync.set({ savedSettings: that.interventionState });
      });
    }
  },
  mounted() {
    console.log('alert mounted');
    document.body.style.paddingTop = '64px';

    this.emitter.on('alert_button_show', (massage) => {
      if (massage === 'show') {
        this.toggleMask();
      }
    });

    let targets = [];
    Object.keys(this.targetNames).forEach((key) => {
      if (this.targetNames[key]) {
        targets.push(key);
      }
    });

    let that = this;
    chrome.storage.sync.get('savedSettings', function(settings) {
      if (JSON.stringify(settings.savedSettings) !== '{}') {
        Object.keys(settings.savedSettings).forEach((key) => {
          console.log(key, settings.savedSettings[key]);
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

  svg {
    @apply absolute top-[16px] right-[16px];
  }
}

.DP_alert {
  @apply bg-dark w-full py-[12px] flex flex-row justify-center items-center gap-[16px] border-b border-gray-400;

  p {
    @apply font-cabin font-medium text-base text-white;

    span {
      @apply font-semibold uppercase;
    }
  }

  button {
    @apply bg-transparent w-[104px] hover:bg-white font-cabin font-normal text-sm text-white hover:text-dark px-[24px] py-[8px] rounded-[4px] border;
  }
}
</style>
