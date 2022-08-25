<template>
  <div id="DP_wrapper" :key="reload">
    <!-- Intervention list -->
    <!-- Amazon -->
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
    <amazon_home_card_progress
      v-if="targetNames.amazon_home_card"
      @update="generateOverviewOverlay"
    />

    <!-- Youtube -->
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

    <!-- Netflix -->
    <netflix_timeline_reflection
      v-if="targetNames.netflix_timeline"
      @update="generateOverviewOverlay"
    />
    <netflix_hugepreview_disable
      v-if="targetNames.netflix_hugepreview"
      @update="generateOverviewOverlay"
    />

    <!-- Facebook -->
    <facebook_reels_hide
      v-if="targetNames.facebook_reels"
      @update="generateOverviewOverlay"
    />
    <facebook_reels_counterfact
      v-if="targetNames.facebook_reels"
      @update="generateOverviewOverlay"
    />
    <facebook_reels_friction
      v-if="targetNames.facebook_reels"
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

    <!-- Twitter -->
    <twitter_whats_happening_hide
      v-if="targetNames.twitter_whats_happening"
      @update="generateOverviewOverlay"
    />
    <twitter_promoted_highlight
      v-if="targetNames.twitter_promoted"
      @update="generateOverviewOverlay"
    />

    <twitter_promoted_friction
      v-if="targetNames.twitter_promoted"
      @update="generateOverviewOverlay"
    />

    <Alert
      :targetNames="targetNames"
      :isAlert="isAlert"
      :isMask="isMask"
      @toggleMask="toggleMask"
      @closeAlert="closeAlert"
      v-show="isAlert"
    />

    <!-- Popup panel -->
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

    <!-- Canvas for overlay -->
    <canvas resize id="DP_canvas" style="display: none"></canvas>

    <div id="DP_mask" class="DP_mask" v-show="isMask"></div>

    <!-- Clickable area for highlighted dark patterns -->
    <div
      v-for="(value, index) in targetIdentifiers"
      :key="index"
      :id="'DP_i_' + value"
      class="DP_bounding_box"
      @click="togglePopup($event, value, index)"
      v-show="isMask"
    ></div>

    <!-- Console for sending diary notes -->
    <Console
      v-if="isConsole"
      :notSupport="notSupport"
      :isAlert="isAlert"
      :currentURL="currentTab.url"
      @openAlert="openAlert"
    />
  </div>
</template>

<script>
// Dark pattern index
import INDEX from '@/contents/index.js';

// Libraries
import Paper from 'paper';
import { incrementTime } from '@/contents/components/youtube/recommended_video/time_tracker/tracker';

// Basic components
import Alert from '@/contents/components/basic/Alert.vue';
import Popup from '@/contents/components/basic/Popup.vue';
import Console from '@/contents/components/basic/Console.vue';

// Intervention components
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
import amazon_home_card_progress from '@/contents/components/amazon/home_card/amazon_home_card_progress.vue';

import youtube_recommended_video_focus from '@/contents/components/youtube/recommended_video/youtube_recommended_video_focus.vue';
import youtube_recommended_video_preview from '@/contents/components/youtube/recommended_video/youtube_recommended_video_preview.vue';
import youtube_recommended_video_reflection from '@/contents/components/youtube/recommended_video/youtube_recommended_video_reflection.vue';
import youtube_video_dislike_fairness from '@/contents/components/youtube/video_dislike/youtube_video_dislike_fairness.vue';
import youtube_sidebar_video_focus from '@/contents/components/youtube/sidebar_video/youtube_sidebar_video_focus.vue';
import youtube_sidebar_video_preview from '@/contents/components/youtube/sidebar_video/youtube_sidebar_video_preview.vue';
import youtube_sidebar_video_reflection from '@/contents/components/youtube/sidebar_video/youtube_sidebar_video_reflection.vue';

import netflix_timeline_reflection from '@/contents/components/netflix/timeline/netflix_timeline_reflection.vue';
import netflix_hugepreview_disable from '@/contents/components/netflix/hugepreview/netflix_hugepreview_disable.vue';

import facebook_reels_hide from '@/contents/components/facebook/reels/facebook_reels_hide.vue';
import facebook_reels_counterfact from '@/contents/components/facebook/reels/facebook_reels_counterfact.vue';
import facebook_reels_friction from '@/contents/components/facebook/reels/facebook_reels_friction.vue';
import facebook_suggested_for_you_hide from './components/facebook/suggested_for_you/facebook_suggested_for_you_hide.vue';
import facebook_suggested_for_you_highlight from './components/facebook/suggested_for_you/facebook_suggested_for_you_highlight.vue';

import twitter_whats_happening_hide from './components/twitter/whats_happening/twitter_whats_happening_hide.vue';
import twitter_promoted_highlight from './components/twitter/promoted/twitter_promoted_highlight.vue';
import twitter_promoted_friction from './components/twitter/promoted/twitter_promoted_friction.vue';

export default {
  data() {
    return {
      reload: 0, // reload hook for whole app
      timer: null, // reload hook for popup
      currentTab: null, // information (url, etc.) of current site
      info: [], // dark pattern information of current platform (Amazon, etc.)
      website: '', // name of current platform (Amazon, etc.)
      targetIdentifiers: null, // identifiers of dark patterns in current site
      currentTarget: {}, // current selected dark pattern
      boundingBoxList: [], // containers for all bounding boxes of dark patterns
      isPop: false, // state of popup panel
      isMask: false, // state of overlay
      isAlert: false, // state of header alert
      popupX: 0, // left position of popup panel
      popupY: 0, // top position of popup panel
      overlayPath: '', // container for overlay svg
      overlayWidth: Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ), // width of overlay, equal to the viewpoint
      overlayHeight: Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ), // height of overlay, equal to the viewpoint
      mask: null, // container for overlay element
      targetNames: {
        amazon_buy_now: false,
        amazon_disguised_ads: false,
        amazon_discount_price: false,
        amazon_home_card: false,
        facebook_reels: false,
        facebook_suggested_for_you: false,
        youtube_recommended_video: false,
        youtube_video_dislike: false,
        youtube_sidebar_video: false,
        netflix_preview: false,
        netflix_timeline: false,
        netflix_hugepreview: false,
        twitter_whats_happening: false,
        twitter_promoted: false
      }, // list of all dark patterns
      savedSettings: {}, // saved settings for interventions of dark patterns
      isConsole: false, // state of console panel
      notSupport: false // whether dark patterns exist in this site
    };
  },
  components: {
    // Basic components
    Alert,
    Popup,
    Console,

    // Intervention components
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
    amazon_home_card_progress,

    facebook_reels_hide,
    facebook_reels_counterfact,
    facebook_reels_friction,
    facebook_suggested_for_you_hide,
    facebook_suggested_for_you_highlight,

    youtube_recommended_video_focus,
    youtube_recommended_video_preview,
    youtube_recommended_video_reflection,
    youtube_video_dislike_fairness,
    youtube_sidebar_video_focus,
    youtube_sidebar_video_preview,
    youtube_sidebar_video_reflection,

    netflix_timeline_reflection,
    netflix_hugepreview_disable,

    twitter_whats_happening_hide,
    twitter_promoted_highlight,
    twitter_promoted_friction
  },
  computed: {},
  watch: {
    reload(newVal, oldVal) {
      /**
       * Reload the whole app when url is changed
       */
      console.log('app reload');
      this.initialize();
    }
  },
  methods: {
    initialize() {
      /**
       * Initialize the whole app
       */
      console.log('app initialize');

      // Add event for responsible overlay
      window.addEventListener('scroll', this.generateOverviewOverlay);
      window.addEventListener('resize', this.generateOverviewOverlay);
      Paper.setup(document.getElementById('DP_canvas'));

      // Initialize varaiables
      this.notSupport = false;
      this.targetIdentifiers = null;
      this.isPop = false;
      this.mask = document.getElementById('DP_mask');

      // Get the site info (url, etc.) to initialize varaiables
      chrome.runtime.sendMessage({ type: 'APP_INIT' }, async (tab) => {
        this.isAlert = false; // this line is put inside of here to prevent isAlert being set before <Alert> is mounted
        this.currentTab = await tab;
        // console.log(this.currentTab);

        if (this.currentTab !== null) {
          let url = this.currentTab.url;
          console.log('current site:', url);
          this.sendAction(this.currentTab.url, 'app launched');

          // Define the identifier
          if (url.search(/twitter.com/) !== -1) {
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
          } else if (url.search(/netflix.com/) !== -1) {
            this.website = 'Netflix';
            this.info = INDEX.netflix;
          } else {
            this.website = 'Others';
            this.info = null;
          }

          // Collect dark patterns
          if (this.info !== null) {
            for (let target of this.info) {
              let re = new RegExp(target.url);
              // console.log('initialize', url);
              if (url.search(re) !== -1) {
                // Handle speical circumstances
                if (target.name === 'amazon_disguised_ads') {
                  if (
                    document.getElementById(
                      'ad-feedback-text-auto-sparkle-hsa-tetris'
                    ) === null
                  )
                    continue;
                } else if (target.name === 'amazon_buy_now') {
                  if (document.getElementById('submit.buy-now') === null)
                    continue;
                } else if (target.name === 'amazon_discount_price') {
                  if (
                    document.getElementById('corePrice_desktop') === null ||
                    document.getElementById('corePrice_desktop').innerText ===
                      ''
                  )
                    continue;
                }

                if (this.targetIdentifiers === null) {
                  this.targetIdentifiers = [];
                }
                // console.log('initialize', target)
                this.targetIdentifiers.push(target.identifier);
                this.targetNames[target.name] = true;
              }
            }

            console.log('dark patterns on this site:', this.targetNames);
          }

          // Whether the header alert can appear or not, depends on whether dark patterns exist or not
          if (
            this.targetIdentifiers !== null &&
            this.targetIdentifiers !== undefined &&
            this.targetIdentifiers !== []
          ) {
            this.currentTarget = this.info[0];
            this.isAlert = true;
            this.sendAction(this.currentTab.url, 'trigger banner');
          } else {
            this.notSupport = true;
          }

          // Start time tracker for youtube
          if (url.search(/youtube.com/) !== -1) {
            const HEARTBIT = 6; // sec
            setInterval(function() {
              incrementTime(HEARTBIT / 60, (data) => {
                let timeTracker = document.getElementById('DP_time_tracker');
                if (timeTracker !== null) {
                  timeTracker.innerHTML =
                    Math.round(
                      data.time_watched * (1 - (0.1 * Math.random() + 0.05))
                    ) +
                    '/<span>' +
                    Math.round(data.time_watched) +
                    ' mins in total';
                }
              });
            }, HEARTBIT * 1000); // update every 6s
          }

          // Start time tracker for netflix
          if (url.search(/netflix.com/) !== -1) {
            const HEARTBIT = 6; // sec
            setInterval(function() {
              incrementTime(HEARTBIT / 60, (data) => {
                let timeTrackerNetflix = document.getElementById(
                  'DP_time_tracker_netflix'
                );
                if (timeTrackerNetflix !== null) {
                  timeTrackerNetflix.innerHTML =
                    Math.round(data.time_watched) + 'mins';
                }
              });
            }, HEARTBIT * 1000); // update every 6s
          }
        }
      });

      // Get the saved settings from chrome
      let that = this;
      chrome.storage.sync.get('savedSettings', function(settings) {
        if (JSON.stringify(settings) !== '{}') {
          console.log('retrieve settings');
          console.log(settings);
          that.savedSettings = settings.savedSettings;
        }
      });
    },
    toggleMask() {
      /**
       * Click 'Show All' in header alert to show the overlay
       */
      this.refresh();
      if (this.isMask === false) {
        this.isMask = true;
        // this.sendAction(1, 'toggle mask');
        this.generateOverviewOverlay();
      } else {
        this.isMask = false;
        // this.sendAction(0, 'toggle mask');
      }
    },
    generateTouchableArea() {
      /**
       * Generate all touchable areas for dark patterns in current site
       */
      console.log(
        'generate touchable areas for bounding boxes: ' + this.boundingBoxList
      );

      document.body.style.position = 'relative'; // set the body relative position for the absolute postion of touchable areas

      let idList = []; // used to store the id of generated touchable areas. If there's one already generated, then we don't generate for others. Just a temporary solution.

      // Iterate all bounding boxes to generate touchable areas
      for (let i = 0; i < this.boundingBoxList.length; i++) {
        console.log(
          'generate touchable area for bounding box: ' + this.boundingBoxList[i]
        );
        let id = this.boundingBoxList[i].id;
        if (idList.includes(id)) {
          continue;
        } else {
          idList.push(id);
        }
        let left = this.boundingBoxList[i].x + 'px';
        let top = this.boundingBoxList[i].y + 'px';
        let width = this.boundingBoxList[i].width + 'px';
        let height = this.boundingBoxList[i].height + 'px';
        let opacity = 1;
        this.generateSpotlightOverlay(id, left, top, width, height, opacity);
      }
    },
    generateSpotlightOverlay(id, left, top, width, height, opacity = 0.5) {
      /**
       * Generate single touchable area for one specific dark pattern
       */
      console.log('generate spotlight overlay for ' + id);
      let boundingBox = document.getElementById('DP_i_' + id);
      if (boundingBox !== undefined && boundingBox !== null) {
        boundingBox.style.left = left;
        boundingBox.style.top = top;
        boundingBox.style.width = width;
        boundingBox.style.height = height;
        boundingBox.style.opacity = opacity;
      }
    },
    generateOverviewOverlay() {
      /**
       * Generate overlay
       */
      if (this.isMask) {
        console.log('generate overlay');

        this.refresh(); // refresh bounding boxes before generating overlay

        // Leverage paper.js to generate overlay svg
        const origin = new Paper.Point(0, 0);
        const rect = new Paper.Path.Rectangle({
          point: origin,
          size: [this.overlayWidth, this.overlayHeight],
          fillColor: 'black',
          opacity: 0.6
        });

        // Boolean operations to subtract bounding boxes
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

        // Export the generated overlay svg
        this.overlayPath = overlayPath.exportSVG();
        Paper.project.clear();

        // Insert the generated overlay svg into DOM
        const SVG_NS = 'http://www.w3.org/2000/svg';
        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('width', this.overlayWidth);
        svg.setAttribute('height', this.overlayHeight);
        svg.appendChild(this.overlayPath);
        this.mask = document.getElementById('DP_mask');
        this.mask.appendChild(svg);

        // Regenerate touchable areas for the new overlay
        this.generateTouchableArea();
        // console.log(this.overlayPath);
      }
    },
    getBoundingBoxList() {
      /**
       * Get all bounding boxes according the position and size of dark patterns
       */
      console.log('Getting bounding box list');
      this.boundingBoxList = [];
      for (let i = 0; i < this.targetIdentifiers.length; i++) {
        let element;
        let elementList = [];

        // Set one unique selector for every dark pattern
        if (this.website === 'Tailwind') {
          element = document.getElementById(this.targetIdentifiers[i]);
        } else if (this.website === 'Twitter') {
          if (this.targetIdentifiers[i] === 'See more') {
            let retrievedHtmls = document.getElementsByTagName('span');
            for (let j = 0; j < retrievedHtmls.length; j++) {
              if (retrievedHtmls[j].innerHTML.search('See more') !== -1) {
                element = retrievedHtmls[j];
                break;
              }
            }
            // our target is the 17th parent of the selected element
            if (element !== null && element !== undefined) {
              let parentLevel = 17;
              for (let j = 0; j < parentLevel; j++) {
                if (element.parentElement !== null) {
                  element = element.parentElement;
                } else {
                  break;
                }
              }
            }
          } else {
            element = document.querySelector(
              '[aria-label="' + this.targetIdentifiers[i] + '"]'
            );
          }
        } else if (this.website === 'Amazon') {
          if (this.targetIdentifiers[i] === 'submit.buy-now') {
            element = document.getElementById(this.targetIdentifiers[i]);
          } else if (
            this.targetIdentifiers[i] ===
            'ad-feedback-text-auto-sparkle-hsa-tetris'
          ) {
            element = document.getElementById(this.targetIdentifiers[i]);
            if (element !== null) {
              element =
                element.parentElement.parentElement.parentElement.parentElement
                  .parentElement.parentElement.parentElement.parentElement;
            }
          } else if (this.targetIdentifiers[i] === 'apex_desktop') {
            element = document.getElementById(this.targetIdentifiers[i]);
          } else if (this.targetIdentifiers[i] === 'desktop-grid-3') {
            element = document.querySelectorAll(
              '[id^=' + this.targetIdentifiers[i] + ']'
            )[0];
          } else {
            element = document.querySelectorAll(
              '[id^=' + this.targetIdentifiers[i] + ']'
            )[0];
          }
        } else if (this.website === 'Netflix') {
          if (this.targetIdentifiers[i] === 'Featured Content') {
            element = document.querySelector(
              '[aria-label="' + this.targetIdentifiers[i] + '"]'
            );
          } else if (this.targetIdentifiers[i] === 'controls-time-remaining') {
            element = document.querySelector(
              '[data-uia="' + this.targetIdentifiers[i] + '"]'
            );
          }
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
        // Facebook
        else if (this.website === 'Facebook') {
          if (this.targetIdentifiers[i] == 'Reels and short videos') {
            console.log('Looking for facebook reels');
            var retrievedHtmls = document.getElementsByTagName('span');
            for (var j = 0; j < retrievedHtmls.length; j++) {
              if (
                retrievedHtmls[j].innerHTML.indexOf(
                  this.targetIdentifiers[i]
                ) != -1
              ) {
                // very ugly way, but the whole container is the 9th parent of the span tag
                element =
                  retrievedHtmls[j].parentElement.parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement;
                elementList.push(element);
                console.log('matched element for facebook reels: ', element);
              }
            }
          } else if (this.targetIdentifiers[i] == 'Suggested for you') {
            console.log('Looking for facebook Suggested for you');
            var retrievedHtmls = document.getElementsByTagName('span');
            for (var j = 0; j < retrievedHtmls.length; j++) {
              if (
                retrievedHtmls[j].innerHTML.indexOf(
                  this.targetIdentifiers[i]
                ) != -1 ||
                retrievedHtmls[j].innerHTML.indexOf('Promoted by Facebook') !=
                  -1
              ) {
                // very ugly way, but the whole container is the 7th parent of the a tag
                var parentLevel = 7;
                element = retrievedHtmls[j];
                for (var k = 0; k < parentLevel; k++) {
                  element = element.parentElement;
                }
                elementList.push(element);
                console.log(
                  'matched element for facebook Suggested for you: ',
                  element
                );
              }
            }
          }
        }

        // Get all bounding boxes according the position and size of dark patterns
        if (elementList.length > 0) {
          for (var j = 0; j < elementList.length; j++) {
            if (elementList[j] !== undefined && elementList[j] !== null) {
              // console.log('Got a list to generate bounding box');
              let boundingBox = elementList[j].getBoundingClientRect();
              // console.log(
              //   'For boundingbox list, retrieved element: ',
              //   elementList[j],
              //   ' with its bounding box: ',
              //   boundingBox
              // );
              boundingBox.id = this.targetIdentifiers[i];
              boundingBox.x = boundingBox.x - 10;
              boundingBox.y = boundingBox.y - 10;
              boundingBox.width = boundingBox.width + 20;
              boundingBox.height = boundingBox.height + 20;
              this.boundingBoxList.push(boundingBox);
              // console.log('Bounding box pushed in ', boundingBox);
            } else {
              this.boundingBoxList.push({
                id: this.targetIdentifiers[i],
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              });
              // console.log('Cannot find element for bounding box');
            }
          }
        } else {
          if (element !== undefined && element !== null) {
            // console.log(
            //   'Got a single element to generate bounding box, element: ',
            //   element
            // );
            let boundingBox = element.getBoundingClientRect();
            boundingBox.id = this.targetIdentifiers[i];
            boundingBox.x = boundingBox.x - 10;
            boundingBox.y = boundingBox.y - 10;
            boundingBox.width = boundingBox.width + 20;
            boundingBox.height = boundingBox.height + 20;
            this.boundingBoxList.push(boundingBox);
            console.log('Bounding box pushed in ', boundingBox);
          } else {
            this.boundingBoxList.push({
              id: this.targetIdentifiers[i],
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            });
            // console.log('Cannot find element for bounding box');
          }
        }
      }

      // console.log('Got new list of bounding boxes');
      // console.log(this.boundingBoxList);
    },
    refresh() {
      /**
       * Refresh the overlay
       */
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
      /**
       * Toggle the popup panel when click a touchable area
       */
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
      // this.sendAction(this.currentTarget, 'trigger popup');
      this.timer = new Date().getTime();
    },
    closePop(value) {
      /**
       * Close popup panel when click 'Close' icon in popup panel
       */
      console.log(value);
      this.isPop = false;
      // this.sendAction(this.currentTarget, 'close popup');
    },
    closeAlert() {
      /**
       * Close header alert when click 'Close' icon in header alert
       */
      this.isAlert = false;
      // this.sendAction(this.currentTab.url, 'close banner');
    },
    openAlert() {
      /**
       * Reopen the header alert when click 'Open Banner' in the console
       */
      this.isAlert = true;
      // this.sendAction(this.currentTab.url, 'reopen banner');
    }
  },
  mounted() {
    console.log('app mounted');

    let that = this;
    window.onload = function() {
      that.initialize();
    };
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
</style>
