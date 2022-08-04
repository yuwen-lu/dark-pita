<template>
  <div class="DP_action" id="DP_action">
    <div class="DP_action_section">
      <div class="DP_action_title">
        <h2>choose action</h2>
        <!-- <button @click="toggleAction">
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
        </button> -->
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
              v-for="(val, index) in action"
              :key="index"
              @click="alterIntervention(index)"
            >
              <a href="#">{{ val.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="DP_section">
        <div class="DP_description DP_no-scrollbar">
          <p>{{ intervention.description }}</p>
        </div>
        <img :src="intervention.image" class="DP_action_demo" />
      </div>
    </div>
    <button class="DP_button" @click="triggerIntervention">
      <p>Select</p>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    action: {
      type: Array,
      default: [
        {
          name: 'none',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'none',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'hide / disable',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'hide',
          description:
            'If I am manipulated by this item, I will have a high chance of purchasing this item. If I purchase this item, I would not break even.'
        },
        {
          name: 'detection',
          image:
            'https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659593917375',
          component: 'detection',
          description:
            'A selective disclosure of information that positively frames the consequences of an action, while omitting the entailed risks.'
        }
      ]
    },
    color: {
      type: String,
      default: 'money'
    }
  },
  data() {
    return {
      dropdown: false,
      intervention: this.action[0],
      interventionId: 0
    };
  },
  methods: {
    toggleAction() {
      this.$emit('toggleAction', 'toggle action');
    },
    alterIntervention(index) {
      this.intervention = this.action[index];
      this.interventionId = index;
      this.toggleDropdown();
    },
    triggerIntervention() {
      // this.$emit('triggerIntervention', this.intervention.component);
      // this.$emit('triggerIntervention', this.interventionId);
      // console.log(this.intervention.name);
      if (this.intervention.name === 'none') {
        this.$emit('triggerIntervention', 'none');
      } else {
        this.$emit('triggerIntervention', 'test');
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    }
  },
  mounted() {
    let element = document.getElementById('DP_action');
    element.classList.remove('DP_money');
    element.classList.remove('DP_privacy');
    element.classList.remove('DP_cognition');
    element.classList.add('DP_' + this.color);
    // console.log(this.color);
  }
};
</script>
<style lang="scss" scoped>
.DP_action {
  @apply absolute w-full top-0 flex flex-col justify-between gap-[16px] px-[12px] pt-[20px] pb-[12px] bg-background rounded-r-[4px] transition-left ease-in-out duration-1000 delay-0;

  z-index: -1;
  &:hover {
    z-index: 999999;
  }

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
  @apply absolute z-extension w-[237.5px] bg-dark rounded-[4px] divide-y divide-gray-100 shadow;

  ul {
    @apply py-[4px];

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
  @apply box-border w-full h-[96px] p-[8px] bg-dark rounded-[4px] overflow-scroll overscroll-none flex items-center;

  > p {
    @apply font-cabin italic font-normal text-sm text-white;
  }
}

.DP_action_demo {
  @apply w-full rounded-[4px] transition ease-in-out delay-150 hover:-translate-y-1 z-infinite;

  &:hover {
    transform: scale(3);
  }
}

.DP_section {
  @apply flex flex-col gap-[10px] mt-[2px];
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
  .DP_dropdown {
    @apply hover:bg-money border-money focus:ring-yellow-300;
  }

  .DP_button {
    @apply hover:bg-money border-money;
  }
}

.DP_privacy {
  .DP_dropdown {
    @apply hover:bg-privacy border-privacy focus:ring-green-300;
  }

  .DP_button {
    @apply hover:bg-privacy border-privacy;
  }
}

.DP_cognition {
  .DP_dropdown {
    @apply hover:bg-cognition border-cognition focus:ring-blue-300;
  }

  .DP_button {
    @apply hover:bg-cognition border-cognition;
  }
}
</style>
