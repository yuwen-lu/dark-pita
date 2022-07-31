<template>
  <div id="wrapper">
    <div class="status" v-show="visible">
      <p>Dark Pita is on...</p>
      <button @click="generateOverviewOverlay" class="button">
        hightlight
      </button>
    </div>

    <Popup class="popup" v-show="visible" :text="text" />

    <canvas resize id="main-canvas" style="display:none"></canvas>

    <div id="mask" class="mask" v-show="visible"></div>

    <div
      v-for="(val, index) in ids"
      :key="index"
      :id="'DP_' + val"
      class="boundingBox"
    ></div>
  </div>
</template>

<script>
import Popup from '@/contents/components/Popup.vue';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import Paper from 'paper';

export default {
  data() {
    return {
      ids: ['header', 'basic-usage'],
      boundingBoxList: [],
      visible: false,
      popUpX: 0,
      popUpY: 0,
      text: '',
      overlayPath: '',
      overlayWidth: document.body.clientWidth,
      overlayHeight: document.body.clientHeight,
      driver: new Driver({ allowClose: false })
    };
  },
  components: {
    Popup
  },
  computed: {},
  methods: {
    highlight() {
      this.driver.highlight('#header');
    },
    generateTouchableArea() {
      document.body.style.position = 'relative';
      for (let i = 0; i < this.ids.length; i++) {
        let elt = document.getElementById(this.ids[i]);
        let boundingBox = this.getboundingBox(elt);

        let id = boundingBox.id;
        let left = boundingBox.x + 'px';
        let top = boundingBox.y + 'px';
        let width = boundingBox.width + 'px';
        let height = boundingBox.height + 'px';
        let opacity = 1;
        this.generateSpotlightOverlay(id, left, top, width, height, opacity);
      }
    },
    getElementAbsPos(elt) {
      let i = elt.id;
      let t = elt.offsetTop;
      let l = elt.offsetLeft;
      while ((elt = elt.offsetParent)) {
        t += elt.offsetTop;
        l += elt.offsetLeft;
      }
      return { id: i, left: l, top: t };
    },
    getboundingBox(elt) {
      let i = elt.id;
      let w = elt.offsetWidth;
      let h = elt.offsetHeight;
      let pos = this.getElementAbsPos(elt);
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
      boundingBox.onclick = () => {
        console.log('boundingBox clicked');
      };
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log('Scrolling distance from top:', scrollTop);
    },
    generateOverviewOverlay() {
      console.log('generate overview overlay');

      this.refresh();
      console.log(this.boundingBoxList);
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
        let elt = document.getElementById(this.ids[i]);
        let boundingBox = this.getboundingBox(elt);
        this.boundingBoxList.push(boundingBox);
      }
    },
    refresh() {
      this.overlayWidth = document.body.clientWidth;
      this.overlayHeight = document.body.clientHeight;
      this.getboundingBoxList();
    }
  },
  mounted() {
    console.log('mounted');
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.generateOverviewOverlay);
    Paper.setup(document.getElementById('main-canvas'));
    this.getboundingBoxList();
  }
};
</script>

<style lang="scss" scoped>
.status {
  @apply fixed top-0 left-0 bg-dark px-6 py-3 w-auto z-extension;

  p {
    @apply m-0 font-menlo text-white text-xs;
  }
}
.button {
  @apply bg-blue-500 hover:bg-blue-700 font-menlo text-white text-xs py-2 px-4 rounded mt-4;
}
.popup {
  @apply fixed top-64 left-12 z-extension;
}
.mask {
  @apply absolute left-0 top-0 z-overlay;
}
.boundingBox {
  @apply absolute bg-transparent rounded border-2 border-transparent hover:border-blue-500 z-overlay;
}
</style>
