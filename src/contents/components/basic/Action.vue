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
import DataService from "@/contents/services/data.js";

export default {
  props: {
    action: {
      type: Array,
    },
    color: {
      type: String,
      default: "money",
    },
    savedSettings: {
      type: Object,
    },
    targetName: {
      type: Object,
    },
  },
  data() {
    return {
      dropdown: false,
      intervention: this.action[0],
      interventionId: 0,
      interventionState: {
        // amazon
        amazon_buy_now_hide: "off",
        amazon_buy_now_fairness: "off",
        amazon_buy_now_friction: "off",
        amazon_disguised_ads_hide: "off",
        amazon_disguised_ads_friction: "off",
        amazon_disguised_ads_disclosure: "off",
        amazon_disguised_ads_counterfact: "off",
        amazon_discount_price_hide: "off",
        amazon_discount_price_disclosure: "off",
        amazon_discount_price_reflection: "off",
        amazon_discount_price_action: "off",
        amazon_home_card_focus: "off",
        amazon_home_card_reflection: "off",
        amazon_home_card_progress: "off",

        // facebook
        facebook_suggested_hide: "off",
        facebook_reels_hide: "off",
        facebook_reels_counterfact: "off",
        facebook_reels_friction: "off",
        facebook_sponsored_hide: "off",
        facebook_suggested_for_you_hide: "off",
        facebook_suggested_for_you_highlight: "off",

        // youtube

        youtube_recommended_video_focus: "off",
        youtube_recommended_video_preview: "off",
        youtube_recommended_video_reflection: "off",
        youtube_video_dislike_fairness: "off",
        youtube_sidebar_video_focus: "off",
        youtube_sidebar_video_preview: "off",
        youtube_sidebar_video_reflection: "off",

        // netflix
        netflix_timeline_reflection: "off",
        netflix_hugepreview_disable: "off",

        // twitter
        twitter_whats_happening_hide: "off",
        twitter_promoted_highlight: "off",
      },
    };
  },
  methods: {
    alterIntervention(index) {
      this.intervention = this.action[index];
      this.interventionId = index;

      console.log(
        "this.intervention.component: " + this.intervention.component
      );

      this.resetIntervention(this.intervention.component);

      // amazon
      if (this.intervention.component === "amazon_buy_now_hide") {
        this.emitter.emit("amazon_buy_now_hide", "on");
      } else if (this.intervention.component === "amazon_buy_now_fairness") {
        this.emitter.emit("amazon_buy_now_fairness", "on");
      } else if (this.intervention.component === "amazon_buy_now_friction") {
        this.emitter.emit("amazon_buy_now_friction", "on");
      } else if (this.intervention.component === "amazon_disguised_ads_hide") {
        this.emitter.emit("amazon_disguised_ads_hide", "on");
      } else if (
        this.intervention.component === "amazon_disguised_ads_disclosure"
      ) {
        this.emitter.emit("amazon_disguised_ads_disclosure", "on");
      } else if (
        this.intervention.component === "amazon_disguised_ads_counterfact"
      ) {
        this.emitter.emit("amazon_disguised_ads_counterfact", "on");
      } else if (
        this.intervention.component === "amazon_disguised_ads_friction"
      ) {
        this.emitter.emit("amazon_disguised_ads_friction", "on");
      } else if (this.intervention.component === "amazon_discount_price_hide") {
        this.emitter.emit("amazon_discount_price_hide", "on");
      } else if (
        this.intervention.component === "amazon_discount_price_disclosure"
      ) {
        this.emitter.emit("amazon_discount_price_disclosure", "on");
      } else if (
        this.intervention.component === "amazon_discount_price_reflection"
      ) {
        this.emitter.emit("amazon_discount_price_reflection", "on");
      } else if (
        this.intervention.component === "amazon_discount_price_action"
      ) {
        this.emitter.emit("amazon_discount_price_action", "on");
      } else if (this.intervention.component === "amazon_home_card_focus") {
        this.emitter.emit("amazon_home_card_focus", "on");
      } else if (
        this.intervention.component === "amazon_home_card_reflection"
      ) {
        this.emitter.emit("amazon_home_card_reflection", "on");
      } else if (this.intervention.component === "amazon_home_card_progress") {
        this.emitter.emit("amazon_home_card_progress", "on");
      }

      // youtube
      else if (
        this.intervention.component === "youtube_recommended_video_focus"
      ) {
        this.emitter.emit("youtube_recommended_video_focus", "on");
      } else if (
        this.intervention.component === "youtube_recommended_video_preview"
      ) {
        this.emitter.emit("youtube_recommended_video_preview", "on");
      } else if (
        this.intervention.component === "youtube_recommended_video_reflection"
      ) {
        this.emitter.emit("youtube_recommended_video_reflection", "on");
      } else if (
        this.intervention.component === "youtube_video_dislike_fairness"
      ) {
        this.emitter.emit("youtube_video_dislike_fairness", "on");
      } else if (
        this.intervention.component === "youtube_sidebar_video_focus"
      ) {
        this.emitter.emit("youtube_sidebar_video_focus", "on");
      } else if (
        this.intervention.component === "youtube_sidebar_video_preview"
      ) {
        this.emitter.emit("youtube_sidebar_video_preview", "on");
      } else if (
        this.intervention.component === "youtube_sidebar_video_reflection"
      ) {
        this.emitter.emit("youtube_sidebar_video_reflection", "on");
      }

      // netflix
      else if (this.intervention.component === "netflix_timeline_reflection") {
        this.emitter.emit("netflix_timeline_reflection", "on");
      } else if (
        this.intervention.component === "netflix_hugepreview_disable"
      ) {
        this.emitter.emit("netflix_hugepreview_disable", "on");
      }

      // facebook
      if (this.intervention.component === "facebook_suggested_hide") {
        this.emitter.emit("facebook_suggested_hide", "on");
      } else if (this.intervention.component === "facebook_reels_hide") {
        this.emitter.emit("facebook_reels_hide", "on");
      } else if (this.intervention.component === "facebook_reels_counterfact") {
        this.emitter.emit("facebook_reels_counterfact", "on");
      } else if (this.intervention.component === "facebook_reels_friction") {
        this.emitter.emit("facebook_reels_friction", "on");
      } else if (this.intervention.component === "facebook_sponsored_hide") {
        this.emitter.emit("facebook_sponsored_hide", "on");
        console.log("Emitting facebook_sponsored_hide message as on");
      } else if (
        this.intervention.component === "facebook_suggested_for_you_hide"
      ) {
        this.emitter.emit("facebook_suggested_for_you_hide", "on");
        console.log("Emitting facebook_suggested_for_you_hide message as on");
      } else if (
        this.intervention.component === "facebook_suggested_for_you_highlight"
      ) {
        this.emitter.emit("facebook_suggested_for_you_highlight", "on");
        console.log(
          "Emitting facebook_suggested_for_you_hightlight message as on"
        );
      }

      // twitter
      else if (this.intervention.component === "twitter_whats_happening_hide") {
        this.emitter.emit("twitter_whats_happening_hide", "on");
        console.log("Emitting twitter_whats_happening_hide message as on");
      } else if (this.intervention.component === "twitter_promoted_highlight") {
        this.emitter.emit("twitter_promoted_highlight", "on");
        console.log("Emitting twitter_promoted_highlight message as on");
      }

      if (this.intervention.component !== "none") {
        this.interventionState[this.intervention.component] = "on";
      }

      this.toggleDropdown();
    },
    triggerIntervention() {
      console.log("save settings");
      this.$emit("closePop", "close popup");
      chrome.storage.sync.set({ savedSettings: this.interventionState });
      this.sendAction(this.interventionState, "save settings");
    },
    resetIntervention(selectedComponent) {
      console.log(
        "Resetting interventions, selectedComponent: ",
        selectedComponent
      );
      // console.log(this.targetName, this.action);
      Object.keys(this.interventionState).forEach((key) => {
        if (this.interventionState[key] === "on") {
          // TODO: CHECK SAVED CONFIG AND SEE IF IT"S ALREADY SET
          if (key == selectedComponent) {
            console.log(
              "This is setting the message for the previously configured component " +
                key +
                ", but new instance. No need to reset."
            );
          } else {
            console.log("reset message for intervention: " + key);
            this.emitter.emit(key, "off");
            this.interventionState[key] = "off";
          }
        }
      });

      console.log("reset done", this.interventionState);
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    zoomDemo() {
      let action = document.getElementById("DP_action");
      let demo = document.getElementById("DP_action_demo");

      if (action.style.zIndex == -1 || action.style.zIndex == "") {
        demo.style.transform = "scale(3)";
        action.style.zIndex = 999999;
      } else {
        demo.style.transform = "scale(1)";
        setTimeout(() => {
          action.style.zIndex = -1;
        }, "500");
      }
    },
  },
  mounted() {
    console.log("action mounted");

    let element = document.getElementById("DP_action");
    element.classList.remove("DP_online_shopping");
    element.classList.remove("DP_social_media");
    element.classList.remove("DP_video_streaming");
    element.classList.add("DP_" + this.color);
    // console.log(this.color);

    if (JSON.stringify(this.savedSettings) !== "{}") {
      this.interventionState = this.savedSettings;
    }
  },
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
  @apply absolute z-infinite w-[237.5px] bg-dark rounded-[4px] divide-y divide-gray-100 shadow;

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
  @apply w-full rounded-[4px] transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer;

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
