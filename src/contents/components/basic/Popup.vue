<template>
  <div class="DP_wrapper" :style="position" v-show="isPop">
    <Header
      @mousedown="mousedown"
      @mouseleave="mouseup"
      @closePop="closePop"
      :color="color"
    />
    <Awareness
      :tag="target.tag"
      :type="target.type"
      :icon="target.icon"
      :pattern="target.pattern"
      :description="target.description"
      :awareness="target.awareness"
      :color="color"
      @toggleAction="toggleAction"
    />
    <Action
      :action="target.action"
      :color="color"
      :style="actionPosition"
      :savedSettings="savedSettings"
      :targetName="target.name"
      @closePop="closePop"
    />
  </div>
</template>

<script>
// Basic components
import Header from '@/contents/components/basic/Header.vue';
import Awareness from '@/contents/components/basic/Awareness.vue';
import Action from '@/contents/components/basic/Action.vue';

export default {
  name: 'Popup',
  props: {
    left: {
      type: Number,
      default: 150
    },
    top: {
      type: Number,
      default: 100
    },
    target: {
      type: Object
    },
    savedSettings: {
      type: Object
    },
    targetNames: {
      type: Object
    }
  },
  data() {
    return {
      x: this.left,
      y: this.top,
      leftOffset: 0, // mouse position offset from left of popup
      topOffset: 0, // mouse position offset from top of popup
      isMove: false, // whether to move the popup
      actionX: 0,
      actionY: 36,
      actionHeight: 300,
      color: 'online_shopping',
      isPop: true,
      buyNowHideState: false
    };
  },
  components: {
    Header,
    Awareness,
    Action
  },
  computed: {
    // add px to left and top
    position() {
      return `top:${this.y}px; left:${this.x}px;`;
    },
    actionPosition() {
      return `top:${this.actionY}px; left:${this.actionX}px; height:${this.actionHeight}px`;
    }
  },
  methods: {
    mousedown(event) {
      // mouse click event
      let closePopupButton = document.getElementById("closePopupButton");
      if (closePopupButton.contains(event.target)) {
        console.log("closePopupButton clicked");
      } else {
        console.log('mouse click header');
        this.leftOffset = event.offsetX;
        this.topOffset = event.offsetY;
        this.isMove = true;
        
        // handle mouse move event, add the listener to document, otherwise cannot move smoothly
        document.addEventListener('mousemove', (e) => {
          if (!this.isMove) {
            console.log("Huhhhhh?");
            return;
          }
          console.log("Mouse Moveeeee!!!!");
          console.log(e.clientX);

          e.preventDefault();
          let lastUpdatedCall = null;
          if(lastUpdatedCall) cancelAnimationFrame(lastUpdatedCall);  //if an animation frame was already requested after last repaint, cancel it in favour of the newer event

          lastUpdatedCall = window.requestAnimationFrame(() => {  //save the requested frame so we can check next time if one was already requested
            let leftx = e.clientX - this.leftOffset;
            let topy = e.clientY - this.topOffset;
            this.x = leftx;
            this.y = topy;
            console.log("this.x = " + this.x);
            console.log("this.y = " + this.y);
            lastUpdatedCall = null; // Since this frame didn't get cancelled, the lastUpdateCall should be reset so new frames can be called. 
          });
        });

        // handle mouse up event, add the listener to document, otherwise cannot move smoothly
        document.addEventListener('mouseup', (e) => {
          this.isMove = false;
        });
      }
    },
    toggleAction(value) {
      console.log(value);
      if (this.actionX === 0) {
        this.actionX = 280;
      } else if (this.actionX === 280) {
        this.actionX = 0;
      }
      let elt = document.getElementsByClassName('DP_body')[0];
      elt.style.borderBottomRightRadius = '0px';
      this.actionHeight = elt.clientHeight;
    },
    closeAll(value) {
      this.isPop = value;
      this.$emit('closeAll', this.isPop);
    },
    closePop() {
      this.$emit('closePop', 'close popup');
    }
  },
  beforeMount() {
    // console.log(this.target);
    if (this.target.type === 'online shopping platform') {
      this.color = 'online_shopping';
    } else if (this.target.type === 'social media platform') {
      this.color = 'social_media';
    } else if (this.target.type === 'video streaming platform') {
      this.color = 'video_streaming';
    }

    // console.log(this.color);
  },
  mounted() {
    console.log('popup mounted');
  }
};
</script>

<style lang="scss" scoped>
div {
  p {
    @apply p-0 m-0;
  }
}

.DP_wrapper {
  @apply flex flex-col justify-center items-center drop-shadow-lg;

  width: 280px;
}
</style>
