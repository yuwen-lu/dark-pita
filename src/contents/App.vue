<template>
  <div id="DP_wrapper" :key="reload">
    <amazon_buy_now_hide
      v-if="targetNames.amazon_buy_now"
      @update="generateOverviewOverlay"
    />
    <amazon_buy_now_fairness
      v-if="targetNames.amazon_buy_now"
      @update="generateOverviewOverlay"
    />
    <amazon_buy_now_friction
      v-if="targetNames.amazon_buy_now"
      @update="generateOverviewOverlay"
    />
    <amazon_disguised_ads_hide
      v-if="targetNames.amazon_disguised_ads"
      @update="generateOverviewOverlay"
    />
    <amazon_disguised_ads_friction
      v-if="targetNames.amazon_disguised_ads"
      @update="generateOverviewOverlay"
    />
    <amazon_disguised_ads_disclosure
      v-if="targetNames.amazon_disguised_ads"
      @update="generateOverviewOverlay"
    />
    <amazon_disguised_ads_counterfact
      v-if="targetNames.amazon_disguised_ads"
      @update="generateOverviewOverlay"
    />
    <amazon_discount_price_hide
      v-if="targetNames.amazon_discount_price"
      @update="generateOverviewOverlay"
    />
    <amazon_discount_price_disclosure
      v-if="targetNames.amazon_discount_price"
      @update="generateOverviewOverlay"
    />
    <amazon_discount_price_reflection
      v-if="targetNames.amazon_discount_price"
      @update="generateOverviewOverlay"
    />
    <amazon_discount_price_action
      v-if="targetNames.amazon_discount_price"
      @update="generateOverviewOverlay"
    />

    // facebook
    <facebook_suggsted_hide
      v-if="targetNames.facebook_suggsted"
      @update="generateOverviewOverlay"
    />

    <Alert
      v-if="isAlert"
      :targetNames="targetNames"
      @toggleMask="toggleMask"
      @closeAlert="closeAlert"
    />

    <Popup
      class="DP_popup"
      v-if="isPop"
      :left="popupX"
      :top="popupY"
      :key="timer"
      :target="currentTarget"
      :savedSettings="savedSettings"
      :targetNames="targetNames"
      @closePop="closePop"
    />

    <canvas resize id="DP_canvas" style="display:none"></canvas>

    <div id="DP_mask" class="DP_mask" v-show="isMask"></div>

    <div
      v-for="(value, index) in targetIdentifiers"
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
import Alert from '@/contents/components/basic/Alert.vue';
import Popup from '@/contents/components/basic/Popup.vue';
import Paper from 'paper';

// Action components
import template from '@/contents/components/tailwind/template.vue';
import amazon_buy_now_hide from '@/contents/components/amazon/buy_now/amazon_buy_now_hide.vue';
import amazon_buy_now_fairness from '@/contents/components/amazon/buy_now/amazon_buy_now_fairness.vue';
import amazon_buy_now_friction from '@/contents/components/amazon/buy_now/amazon_buy_now_friction.vue';
import amazon_disguised_ads_hide from '@/contents/components/amazon/disguised_ads/amazon_disguised_ads_hide.vue';
import amazon_disguised_ads_friction from '@/contents/components/amazon/disguised_ads/amazon_disguised_ads_friction.vue';
import amazon_disguised_ads_disclosure from '@/contents/components/amazon/disguised_ads/amazon_disguised_ads_disclosure.vue';
import amazon_disguised_ads_counterfact from '@/contents/components/amazon/disguised_ads/amazon_disguised_ads_counterfact.vue';
import amazon_discount_price_hide from '@/contents/components/amazon/discount_price/amazon_discount_price_hide.vue';
import amazon_discount_price_disclosure from '@/contents/components/amazon/discount_price/amazon_discount_price_disclosure.vue';
import amazon_discount_price_reflection from '@/contents/components/amazon/discount_price/amazon_discount_price_reflection.vue';
import amazon_discount_price_action from '@/contents/components/amazon/discount_price/amazon_discount_price_action.vue';

import facebook_suggested_hide from '@/contents/components/facebook/suggested/facebook_suggested_hide.vue';

export default {
  data() {
    return {
      reload: 0,
      timer: null,
      currentTab: null,
      info: [],
      website: '',
      targetIdentifiers: null,
      currentTarget: {},
      boundingBoxList: [],
      isPop: false,
      isMask: false,
      isAlert: false,
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
      ),
      mask: null,
      targetNames: {
        amazon_buy_now: false,
        amazon_disguised_ads: false,
        amazon_discount_price: false
      },
      savedSettings: {}
    };
  },
  components: {
    Alert,
    Popup,
    template,
    amazon_buy_now_hide,
    amazon_buy_now_fairness,
    amazon_buy_now_friction,
    amazon_disguised_ads_hide,
    amazon_disguised_ads_disclosure,    
    amazon_disguised_ads_friction,
    amazon_disguised_ads_disclosure,
    amazon_disguised_ads_counterfact,
    amazon_discount_price_hide,
    amazon_discount_price_disclosure,
    amazon_discount_price_reflection,
    amazon_discount_price_action,

    facebook_suggested_hide
  },
  computed: {},
  watch: {
    reload(newVal, oldVal) {
      console.log('app reload');
      this.initialize();
    }
  },
  methods: {
    // highlight() {
    //   this.driver.highlight('#header');
    // },
    initialize() {
      this.targetIdentifiers = null;
      this.isAlert = false;
      this.mask = document.getElementById('DP_mask');

      chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
        this.currentTab = await tab;
        // console.log(this.currentTab);

        if (this.currentTab !== null) {
          let url = this.currentTab.url;
          console.log('current site:', url);

          // Define the identifier
          if (url.search(/tailwindcss.com/) !== -1) {
            this.website = 'tailwind';
            this.info = INDEX.tailwind;
          } else if (url.search(/twitter.com/) !== -1) {
            this.website = 'twitter';
            this.info = INDEX.twitter;
          } else if (url.search(/amazon.com/) !== -1) {
            this.website = 'amazon';
            this.info = INDEX.amazon;
          } else if (url.search(/facebook.com/) !== -1) {
            this.website = 'facebook';
            this.info = INDEX.facebook;
          }

          // Collect dark patterns
          for (let target of this.info) {
            let re = new RegExp(target.url);
            if (url.search(re) !== -1) {
              if (this.targetIdentifiers === null) {
                this.targetIdentifiers = [];
              }
              this.targetIdentifiers.push(target.identifier);
              this.targetNames[target.name] = true;
            }
          }

          console.log('dark patterns on this site:', this.targetNames);

          // Initialize
          if (this.targetIdentifiers !== null) {
            this.currentTarget = this.info[0];
            this.isAlert = true;
          }
        }
      });
    },
    toggleMask() {
      this.refresh();
      if (this.isMask === false) {
        this.isMask = true;
        this.generateOverviewOverlay();
      } else {
        this.isMask = false;
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
      if (boundingBox !== undefined) {
        boundingBox.style.left = left;
        boundingBox.style.top = top;
        boundingBox.style.width = width;
        boundingBox.style.height = height;
        boundingBox.style.opacity = opacity;
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log('scrolling distance from top:', scrollTop);
    },
    generateOverviewOverlay() {
      if (this.isMask) {
        console.log('generate overlay');

        this.refresh();

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
            size: [
              this.boundingBoxList[i].width,
              this.boundingBoxList[i].height
            ],
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
        this.mask.appendChild(svg);

        this.generateTouchableArea();
        // console.log(this.overlayPath);
      }
    },
    getBoundingBoxList() {
      this.boundingBoxList = [];
      for (let i = 0; i < this.targetIdentifiers.length; i++) {
        let element;

        // Set the selector
        if (this.website === 'tailwind') {
          element = document.getElementById(this.targetIdentifiers[i]);
        } else if (this.website === 'twitter') {
          element = document.querySelector(
            '[aria-label="' + this.targetIdentifiers[i] + '"]'
          );
        } else if (this.website === 'amazon') {
          element = document.querySelectorAll(
            '[id^=' + this.targetIdentifiers[i] + ']'
          )[0];
        }

        // facebook
        else if (this.website === 'facebook') {
          if (this.targetIdentifiers[i] == 'People You May Know') {
            var retrievedHtmls = document.getElementsByTagName("h3");
            console.log("retrieved htmls: ", retrievedHtmls);
            for (var j = 0; j < retrievedHtmls.length; j++) {
              console.log("currently checking html: ", retrievedHtmls[j]);
              if (retrievedHtmls[j].innerHTML.indexOf(this.targetIdentifiers[i]) != -1) {
                // very ugly way, but the whole container is the 4th parent of the h3 tag
                element = retrievedHtmls[j].parentElement.parentElement.parentElement.parentElement;
                console.log("matched element: ", element);
              } else {
                console.log("no match");
              }
            }
          }
        }

        if (element !== undefined) {
          let boundingBox = element.getBoundingClientRect();
          boundingBox.id = this.targetIdentifiers[i];
          boundingBox.x = boundingBox.x - 10;
          boundingBox.y = boundingBox.y - 10;
          boundingBox.width = boundingBox.width + 20;
          boundingBox.height = boundingBox.height + 20;
          this.boundingBoxList.push(boundingBox);
        } else {
          console.log('element not found');
        }
        
      }
      // console.log(this.boundingBoxList);
    },
    refresh() {
      if (this.isMask) {
        this.mask.innerHTML = '';
      }

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
      for (let i = 0; i < this.info.length; i++) {
        if (this.info[i].identifier === value) {
          this.currentTarget = this.info[i];
        }
      }

      let target = event.target.getBoundingClientRect();
      if (target.x > this.overlayWidth / 2) {
        this.popupX = target.x - 300;
      } else {
        this.popupX = target.x + 400;
      }
      if (target.y > this.overlayHeight / 2) {
        this.popupY = target.y - 400;
      } else {
        this.popupY = target.y + 100;
      }

      this.isPop = true;
      this.timer = new Date().getTime();
    },
    closeAlert() {
      this.isAlert = false;
    },
    closePop(value) {
      this.refresh();
      this.isPop = false;
      this.emitter.emit('alert_button_show', 'show');
    }
  },
  mounted() {
    console.log('app mounted');
    window.addEventListener('scroll', this.generateOverviewOverlay);
    window.addEventListener('resize', this.generateOverviewOverlay);
    Paper.setup(document.getElementById('DP_canvas'));

    this.initialize();

    let that = this;
    chrome.storage.sync.get('savedSettings', function(settings) {
      if (JSON.stringify(settings) !== '{}') {
        console.log('retrieve settings');
        console.log(settings);
        that.savedSettings = settings.savedSettings;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
div {
  p {
    @apply p-0 m-0;
  }
}

.DP_popup {
  @apply fixed z-extension;
}

.DP_mask {
  @apply fixed left-0 top-0 z-overlay;
}

.DP_bounding_box {
  @apply fixed bg-transparent rounded-[4px] border-[4px] border-transparent hover:border-blue-500 z-overlay;
}
</style>
