<template>
  <div class="DP_action" id="DP_action">
    <div class="DP_action_section">
      <div class="DP_action_title">
        <h2>choose action</h2>
      </div>
      <div class="DP_action_dropdown">
        <button
          id="dropdownDefault"
          @click="toggleDropdown"
          data-dropdown-toggle="dropdown"
          class="DP_dropdown"
          type="button"
        >
          <p>{{ intervention.name }}</p>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.22 8.47a.75.75 0 0 1 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" v-show="dropdown" class="DP_dropdown_list">
          <ul aria-labelledby="dropdownDefault">
            <li
              v-for="(val, index) in action"
              :key="index"
              @click="alterIntervention(index)"
            >
              <a href="javascript:;">{{ val.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="DP_section">
        <div class="DP_description DP_no_scrollbar">
          <p>{{ intervention.description }}</p>
        </div>
        <img
          :src="intervention.image"
          id="DP_action_demo"
          class="DP_action_demo"
          @click="zoomDemo"
        />
      </div>
    </div>
    <button class="DP_button" @click="triggerIntervention">
      <p>Save Changes</p>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    action: {
      type: Array
    },
    color: {
      type: String,
      default: 'money'
    },
    savedSettings: {
      type: Object
    },
    targetName: {
      type: Object
    }
  },
  data() {
    return {
      dropdown: false,
      intervention: this.action[0],
      interventionId: 0,
      interventionState: {
        // amazon
        amazon_buy_now_hide: 'off',
        amazon_buy_now_fairness: 'off',
        amazon_buy_now_friction: 'off',
        amazon_disguised_ads_hide: 'off',
        amazon_disguised_ads_friction: 'off',
        amazon_disguised_ads_disclosure: 'off',
        amazon_disguised_ads_counterfact: 'off',
        amazon_discount_price_hide: 'off',
        amazon_discount_price_disclosure: 'off',
        amazon_discount_price_reflection: 'off',
        amazon_discount_price_action: 'off',
        amazon_home_card_focus: 'off',
        amazon_home_card_reflection: 'off',
        amazon_home_card_progress: 'off',

        // facebook
        facebook_reels_hide: "off",
        facebook_reels_counterfact: "off",
        facebook_reels_friction: "off",
        facebook_suggested_for_you_hide: "off",
        facebook_suggested_for_you_highlight: "off",

        // youtube
        youtube_recommended_video_focus: 'off',
        youtube_recommended_video_preview: 'off',
        youtube_recommended_video_reflection: 'off',
        youtube_video_dislike_fairness: 'off',
        youtube_sidebar_video_focus: 'off',
        youtube_sidebar_video_preview: 'off',
        youtube_sidebar_video_reflection: 'off',

        // netflix
        netflix_timeline_reflection: 'off',
        netflix_hugepreview_disable: 'off',

        // twitter
        twitter_whats_happening_hide: 'off',
        twitter_promoted_highlight: 'off',
        twitter_promoted_friction: 'off'
      }
    };
  },
  methods: {
    alterIntervention(index) {
      this.intervention = this.action[index]; // this.action contains all the options for the current dark pattern
      this.interventionId = index; // the index points to the selected option for current dark pattern
      // when user selects one option, we need to reset the state of the other options
      // this is used when users change between different options
      this.resetIntervention(this.action, index);

      // amazon
      if (this.intervention.component === 'amazon_buy_now_hide') {
        this.emitter.emit('amazon_buy_now_hide', 'on');
      } else if (this.intervention.component === 'amazon_buy_now_fairness') {
        this.emitter.emit('amazon_buy_now_fairness', 'on');
      } else if (this.intervention.component === 'amazon_buy_now_friction') {
        this.emitter.emit('amazon_buy_now_friction', 'on');
      } else if (this.intervention.component === 'amazon_disguised_ads_hide') {
        this.emitter.emit('amazon_disguised_ads_hide', 'on');
      } else if (
        this.intervention.component === 'amazon_disguised_ads_disclosure'
      ) {
        this.emitter.emit('amazon_disguised_ads_disclosure', 'on');
      } else if (
        this.intervention.component === 'amazon_disguised_ads_counterfact'
      ) {
        this.emitter.emit('amazon_disguised_ads_counterfact', 'on');
      } else if (
        this.intervention.component === 'amazon_disguised_ads_friction'
      ) {
        this.emitter.emit('amazon_disguised_ads_friction', 'on');
      } else if (this.intervention.component === 'amazon_discount_price_hide') {
        this.emitter.emit('amazon_discount_price_hide', 'on');
      } else if (
        this.intervention.component === 'amazon_discount_price_disclosure'
      ) {
        this.emitter.emit('amazon_discount_price_disclosure', 'on');
      } else if (
        this.intervention.component === 'amazon_discount_price_reflection'
      ) {
        this.emitter.emit('amazon_discount_price_reflection', 'on');
      } else if (
        this.intervention.component === 'amazon_discount_price_action'
      ) {
        this.emitter.emit('amazon_discount_price_action', 'on');
      } else if (this.intervention.component === 'amazon_home_card_focus') {
        this.emitter.emit('amazon_home_card_focus', 'on');
      } else if (
        this.intervention.component === 'amazon_home_card_reflection'
      ) {
        this.emitter.emit('amazon_home_card_reflection', 'on');
      } else if (this.intervention.component === 'amazon_home_card_progress') {
        this.emitter.emit('amazon_home_card_progress', 'on');
      }

      // youtube
      else if (
        this.intervention.component === 'youtube_recommended_video_focus'
      ) {
        this.emitter.emit('youtube_recommended_video_focus', 'on');
      } else if (
        this.intervention.component === 'youtube_recommended_video_preview'
      ) {
        this.emitter.emit('youtube_recommended_video_preview', 'on');
      } else if (
        this.intervention.component === 'youtube_recommended_video_reflection'
      ) {
        this.emitter.emit('youtube_recommended_video_reflection', 'on');
      } else if (
        this.intervention.component === 'youtube_video_dislike_fairness'
      ) {
        this.emitter.emit('youtube_video_dislike_fairness', 'on');
      } else if (
        this.intervention.component === 'youtube_sidebar_video_focus'
      ) {
        this.emitter.emit('youtube_sidebar_video_focus', 'on');
      } else if (
        this.intervention.component === 'youtube_sidebar_video_preview'
      ) {
        this.emitter.emit('youtube_sidebar_video_preview', 'on');
      } else if (
        this.intervention.component === 'youtube_sidebar_video_reflection'
      ) {
        this.emitter.emit('youtube_sidebar_video_reflection', 'on');
      }

      // netflix
      else if (this.intervention.component === 'netflix_timeline_reflection') {
        this.emitter.emit('netflix_timeline_reflection', 'on');
      } else if (
        this.intervention.component === 'netflix_hugepreview_disable'
      ) {
        this.emitter.emit('netflix_hugepreview_disable', 'on');
      }

      // facebook
      if (this.intervention.component === "facebook_reels_hide") {
        this.emitter.emit("facebook_reels_hide", "on");
      } else if (this.intervention.component === "facebook_reels_counterfact") {
        this.emitter.emit("facebook_reels_counterfact", "on");
      } else if (this.intervention.component === "facebook_reels_friction") {
        this.emitter.emit("facebook_reels_friction", "on");
      } else if (
        this.intervention.component === 'facebook_suggested_for_you_hide'
      ) {
        this.emitter.emit('facebook_suggested_for_you_hide', 'on');
        console.log('Emitting facebook_suggested_for_you_hide message as on');
      } else if (
        this.intervention.component === 'facebook_suggested_for_you_highlight'
      ) {
        this.emitter.emit('facebook_suggested_for_you_highlight', 'on');
        console.log(
          'Emitting facebook_suggested_for_you_hightlight message as on'
        );
      }

      // twitter
      else if (this.intervention.component === 'twitter_whats_happening_hide') {
        this.emitter.emit('twitter_whats_happening_hide', 'on');
        console.log('Emitting twitter_whats_happening_hide message as on');
      } else if (this.intervention.component === 'twitter_promoted_highlight') {
        this.emitter.emit('twitter_promoted_highlight', 'on');
        console.log('Emitting twitter_promoted_highlight message as on');
      } else if (this.intervention.component === 'twitter_promoted_friction') {
        this.emitter.emit('twitter_promoted_friction', 'on');
        console.log('Emitting twitter_promoted_friction message as on');
      }

      if (this.intervention.component !== 'none') {
        this.interventionState[this.intervention.component] = 'on';
      }

      this.emitter.emit('intervention state', this.interventionState);
      this.toggleDropdown();
    },
    triggerIntervention() {
      console.log('save settings');
      this.$emit('closePop', 'close popup');
      this.$parent.$emit('toggleMask', false);
      chrome.storage.sync.set({ savedSettings: this.interventionState });
      this.sendAction(this.interventionState, 'save settings');
    },
    resetIntervention(actions, index) {
      // three scenarios:
      // 1. set intervention for a DP that's previously configured in chrome.storage.sync (no need to reset, new setting will be sest to chrome.storage.sync again when pushing the button)
      // 2. set intervention for a DP that's not previously configured
      //    2.a. select an option (not necessary, but can reset all alternative options for the same DP)
      //    2.b. select another option while clearing the previous selection (reset all alternative options for the same DP)

      // the component names of the options to be reset
      let resetOptions = [];
      actions.forEach((action, i) => {
        if (i !== index) {
          resetOptions.push(action.component);
        }
      });

      console.log('Resetting interventions for: ' + resetOptions.join(', '));

      // console.log(this.targetName, this.action);
      Object.keys(this.interventionState).forEach((key) => {
        if (
          resetOptions.includes(key) &&
          this.interventionState[key] === 'on'
        ) {
          console.log('reset message for intervention: ' + key);
          this.emitter.emit(key, 'off');
          this.interventionState[key] = 'off';
        }
      });

      console.log('reset done', this.interventionState);
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    zoomDemo() {
      let action = document.getElementById('DP_action');
      let demo = document.getElementById('DP_action_demo');

      if (action.style.zIndex == -1 || action.style.zIndex == '') {
        demo.style.transform = 'scale(3)';
        action.style.zIndex = 999999;
      } else {
        demo.style.transform = 'scale(1)';
        setTimeout(() => {
          action.style.zIndex = -1;
        }, '500');
      }
    }
  },
  mounted() {
    console.log('action mounted');

    // Set the color theme according to the type of the current site
    let element = document.getElementById('DP_action');
    element.classList.remove('DP_online_shopping');
    element.classList.remove('DP_social_media');
    element.classList.remove('DP_video_streaming');
    element.classList.add('DP_' + this.color);
    // console.log(this.color);

    // Set the default option in dropdown menu to the current intervention imposed on the target dark pattern
    if (JSON.stringify(this.savedSettings) !== '{}') {
      this.interventionState = this.savedSettings;
      Object.keys(this.interventionState).map((key) => {
        if (key.search(this.targetName) !== -1) {
          if (this.interventionState[key] === 'on') {
            for (let i = 0; i < this.action.length; i++) {
              if (this.action[i].component === key) {
                this.intervention = this.action[i];
              }
            }
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  p {
    @apply p-0 m-0;
  }
}

.DP_action {
  @apply absolute w-full top-0 flex flex-col justify-between gap-[14px] px-[12px] pt-[20px] pb-[12px] bg-background rounded-r-[4px] transition-left ease-in-out duration-1000 delay-0;

  z-index: -1;
  // &:hover {
  //   z-index: 999999;
  // }

  .DP_action_section {
    @apply w-full flex flex-col gap-[8px] items-start;

    .DP_action_title {
      @apply flex flex-row justify-between items-center w-full;

      > h2 {
        @apply font-cabin font-medium text-base uppercase text-white;
      }
    }
  }

  .DP_action_dropdown {
    @apply w-full;
  }
}

.DP_dropdown {
  @apply w-full bg-dark p-[8px] border focus:ring-4 focus:outline-none font-medium rounded-[4px] items-center flex flex-row justify-between capitalize;

  > p {
    @apply font-cabin font-normal text-sm text-white;
  }
}

.DP_dropdown_list {
  @apply absolute z-infinite w-[256px] bg-dark rounded-[4px] divide-y divide-gray-100 shadow;

  ul {
    @apply py-[4px] list-none m-0;

    li::marker {
      content: none;
    }

    a {
      @apply block py-[8px] px-[16px] hover:bg-background font-cabin font-normal text-sm text-white capitalize;
    }
  }
}

.DP_button {
  @apply w-full flex flex-row items-center justify-center rounded-[4px] bg-dark py-[8px] border gap-[8px];

  > p {
    @apply font-cabin font-normal text-sm text-white;
  }
}

.DP_description {
  @apply box-border w-full h-[96px] p-[8px] bg-dark rounded-[4px] overflow-scroll overscroll-none;

  > p {
    @apply font-cabin italic font-normal text-sm text-white;
  }
}

.DP_action_demo {
  @apply rounded-[4px] w-[256px] h-[144px] overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer;

  // &:hover {
  //   transform: scale(3);
  // }
}

.DP_section {
  @apply flex flex-col gap-[10px] mt-[2px] select-none;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.DP_no_scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.DP_no_scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.DP_online_shopping {
  .DP_dropdown {
    @apply hover:bg-money border-money focus:ring-yellow-300;
  }

  .DP_button {
    @apply hover:bg-money border-money;
  }
}

.DP_social_media {
  .DP_dropdown {
    @apply hover:bg-privacy border-privacy focus:ring-green-300;
  }

  .DP_button {
    @apply hover:bg-privacy border-privacy;
  }
}

.DP_video_streaming {
  .DP_dropdown {
    @apply hover:bg-cognition border-cognition focus:ring-blue-300;
  }

  .DP_button {
    @apply hover:bg-cognition border-cognition;
  }
}

svg {
  @apply w-[20px] h-[20px];
}
</style>
