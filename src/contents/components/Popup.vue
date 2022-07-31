<template>
  <div class="DP_wrapper" :style="position" v-show="isPop">
    <header
      class="DP_header"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      @mouseleave="mouseup"
    >
      <p>DARK PITA</p>
      <button @click="close">
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
    </header>
    <div class="DP_body">
      <div class="DP_title">
        <img
          src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388"
        />
        <h1>Financial Loss</h1>
      </div>
      <div class="DP_subtitle">
        <h2 class="DP_introduction">loss-gain framing</h2>
        <div class="DP_description">
          <p>
            A selective disclosure of information that positively frames the
            consequences of an action, while omitting the entailed risks.
          </p>
        </div>
      </div>
      <div class="DP_subtitle">
        <h2 class="DP_awareness">potential impact</h2>
        <div class="DP_description">
          <p>
            If I am manipulated by this item, I will have a high chance of
            purchasing this item. If I purchase this item, I would not break
            even.
          </p>
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
    <div class="DP_action" :style="actionPosition">
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
            <p>{{ intervention }}</p>
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
                <a href="#">{{ val }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="DP_description">
          <p>
            If I am manipulated by this item, I will have a high chance of
            purchasing this item. If I purchase this item, I would not break
            even.
          </p>
        </div>
        <img
          src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/demo.png?v=1659258223727"
          class="DP_action_demo"
        />
      </div>
      <button class="DP_button">
        <p>Select</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    text: {
      type: String,
      default: ''
    },
    left: {
      type: Number,
      default: 150
    },
    top: {
      type: Number,
      default: 100
    },
    interventionList: {
      type: Array,
      default: ['hide / disable', 'detection', 'bright pattern']
    }
  },
  data() {
    return {
      x: this.left,
      y: this.top,
      leftOffset: 0, // 鼠标距离移动窗口左侧偏移量
      topOffset: 0, // 鼠标距离移动窗口顶部偏移量
      isMove: false, // 是否移动标识
      dropdown: false,
      actionX: 0,
      actionY: 37,
      actionHeight: 400,
      isPop: true,
      intervention: this.interventionList[0]
    };
  },
  components: {},
  computed: {
    // top与left加上px
    position() {
      return `top:${this.y}px; left:${this.x}px;`;
    },
    actionPosition() {
      return `top:${this.actionY}px; left:${this.actionX}px; height:${this.actionHeight}px`;
    }
  },
  methods: {
    mousedown(event) {
      //鼠标按下事件
      console.log('鼠标按下事件');
      this.leftOffset = event.offsetX;
      this.topOffset = event.offsetY;
      this.isMove = true;
    },
    // 鼠标移动
    mousemove(event) {
      if (!this.isMove) {
        return;
      }
      let leftx = event.clientX - this.leftOffset;
      let topy = event.clientY - this.topOffset;
      this.x = leftx;
      this.y = topy;
    },
    // 鼠标抬起
    mouseup() {
      this.isMove = false;
    },
    alterIntervention(index) {
      this.intervention = this.interventionList[index];
      this.toggleDropdown();
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    toggleAction() {
      if (this.actionX === 0) {
        this.actionX = 260;
      } else if (this.actionX === 260) {
        this.actionX = 0;
      }
      let elt = document.getElementsByClassName('DP_body')[0];
      elt.style.borderBottomRightRadius = '0px';
      this.actionHeight = elt.clientHeight;
    },
    close() {
      this.isPop = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.DP_wrapper {
  @apply flex flex-col justify-center items-center drop-shadow-lg;

  width: 260px;
}

.DP_header {
  @apply flex flex-row justify-between items-center w-full px-3 py-2 bg-dark opacity-100 border-b border-solid border-money rounded-t;

  p {
    @apply font-cabin font-bold text-xs text-white pointer-events-none select-none;
  }

  svg {
    @apply w-5 h-5;
  }
}
.DP_body {
  @apply box-border flex flex-col justify-between items-start w-full px-3 py-3 gap-4 bg-background rounded-b;

  .DP_title {
    @apply flex flex-row items-center gap-2;

    img {
      @apply w-10 h-10;
    }

    h1 {
      @apply font-cabin font-bold text-2xl text-white;
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
</style>
