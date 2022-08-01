<template>
  <div class="DP_action">
    <div class="DP_action_section">
      <div class="DP_action_title">
        <h2>choose action</h2>
        <button @click="toggleAction">
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
            class="ml-2 w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" v-show="dropdown" class="DP_dropdown_list">
          <ul aria-labelledby="dropdownDefault">
            <li
              v-for="(val, index) in interventionList"
              :key="index"
              @click="alterIntervention(index)"
            >
              <a href="#">{{ val.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="DP_description">
        <p>{{ intervention.description }}</p>
      </div>
      <img :src="intervention.image" class="DP_action_demo" />
    </div>
    <button class="DP_button" @click="triggerIntervention">
      <p>Select</p>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    interventionList: {
      type: Array,
      default: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659258223727',
          component: 'none',
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
          component: 'detection',
          description:
            'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.'
        }
      ]
    }
  },
  data() {
    return {
      dropdown: false,
      intervention: this.interventionList[0]
    };
  },
  methods: {
    toggleAction() {
      this.$emit('toggleAction', 'toggle action');
    },
    alterIntervention(index) {
      this.intervention = this.interventionList[index];
      this.toggleDropdown();
    },
    triggerIntervention() {
      this.$emit('triggerIntervention', this.intervention.component);
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    }
  }
};
</script>
<style lang="scss" scoped>
.DP_action {
  @apply absolute w-full top-0 flex flex-col justify-between px-3 pt-5 pb-3 bg-background rounded-r transition-left ease-in-out duration-1000 delay-0;

  height: 500px;
  z-index: -1;

  .DP_action_section {
    @apply w-full flex flex-col gap-2 items-start;

    .DP_action_title {
      @apply flex flex-row justify-between items-center w-full;

      > h2 {
        @apply font-cabin font-medium text-base uppercase text-white;
      }

      svg {
        @apply w-5 h-5;
      }
    }

    .DP_action_demo {
      @apply w-full rounded;
    }
  }

  .DP_action_dropdown {
    @apply w-full;
  }
}

.DP_dropdown {
  @apply w-full bg-dark hover:bg-money p-2 border border-money focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded items-center flex flex-row justify-between capitalize;

  > p {
    @apply font-cabin font-normal text-sm text-white;
  }
}

.DP_dropdown_list {
  @apply absolute z-extension w-full bg-dark rounded divide-y divide-gray-100 shadow;

  width: 228px;

  ul {
    @apply py-1;

    a {
      @apply block py-2 px-4 hover:bg-background font-cabin font-normal text-sm text-white capitalize;
    }
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
