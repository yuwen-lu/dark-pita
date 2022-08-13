<template>
  <div class="DP_wrapper" :style="position" v-show="isPop">
    <Header
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      @mouseleave="mouseup"
      @close="close"
      :color="color"
    />
    <Awareness
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
      :targetNames="targetNames"
      @toggleAction="toggleAction"
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
      leftOffset: 0, // 鼠标距离移动窗口左侧偏移量
      topOffset: 0, // 鼠标距离移动窗口顶部偏移量
      isMove: false, // 是否移动标识
      actionX: 0,
      actionY: 36,
      actionHeight: 300,
      color: 'money',
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
      console.log('mouse click');
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
    close(value) {
      this.isPop = value;
      this.$emit('closePop', this.isPop);
    }
  },
  beforeMount() {
    // console.log(this.target);
    if (this.target.type === 'financial loss') {
      this.color = 'money';
    } else if (this.target.type === 'privacy invasion') {
      this.color = 'privacy';
    } else if (this.target.type === 'cognitive burden') {
      this.color = 'cognition';
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
