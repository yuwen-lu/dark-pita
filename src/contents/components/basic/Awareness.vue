<template>
  <div class="DP_body" id="DP_awareness">
    <div class="DP_title">
      <img :src="icon" />
      <h1>{{ type }}</h1>
    </div>
    <div class="DP_section">
      <h2 class="DP_subtitle">{{ name }}</h2>
      <div class="DP_description DP_no-scrollbar">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="DP_section">
      <h2 class="DP_subtitle">potential impact</h2>
      <div class="DP_description DP_no-scrollbar">
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
    type: {
      type: String,
      default: 'financial loss'
    },
    icon: {
      type: String,
      default:
        'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388'
    },
    name: {
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
      actionButton: 'Take Action'
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
    element.classList.remove('DP_money');
    element.classList.remove('DP_privacy');
    element.classList.remove('DP_cognition');
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
      @apply font-cabin font-bold text-2xl pointer-events-none select-none capitalize;
    }
  }

  .DP_section {
    @apply flex flex-col items-start gap-[8px] pointer-events-none select-none;

    > h2 {
      @apply font-cabin font-medium text-base uppercase;
    }
  }

  .DP_subtitle {
    @apply text-white;
  }
}

.DP_button {
  @apply w-full flex flex-row items-center justify-center rounded-[4px] bg-dark py-[8px] border gap-[8px];

  > p {
    @apply font-cabin font-normal text-sm text-white;
  }
}

.DP_description {
  @apply box-border p-[8px] h-[96px] bg-dark rounded-[4px] overflow-scroll overscroll-none flex items-center;

  > p {
    @apply font-cabin italic font-normal text-sm text-white;
  }
}

/* Hide scrollbar for Chrome, Safari and Opera */
.DP_no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.DP_no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.DP_money {
  .DP_title {
    @apply text-money;
  }

  .DP_button {
    @apply hover:bg-money border-money;
  }
}

.DP_privacy {
  .DP_title {
    @apply text-privacy;
  }

  .DP_button {
    @apply hover:bg-privacy border-privacy;
  }
}

.DP_cognition {
  .DP_title {
    @apply text-cognition;
  }

  .DP_button {
    @apply hover:bg-cognition border-cognition;
  }
}

svg {
  @apply w-5 h-5;
}
</style>
