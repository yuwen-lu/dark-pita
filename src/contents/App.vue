<template>
  <div id="wrapper">
    <div class="DP_header" v-show="isAlert">
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
      :key="popupX"
      @closePop="closePop"
    />

    <canvas resize id="main_canvas" style="display:none"></canvas>

    <div id="mask" class="DP_mask" v-show="isMask"></div>

    <div
      v-for="(value, index) in ids"
      :key="index"
      :id="'DP_' + value"
      class="DP_bounding_box"
      @click="togglePopup($event, value)"
      v-show="isMask"
    ></div>
  </div>
</template>

<script>
import Popup from '@/contents/components/Popup.vue';
import Paper from 'paper';
// import Driver from 'driver.js';
// import 'driver.js/dist/driver.min.css';

export default {
  data() {
    return {
      ids: ['header', 'basic-usage'],
      boundingBoxList: [],
      isAlert: true,
      isPop: false,
      isMask: false,
      popupX: 0,
      popupY: 0,
      text: '',
      overlayPath: '',
      overlayWidth: document.body.clientWidth,
      overlayHeight: document.body.clientHeight
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
      for (let i = 0; i < this.ids.length; i++) {
        let element = document.getElementById(this.ids[i]);
        let boundingBox = this.getboundingBox(element);

        let id = boundingBox.id;
        let left = boundingBox.x + 'px';
        let top = boundingBox.y + 'px';
        let width = boundingBox.width + 'px';
        let height = boundingBox.height + 'px';
        let opacity = 1;
        this.generateSpotlightOverlay(id, left, top, width, height, opacity);
      }
    },
    getElementAbsPos(element) {
      let i = element.id;
      let t = element.offsetTop;
      let l = element.offsetLeft;
      while ((element = element.offsetParent)) {
        t += element.offsetTop;
        l += element.offsetLeft;
      }
      return { id: i, left: l, top: t };
    },
    getboundingBox(element) {
      let i = element.id;
      let w = element.offsetWidth;
      let h = element.offsetHeight;
      let pos = this.getElementAbsPos(element);
      let offset = 10;
      return {
        id: i,
        x: pos.left - offset,
        y: pos.top - offset,
        width: w + 2 * offset,
        height: h + 2 * offset
      };
    },
    generateSpotlightOverlay(id, left, top, width, height, opacity = 0.5) {
      let boundingBox = document.getElementById('DP_' + id);
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
      // console.log(this.boundingBoxList);
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
    getboundingBoxList() {
      this.boundingBoxList = [];
      for (let i = 0; i < this.ids.length; i++) {
        let element = document.getElementById(this.ids[i]);
        let boundingBox = this.getboundingBox(element);
        this.boundingBoxList.push(boundingBox);
      }
    },
    refresh() {
      this.overlayWidth = document.body.clientWidth;
      this.overlayHeight = document.body.clientHeight;
      this.getboundingBoxList();
    },
    togglePopup(event, value) {
      console.log(value);
      this.isPop = false;

      let rect = event.target.getBoundingClientRect();
      this.popupX = rect.left - 20;
      this.popupY = rect.top - 20;
      this.isPop = true;
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
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.generateOverviewOverlay);
    Paper.setup(document.getElementById('main_canvas'));
    this.getboundingBoxList();
  }
};
</script>

<style lang="scss" scoped>
.DP_header {
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
  @apply absolute left-0 top-0 z-overlay;
}

.DP_bounding_box {
  @apply absolute bg-transparent rounded border-2 border-transparent hover:border-blue-500 z-overlay;
}
</style>
