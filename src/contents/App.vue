<template>
  <div id="wrapper">
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

    <Popup
      class="DP_popup"
      v-show="isPop"
      :left="popupX"
      :top="popupY"
      :key="timer"
      :target="currentTarget"
      :targetId="currentTargetId"
      @closePop="closePop"
    />

    <canvas resize id="main_canvas" style="display:none"></canvas>

    <div id="mask" class="DP_mask" v-show="isMask"></div>

    <div
      v-for="(value, index) in targets"
      :key="index"
      :id="'DP_i_' + value"
      class="DP_bounding_box"
      @click="togglePopup($event, value, index)"
      v-show="isMask"
    ></div>
  </div>
</template>

<script>
import INDEX from '@/contents/index.js';
import Popup from '@/contents/components/basic/Popup.vue';
import Paper from 'paper';
// import Driver from 'driver.js';
// import 'driver.js/dist/driver.min.css';

export default {
  data() {
    return {
      timer: null,
      currentTab: null,
      info: [],
      label: 'id',
      targets: [],
      currentTarget: {},
      currentTargetId: 0,
      boundingBoxList: [],
      isAlert: true,
      isPop: false,
      isMask: false,
      popupX: 0,
      popupY: 0,
      text: '',
      overlayPath: '',
      overlayWidth: Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ),
      overlayHeight: Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      )
      // driver: new Driver({ allowClose: false })
    };
  },
  components: {
    Popup
  },
  computed: {},
  methods: {
    // highlight() {
    //   this.driver.highlight('#header');
    // },
    toggleMask() {
      this.refresh();
      if (this.isMask === false) {
        this.isMask = true;
        this.generateOverviewOverlay();
      } else {
        this.isMask = false;
        let mask = document.getElementById('mask');
        mask.innerHTML = '';
      }
    },
    generateTouchableArea() {
      document.body.style.position = 'relative';
      for (let i = 0; i < this.boundingBoxList.length; i++) {
        let id = this.boundingBoxList[i].id;
        let left = this.boundingBoxList[i].x + 'px';
        let top = this.boundingBoxList[i].y + 'px';
        let width = this.boundingBoxList[i].width + 'px';
        let height = this.boundingBoxList[i].height + 'px';
        let opacity = 1;
        this.generateSpotlightOverlay(id, left, top, width, height, opacity);
      }
    },
    generateSpotlightOverlay(id, left, top, width, height, opacity = 0.5) {
      let boundingBox = document.getElementById('DP_i_' + id);
      boundingBox.style.left = left;
      boundingBox.style.top = top;
      boundingBox.style.width = width;
      boundingBox.style.height = height;
      boundingBox.style.opacity = opacity;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log('scrolling distance from top:', scrollTop);
    },
    generateOverviewOverlay() {
      console.log('generate overlay');

      this.refresh();
      let mask = document.getElementById('mask');
      mask.innerHTML = '';

      const origin = new Paper.Point(0, 0);
      const rect = new Paper.Path.Rectangle({
        point: origin,
        size: [this.overlayWidth, this.overlayHeight],
        fillColor: 'black',
        opacity: 0.6
      });

      let overlayPath = rect;
      for (let i = 0; i < this.boundingBoxList.length; i++) {
        const boundingBox = new Paper.Path.Rectangle({
          point: [this.boundingBoxList[i].x, this.boundingBoxList[i].y],
          size: [this.boundingBoxList[i].width, this.boundingBoxList[i].height],
          fillColor: 'black',
          radius: 4
        });

        overlayPath = overlayPath.subtract(boundingBox);
      }

      this.overlayPath = overlayPath.exportSVG();
      Paper.project.clear();

      const SVG_NS = 'http://www.w3.org/2000/svg';
      let svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('width', this.overlayWidth);
      svg.setAttribute('height', this.overlayHeight);
      svg.appendChild(this.overlayPath);
      mask.appendChild(svg);

      this.generateTouchableArea();
      // console.log(this.overlayPath);
    },
    getBoundingBoxList() {
      this.boundingBoxList = [];
      for (let i = 0; i < this.targets.length; i++) {
        let element;
        if (this.label === 'id') {
          element = document.getElementById(this.targets[i]);
        } else if (this.label === 'aria-label') {
          element = document.querySelector(
            '[aria-label="' + this.targets[i] + '"]'
          );
        }

        let boundingBox = element.getBoundingClientRect();
        boundingBox.id = this.targets[i];
        boundingBox.x = boundingBox.x - 10;
        boundingBox.y = boundingBox.y - 10;
        boundingBox.width = boundingBox.width + 20;
        boundingBox.height = boundingBox.height + 20;
        this.boundingBoxList.push(boundingBox);
      }
      // console.log(this.boundingBoxList);
    },
    refresh() {
      this.overlayWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      this.overlayHeight = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      this.getBoundingBoxList();
    },
    togglePopup(event, value, index) {
      console.log(value);
      this.isPop = false;
      this.currentTarget = this.info[index];
      this.currentTargetId = index;

      let target = event.target.getBoundingClientRect();
      if (target.x > this.overlayWidth / 2) {
        this.popupX = target.x - 100;
      } else {
        this.popupX = target.x + 100;
      }
      if (target.y > this.overlayHeight / 2) {
        this.popupY = target.y - 200;
      } else {
        this.popupY = target.y + 200;
      }

      this.isPop = true;
      this.timer = new Date().getTime();
    },
    closeAlert() {
      this.isAlert = false;
    },
    closePop(value) {
      this.isPop = false;
      this.isMask = false;
      let mask = document.getElementById('mask');
      mask.innerHTML = '';
    }
  },
  mounted() {
    console.log('popup mounted');
    window.addEventListener('scroll', this.generateOverviewOverlay);
    window.addEventListener('resize', this.generateOverviewOverlay);
    Paper.setup(document.getElementById('main_canvas'));
    chrome.runtime.sendMessage({ type: 'POPUP_INIT' }, async (tab) => {
      this.currentTab = await tab;
      console.log(this.currentTab.url);

      let url = this.currentTab.url;
      if (url.search(/tailwindcss.com/) !== -1) {
        this.label = 'id';
        this.info = INDEX.tailwind;
      } else if (url.search(/twitter.com/) !== -1) {
        this.label = 'aria-label';
        this.info = INDEX.twitter;
      }

      for (let target of this.info) {
        this.targets.push(target.id);
      }

      this.currentTarget = this.info[0];
      this.currentTargetId = 0;
    });
  }
};
</script>

<style lang="scss" scoped>
.DP_heading {
  @apply fixed w-full top-0 left-0 z-extension;

  svg {
    @apply absolute top-4 right-4;
  }
}

.DP_alert {
  @apply bg-dark w-full py-3 flex flex-row justify-center items-center gap-4 border-b border-gray-400;

  p {
    @apply font-cabin font-medium text-base text-white;

    span {
      @apply font-semibold uppercase;
    }
  }

  button {
    @apply bg-transparent w-24 hover:bg-white font-cabin font-normal text-xs text-white hover:text-dark px-6 py-2 rounded border;
  }
}

.DP_popup {
  @apply fixed z-extension;
}

.DP_mask {
  @apply fixed left-0 top-0 z-overlay;
}

.DP_bounding_box {
  @apply fixed bg-transparent rounded border-2 border-transparent hover:border-blue-500 z-overlay;
}
</style>
