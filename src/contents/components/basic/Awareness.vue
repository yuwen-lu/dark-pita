<template>
  <div class="DP_body">
    <div class="DP_title">
      <img
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388"
      />
      <h1>{{ type }}</h1>
    </div>
    <div class="DP_subtitle">
      <h2 class="DP_introduction">loss-gain framing</h2>
      <div class="DP_description">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="DP_subtitle">
      <h2 class="DP_awareness">potential impact</h2>
      <div class="DP_description">
        <p>{{ awareness }}</p>
      </div>
    </div>
    <button class="DP_button" @click="toggleAction">
      <p>Take Action</p>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.34467 2.80601C9.24797 2.71851 9.12091 2.67225 8.99059 2.6771C8.86026 2.68196 8.737 2.73753 8.64707 2.83198C8.55714 2.92643 8.50768 3.05227 8.50922 3.18268C8.51077 3.31308 8.5632 3.43772 8.65533 3.53001L12.8227 7.50001H3C2.86739 7.50001 2.74021 7.55269 2.64645 7.64646C2.55268 7.74023 2.5 7.8674 2.5 8.00001C2.5 8.13262 2.55268 8.2598 2.64645 8.35356C2.74021 8.44733 2.86739 8.50001 3 8.50001H12.8227L8.65533 12.4693C8.55924 12.5608 8.50339 12.6866 8.50008 12.8192C8.49676 12.9518 8.54626 13.0802 8.63767 13.1763C8.72908 13.2724 8.85492 13.3283 8.98751 13.3316C9.1201 13.3349 9.24857 13.2854 9.34467 13.194L14.2913 8.48268C14.3996 8.37993 14.47 8.24371 14.4913 8.09601C14.5036 8.03212 14.5033 7.96648 14.4907 7.90268C14.4691 7.75544 14.3987 7.61972 14.2907 7.51735L9.34467 2.80601Z"
          fill="white"
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
    interventionList: {
      type: Array,
      default: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659258223727',
          component: '',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659258223727',
          component: 'hide',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'detection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659258223727',
          component: '',
          description:
            'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.'
        }
      ]
    }
  },
  methods: {
    toggleAction() {
      this.$emit('toggleAction', 'toggle action');
    }
  }
};
</script>
<style lang="scss" scoped>
.DP_body {
  @apply box-border flex flex-col justify-between items-start w-full px-3 py-3 gap-4 bg-background rounded-b;

  .DP_title {
    @apply flex flex-row items-center gap-2;

    img {
      @apply w-10 h-10;
    }

    h1 {
      @apply font-cabin font-bold text-2xl text-white pointer-events-none select-none capitalize;
    }
  }

  .DP_subtitle {
    @apply flex flex-col items-start gap-2 pointer-events-none select-none;

    > h2 {
      @apply font-cabin font-medium text-base uppercase;
    }
  }

  .DP_introduction {
    @apply text-money;
  }

  .DP_awareness {
    @apply text-white;
  }
}

.DP_button {
  @apply w-full flex flex-row items-center justify-center rounded bg-dark hover:bg-money py-2 border border-money gap-2;

  > p {
    @apply font-cabin font-normal text-sm text-white;
  }

  svg {
    @apply w-5 h-5;
  }
}

.DP_description {
  @apply box-border p-2 bg-dark rounded;

  > p {
    @apply font-cabin italic font-normal text-sm text-white;
  }
}
</style>
