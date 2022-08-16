<template>
  <div id="DP_wrapper" :key="reload">
<<<<<<< HEAD

    <amazon_buy_now_hide v-if="targetNames.amazon_buy_now" @update="generateOverviewOverlay" />
    <amazon_buy_now_fairness v-if="targetNames.amazon_buy_now" @update="generateOverviewOverlay" />
    <amazon_buy_now_friction v-if="targetNames.amazon_buy_now" @update="generateOverviewOverlay" />
    <amazon_disguised_ads_hide v-if="targetNames.amazon_disguised_ads" @update="generateOverviewOverlay" />
    <amazon_disguised_ads_friction v-if="targetNames.amazon_disguised_ads" @update="generateOverviewOverlay" />
    <amazon_disguised_ads_disclosure v-if="targetNames.amazon_disguised_ads" @update="generateOverviewOverlay" />
    <amazon_disguised_ads_counterfact v-if="targetNames.amazon_disguised_ads" @update="generateOverviewOverlay" />
    <amazon_discount_price_hide v-if="targetNames.amazon_discount_price" @update="generateOverviewOverlay" />
    <amazon_discount_price_disclosure v-if="targetNames.amazon_discount_price" @update="generateOverviewOverlay" />
    <amazon_discount_price_reflection v-if="targetNames.amazon_discount_price" @update="generateOverviewOverlay" />
    <amazon_discount_price_action v-if="targetNames.amazon_discount_price" @update="generateOverviewOverlay" />
    <amazon_home_card_focus v-if="targetNames.amazon_home_card" @update="generateOverviewOverlay" />
    <amazon_home_card_reflection v-if="targetNames.amazon_home_card" @update="generateOverviewOverlay" />
    <youtube_recommended_video_focus v-if="targetNames.youtube_recommended_video" @update="generateOverviewOverlay" />
    <youtube_recommended_video_preview v-if="targetNames.youtube_recommended_video" @update="generateOverviewOverlay" />
    <youtube_recommended_video_reflection v-if="targetNames.youtube_recommended_video"
      @update="generateOverviewOverlay" />
    <youtube_video_dislike_fairness v-if="targetNames.youtube_video_dislike" @update="generateOverviewOverlay" />
    <youtube_sidebar_video_focus v-if="targetNames.youtube_sidebar_video" @update="generateOverviewOverlay" />
    <youtube_sidebar_video_preview v-if="targetNames.youtube_sidebar_video" @update="generateOverviewOverlay" />
    <youtube_sidebar_video_reflection v-if="targetNames.youtube_sidebar_video" @update="generateOverviewOverlay" />

    // facebook
    <facebook_suggested_hide v-if="targetNames.facebook_suggested" @update="generateOverviewOverlay" />
    <facebook_reels_hide v-if="targetNames.facebook_reels" @update="generateOverviewOverlay" />
    <facebook_sponsored_hide v-if="targetNames.facebook_sponsored" @update="generateOverviewOverlay" />
    <facebook_suggested_for_you_hide v-if="targetNames.facebook_suggested_for_you" @update="generateOverviewOverlay" />
    <facebook_suggested_for_you_highlight v-if="targetNames.facebook_suggested_for_you"
      @update="generateOverviewOverlay" />


    <Alert :targetNames="targetNames" @toggleMask="toggleMask" @closeAlert="closeAlert" v-show="isAlert" />

    <Popup class="DP_popup" v-if="isPop" :left="popupX" :top="popupY" :key="timer" :target="currentTarget"
      :savedSettings="savedSettings" :targetNames="targetNames" @closeAll="closeAll" @closePop="closePop" />
=======
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
    <amazon_home_card_focus
      v-if="targetNames.amazon_home_card"
      @update="generateOverviewOverlay"
    />
    <amazon_home_card_reflection
      v-if="targetNames.amazon_home_card"
      @update="generateOverviewOverlay"
    />
    <youtube_recommended_video_focus
      v-if="targetNames.youtube_recommended_video"
      @update="generateOverviewOverlay"
    />
    <youtube_recommended_video_preview
      v-if="targetNames.youtube_recommended_video"
      @update="generateOverviewOverlay"
    />
    <youtube_recommended_video_reflection
      v-if="targetNames.youtube_recommended_video"
      @update="generateOverviewOverlay"
    />
    <youtube_video_dislike_fairness
      v-if="targetNames.youtube_video_dislike"
      @update="generateOverviewOverlay"
    />
    <youtube_sidebar_video_focus
      v-if="targetNames.youtube_sidebar_video"
      @update="generateOverviewOverlay"
    />
    <youtube_sidebar_video_preview
      v-if="targetNames.youtube_sidebar_video"
      @update="generateOverviewOverlay"
    />
    <youtube_sidebar_video_reflection
      v-if="targetNames.youtube_sidebar_video"
      @update="generateOverviewOverlay"
    />

    // facebook
    <facebook_suggested_hide
      v-if="targetNames.facebook_suggested"
      @update="generateOverviewOverlay"
    />
    <facebook_reels_hide
      v-if="targetNames.facebook_reels"
      @update="generateOverviewOverlay"
    />
    <facebook_sponsored_hide
      v-if="targetNames.facebook_sponsored"
      @update="generateOverviewOverlay"
    />
    <facebook_suggested_for_you_hide
      v-if="targetNames.facebook_suggested_for_you"
      @update="generateOverviewOverlay"
    />
    <facebook_suggested_for_you_highlight
      v-if="targetNames.facebook_suggested_for_you"
      @update="generateOverviewOverlay"
    />

    <Alert
      :targetNames="targetNames"
      @toggleMask="toggleMask"
      @closeAlert="closeAlert"
      v-if="isAlert"
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
      @closeAll="closeAll"
      @closePop="closePop"
    />
>>>>>>> a7d5667f761cfbb46ac5cddc2679b7c7ecb5cc61

    <canvas resize id="DP_canvas" style="display:none"></canvas>

    <div id="DP_mask" class="DP_mask" v-show="isMask"></div>

    <div v-for="(value, index) in targetIdentifiers" :key="index" :id="'DP_i_' + value" class="DP_bounding_box"
      @click="togglePopup($event, value, index)" v-show="isMask"></div>
    <div id="DP_console" class="DP_console" v-show="isConsole">
<<<<<<< HEAD
      <div class="mb-4 w-full rounded-lg border bg-gray-700 border-gray-600">
        <div class="py-2 px-4 bg-gray-800 rounded-b-lg">
          <label for="editor" class="sr-only">Publish post</label>
          <textarea id="editor" rows="8"
            class="block px-0 w-full text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
            placeholder="Write an article..." required="" v-model="diary"></textarea>
        </div>
      </div>
=======
      <textarea
        id="message"
        rows="4"
        class="DP_text_area"
        placeholder="Your message..."
        v-model="diary"
      ></textarea>
>>>>>>> a7d5667f761cfbb46ac5cddc2679b7c7ecb5cc61
      <button @click="sendDiary">
        Screenshot & Send
      </button>
      <button @click="openAlert">
        Open Banner
      </button>
      <p v-show="notSupport">This site is not supported by Dark Pita</p>
    </div>
  </div>
</template>

<script>
import INDEX from '@/contents/index.js';
import Alert from '@/contents/components/basic/Alert.vue';
import Popup from '@/contents/components/basic/Popup.vue';
import Paper from 'paper';
import { incrementTime } from '@/contents/components/youtube/recommended_video/time_tracker/tracker';

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
import amazon_home_card_focus from '@/contents/components/amazon/home_card/amazon_home_card_focus.vue';
import amazon_home_card_reflection from '@/contents/components/amazon/home_card/amazon_home_card_reflection.vue';
import youtube_recommended_video_focus from '@/contents/components/youtube/recommended_video/youtube_recommended_video_focus.vue';
import youtube_recommended_video_preview from '@/contents/components/youtube/recommended_video/youtube_recommended_video_preview.vue';
import youtube_recommended_video_reflection from '@/contents/components/youtube/recommended_video/youtube_recommended_video_reflection.vue';
import youtube_video_dislike_fairness from '@/contents/components/youtube/video_dislike/youtube_video_dislike_fairness.vue';
import youtube_sidebar_video_focus from '@/contents/components/youtube/sidebar_video/youtube_sidebar_video_focus.vue';
import youtube_sidebar_video_preview from '@/contents/components/youtube/sidebar_video/youtube_sidebar_video_preview.vue';
import youtube_sidebar_video_reflection from '@/contents/components/youtube/sidebar_video/youtube_sidebar_video_reflection.vue';

import facebook_suggested_hide from '@/contents/components/facebook/people_suggested/facebook_suggested_hide.vue';
import facebook_reels_hide from '@/contents/components/facebook/reels/facebook_reels_hide.vue';
import facebook_sponsored_hide from './components/facebook/sponsored/facebook_sponsored_hide.vue';
import facebook_suggested_for_you_hide from './components/facebook/suggested_for_you/facebook_suggested_for_you_hide.vue';
import facebook_suggested_for_you_highlight from './components/facebook/suggested_for_you/facebook_suggested_for_you_highlight.vue';

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
        amazon_discount_price: false,
        amazon_home_card: false,

        facebook_suggested: false,
        facebook_reels: false,
        facebook_sponsored: false,
        facebook_suggested_for_you: false,

        youtube_recommended_video: false,
        youtube_video_dislike: false,
        youtube_sidebar_video: false
      },
      savedSettings: {},
      isConsole: false,
      notSupport: false,
      diary: '',
      isApp: true
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
    amazon_home_card_focus,
    amazon_home_card_reflection,

    facebook_suggested_hide,
    facebook_reels_hide,
    facebook_sponsored_hide,
    facebook_suggested_for_you_hide,
    facebook_suggested_for_you_highlight,

    youtube_recommended_video_focus,
    youtube_recommended_video_preview,
    youtube_recommended_video_reflection,
    youtube_video_dislike_fairness,
    youtube_sidebar_video_focus,
    youtube_sidebar_video_preview,
    youtube_sidebar_video_reflection
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
            this.website = 'Tailwind';
            this.info = INDEX.tailwind;
          } else if (url.search(/twitter.com/) !== -1) {
            this.website = 'Twitter';
            this.info = INDEX.twitter;
          } else if (url.search(/amazon.com/) !== -1) {
            this.website = 'Amazon';
            this.info = INDEX.amazon;
          } else if (url.search(/facebook.com/) !== -1) {
            this.website = 'Facebook';
            this.info = INDEX.facebook;
          } else if (url.search(/youtube.com/) !== -1) {
            this.website = 'Youtube';
            this.info = INDEX.youtube;
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
            console.log(this.targetIdentifiers);
            this.currentTarget = this.info[0];
            this.isAlert = true;
          } else {
            this.notSupport = true;
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

        console.log("new after refresh this.boundingBoxList", this.boundingBoxList);

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
      console.log('Getting bounding box list');
      this.boundingBoxList = [];
      for (let i = 0; i < this.targetIdentifiers.length; i++) {
        let element;

        // Set the selector
        if (this.website === 'Tailwind') {
          element = document.getElementById(this.targetIdentifiers[i]);
        } else if (this.website === 'Twitter') {
          element = document.querySelector(
            '[aria-label="' + this.targetIdentifiers[i] + '"]'
          );
        } else if (this.website === 'Amazon') {
          element = document.querySelectorAll(
            '[id^=' + this.targetIdentifiers[i] + ']'
          )[0];
        } else if (this.website === 'Youtube') {
          if (this.targetIdentifiers[i] === 'content') {
            element = document.querySelectorAll(
              '[id=' + this.targetIdentifiers[i] + ']'
            )[2];
          } else if (
            this.targetIdentifiers[i] === 'top-level-buttons-computed'
          ) {
            element = document.getElementById(this.targetIdentifiers[i])
              .childNodes[1];
          } else if (
            this.targetIdentifiers[i] === 'ytd-compact-video-renderer'
          ) {
            element = document.getElementsByTagName(
              this.targetIdentifiers[i]
            )[1];
          } else {
            element = document.querySelectorAll(
              '[id^=' + this.targetIdentifiers[i] + ']'
            )[0];
          }
        }
        // facebook
        else if (this.website === 'Facebook') {
          if (this.targetIdentifiers[i] == 'People You May Know') {
            console.log('Looking for facebook people you may know');
            var retrievedHtmls = document.getElementsByTagName('h3');
            for (var j = 0; j < retrievedHtmls.length; j++) {
              if (
                retrievedHtmls[j].innerHTML.indexOf(
                  this.targetIdentifiers[i]
                ) != -1
              ) {
                // very ugly way, but the whole container is the 4th parent of the h3 tag
                element =
                  retrievedHtmls[j].parentElement.parentElement.parentElement
                    .parentElement;
                console.log(
                  'matched element for facebook suggested people: ',
                  element
                );
              }
            }
          } else if (this.targetIdentifiers[i] == 'Reels and short videos') {
            console.log('Looking for facebook reels');
            var retrievedHtmls = document.getElementsByTagName('span');
            for (var j = 0; j < retrievedHtmls.length; j++) {
              if (
                retrievedHtmls[j].innerHTML.indexOf(
                  this.targetIdentifiers[i]
                ) != -1
              ) {
                // very ugly way, but the whole container is the 9th parent of the span tag
                element = retrievedHtmls[j].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                console.log("matched element for facebook reels: ", element);
              }
            }
          } else if (this.targetIdentifiers[i] == "ads/about") {
            console.log("Looking for facebook ads/about");
            let retrievedHtmls = document.getElementsByTagName("a");
            for (var j = 0; j < retrievedHtmls.length; j++) {
              let retrievedHref = retrievedHtmls[j].getAttribute("href");

              if (retrievedHref.indexOf("/ads/about") != -1) {
                console.log("Found ads/about content on facebook");
                // not the most elegant solution, but the whole container is the 11th parent of the a tag
                var parentLevel = 11;
                element = retrievedHtmls[j];
                for (var k = 0; k < parentLevel; k++) {
                  if (element.parentElement !== null) {
                    element = element.parentElement;
                  } else {
                    console.log(
                      'Parent for element is null, when retrieving dark pattern for facebook sponsored ads, abort'
                    );
                    console.log('current result: ', element);
                    break;
                  }
                }
                console.log(
                  'matched element for facebook sponsored ads: ',
                  element
                );
              }
            }
          } else if (this.targetIdentifiers[i] == 'Suggested for you') {
            console.log('Looking for facebook Suggested for you');
            var retrievedHtmls = document.getElementsByTagName('span');
            for (var j = 0; j < retrievedHtmls.length; j++) {
              if (
                retrievedHtmls[j].innerHTML.indexOf(
                  this.targetIdentifiers[i]
                ) != -1
              ) {
                // very ugly way, but the whole container is the 7th parent of the a tag
                var parentLevel = 7;
                element = retrievedHtmls[j];
                for (var k = 0; k < parentLevel; k++) {
                  element = element.parentElement;
                }
                console.log(
                  'matched element for facebook Suggested for you: ',
                  element
                );
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
          console.log('Bounding box pushed in ', boundingBox);
        } else {
          console.log('Cannot find element for bounding box');
        }
      }
      console.log("Got new list of bounding boxes");
      console.log(this.boundingBoxList);
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
      if (this.popupX < 0 || this.popupX > this.overlayWidth) {
        this.popupX = 800;
      }
      if (this.popupY < 0 || this.popupY > this.overlayHeight) {
        this.popupY = 300;
      }

      this.isPop = true;
      this.timer = new Date().getTime();
    },
    closePop(value) {
      console.log(value);
      this.isPop = false;
    },
    closeAlert() {
      this.isAlert = false;

      chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
        this.currentTab = await tab;
        console.log(this.currentTab);

        if (this.currentTab !== null) {
          let url = this.currentTab.url;
          console.log('current site in alert:', url);
          if (url.search(/facebook.com/) !== -1) {
            console.log("We are on Facebook");
            let bannerElement = document.querySelectorAll('[role="banner"]')[0];
            for (var i = 0; i < bannerElement.children.length; i++) {
              bannerElement.children[i].style.top = '0';
            }
          } else if (url.search(/youtube.com/) !== -1) {
            // need to manually change the top position of each screen componet (header, main content, left bar)
            let leftBar = document.getElementsByTagName("tp-yt-app-drawer")[0];
            console.log("leftBar", leftBar);
            // leftBar current position set to fixed, add its left value by 64 px;
            if (leftBar != undefined) {
              let leftBarCurrentTopValue = getComputedStyle(leftBar).top;
              leftBar.style.top = parseInt(leftBarCurrentTopValue) - 64 + "px";
            } else {
              console.log("leftBar not retrieved")
            }

            let headerBar = document.getElementById("masthead-container");
            console.log("headerBar", headerBar);
            // headerBar current position set to fixed, add its left value by 64 px;
            if (headerBar != undefined) {
              let headerBarCurrentTopValue = getComputedStyle(headerBar).top;
              headerBar.style.top = parseInt(headerBarCurrentTopValue) - 64 + "px";
            } else {
              console.log("headerBar not retrieved")
            }

            let bannerElement = document.getElementsByTagName("ytd-browse")[0];
            if (bannerElement != undefined) {
              console.log("bannerElement: " + bannerElement);
              bannerElement.style.marginTop = "0";
            } else {
              console.log("bannerElement not retrieved")
            }

          } else {
            document.body.style.paddingTop = '0';
          }
        }

      });
    },
    openAlert() {
      this.isAlert = true;
      chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
        this.currentTab = await tab;
        console.log(this.currentTab);

        if (this.currentTab !== null) {
          let url = this.currentTab.url;
          console.log('current site in alert:', url);
          if (url.search(/facebook.com/) !== -1) {
            console.log("We are on Facebook");
            let bannerElement = document.querySelectorAll('[role="banner"]')[0];
            for (var i = 0; i < bannerElement.children.length; i++) {
              bannerElement.children[i].style.top = '64px';
            }
          } else if (url.search(/youtube.com/) !== -1) {
            // need to manually change the top position of each screen componet (header, main content, left bar)
            let leftBar = document.getElementsByTagName("tp-yt-app-drawer")[0];
            console.log("leftBar", leftBar);
            // leftBar current position set to fixed, add its left value by 64 px;
            if (leftBar != undefined) {
              let leftBarCurrentTopValue = getComputedStyle(leftBar).top;
              leftBar.style.top = parseInt(leftBarCurrentTopValue) + 64 + "px";
            } else {
              console.log("leftBar not retrieved")
            }

            let headerBar = document.getElementById("masthead-container");
            console.log("headerBar", headerBar);
            // headerBar current position set to fixed, add its left value by 64 px;
            if (headerBar != undefined) {
              let headerBarCurrentTopValue = getComputedStyle(headerBar).top;
              headerBar.style.top = parseInt(headerBarCurrentTopValue) + 64 + "px";
            } else {
              console.log("headerBar not retrieved")
            }

            let bannerElement = document.getElementsByTagName("ytd-browse")[0];
            if (bannerElement != undefined) {
              console.log("bannerElement: " + bannerElement);
              bannerElement.style.marginTop = "64px";
            } else {
              console.log("bannerElement not retrieved")
            }

          } else {
            document.body.style.paddingTop = '64px';
          }
        }

      });
    },
    closeAll(value) {
      this.refresh();
      this.isPop = false;
      this.emitter.emit('alert_button_show', 'show');
    },
    sendDiary() {
      console.log(this.diary);
    }
  },
  mounted() {
    console.log('app mounted');
    window.addEventListener('scroll', this.generateOverviewOverlay);
    window.addEventListener('resize', this.generateOverviewOverlay);
    Paper.setup(document.getElementById('DP_canvas'));

    this.initialize();

    chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
      this.currentTab = await tab;

      if (this.currentTab !== null) {
        let url = this.currentTab.url;
        if (url.search(/youtube.com/) !== -1) {
          const HEARTBIT = 6; // sec
          setInterval(function() {
            incrementTime(HEARTBIT / 60, (data) => {
              let timeTracker = document.getElementById('DP_time_tracker');
              if (timeTracker !== null) {
                timeTracker.innerHTML = Math.round(data.time_watched) + 'mins';
              }
            });
          }, HEARTBIT * 1000);
        }
      }
    });

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
  @apply fixed bg-transparent rounded-[4px] border-[4px] border-transparent border-solid hover:border-blue-500 z-overlay;
}

.DP_console {
  @apply flex flex-col gap-[8px] fixed right-0 top-0 p-[16px] w-[400px] font-cabin bg-background z-infinite text-white text-[14px];

  .DP_text_area {
    @apply block p-[10px] w-full h-[200px] text-[14px] rounded-lg border-[1px] bg-dark border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500;
  }

  button {
    @apply bg-transparent w-full hover:bg-white font-cabin font-normal text-[14px] text-white hover:text-dark px-[24px] py-[8px] rounded-[4px] border;
  }
}
</style>
