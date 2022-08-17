<template>
  <div class="DP_body" id="DP_awareness">
    <div class="DP_title">
      <img :src="icon" />
      <h1>{{ pattern }}</h1>
    </div>
    <div class="DP_section">
      <div class="DP_tag_wrapper">
        <span v-for="(value, index) in tag" class="DP_tag">
          <span
            @mouseenter="tagInfoState[value] = true"
            @mouseleave="tagInfoState[value] = false"
            >{{ value }}</span
          >
          <span class="DP_tag_info" v-show="tagInfoState[value]">
            {{ tagInfo[value] }}
          </span>
        </span>
      </div>
      <div class="DP_description DP_no_scrollbar">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="DP_section">
      <h2 class="DP_subtitle">potential impact</h2>
      <div class="DP_description DP_no_scrollbar">
        <p>{{ awareness }}</p>
      </div>
    </div>
    <button class="DP_button" @click="toggleAction">
      <p>{{ actionButton }}</p>
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        v-if="actionButton === 'Take Action'"
      >
        <path
          d="M13.267 4.209a.75.75 0 0 0-1.034 1.086l6.251 5.955H3.75a.75.75 0 0 0 0 1.5h14.734l-6.251 5.954a.75.75 0 0 0 1.034 1.087l7.42-7.067a.996.996 0 0 0 .3-.58.758.758 0 0 0-.001-.29.995.995 0 0 0-.3-.578l-7.419-7.067Z"
          fill="#FFFFFF"
        />
      </svg>
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        v-if="actionButton === 'Close'"
      >
        <path
          d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58.754.754 0 0 0 .001.289.995.995 0 0 0 .3.579l7.419 7.067Z"
          fill="#FFFFFF"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: Array,
      default: ['asymmetric', 'disparate treatment']
    },
    type: {
      type: String,
      default: 'financial loss'
    },
    icon: {
      type: String,
      default:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388'
    },
    pattern: {
      type: String,
      default: 'loss-gain framing'
    },
    description: {
      type: String,
      default:
        'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.'
    },
    awareness: {
      type: String,
      default:
        'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
    },
    color: {
      type: String,
      default: 'money'
    }
  },
  data() {
    return {
      actionButton: 'Take Action',
      tagInfoState: {
        asymmetric: false,
        'disparate treatment': false,
        'information hiding': false,
        covert: false,
        restrictive: false,
        deceptive: false
      },
      tagInfo: {
        asymmetric: 'Unequal burdens on choices available to the user',
        'disparate treatment':
          'Disadvantage and treat one group of users differently from another',
        'information hiding':
          'Obscure or delay the presentation of necessary information to users',
        covert: 'Hiding the influence mechanism from users',
        restrictive:
          'Eliminate certain choices that should be available to users',
        deceptive:
          'Induce false beliefs in users either through affirmative misstatements, misleading statements, or omissions'
      }
    };
  },
  methods: {
    toggleAction() {
      if (this.actionButton === 'Take Action') {
        this.actionButton = 'Close';
      } else {
        this.actionButton = 'Take Action';
      }

      this.$emit('toggleAction', 'toggle action');
    }
  },
  mounted() {
    console.log('action mounted');

    let element = document.getElementById('DP_awareness');
    element.classList.remove('DP_online_shopping');
    element.classList.remove('DP_social_media');
    element.classList.remove('DP_video_streaming');
    element.classList.add('DP_' + this.color);
    // console.log(this.color);
  }
};
</script>
<style lang="scss" scoped>
div {
  p {
    @apply p-0 m-0;
  }
}

.DP_body {
  @apply box-border flex flex-col justify-between items-start w-full px-[12px] py-[12px] gap-[16px] bg-background rounded-b-[4px];

  .DP_title {
    @apply flex flex-row items-center gap-[8px];

    img {
      @apply w-[40px] h-[40px];
    }

    h1 {
      @apply font-cabin font-bold text-[24px] leading-[32px] pointer-events-none select-none capitalize #{!important};
    }
  }

  .DP_section {
    @apply flex flex-col items-start gap-[8px] select-none;

    > h2 {
      @apply font-cabin font-medium text-[16px] uppercase;
    }
  }

  .DP_subtitle {
    @apply text-white pb-[4px];
  }
}

.DP_button {
  @apply w-full flex flex-row items-center justify-center rounded-[4px] bg-dark py-[8px] border gap-[8px];

  > p {
    @apply font-cabin font-normal text-[14px] text-white;
  }
}

.DP_description {
  @apply box-border w-full h-[96px] p-[8px] bg-dark rounded-[4px] overflow-scroll overscroll-none;

  > p {
    @apply font-cabin italic font-normal text-[14px] text-white;
  }
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
  .DP_title {
    @apply text-money;
  }

  .DP_button {
    @apply hover:bg-money border-money;
  }

  .DP_tag {
    @apply hover:bg-money border-money;
  }
}

.DP_social_media {
  .DP_title h1 {
    @apply text-privacy #{!important};
  }

  .DP_button {
    @apply hover:bg-privacy border-privacy;
  }

  .DP_tag {
    @apply hover:bg-privacy border-privacy;
  }
}

.DP_video_streaming {
  .DP_title {
    @apply text-cognition;
  }

  .DP_button {
    @apply hover:bg-cognition border-cognition;
  }

  .DP_tag {
    @apply hover:bg-cognition border-cognition;
  }
}

.DP_tag_wrapper {
  @apply flex flex-wrap flex-row gap-[8px] justify-start items-start;

  .DP_tag {
    @apply relative text-[12px] capitalize py-[2px] px-[12px] text-white bg-dark border-[1px] border-solid rounded-[4px];

    .DP_tag_info {
      @apply absolute bottom-[28px] py-[6px] px-[12px] left-[-1px] w-[200px] bg-dark text-[12px] text-white z-infinite rounded-[4px] border-[1px] border-solid border-dark drop-shadow-xl backdrop-blur-xl bg-dark/60;
    }
  }
}

svg {
  @apply w-[20px] h-[20px];
}
</style>
