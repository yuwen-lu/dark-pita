<template>
  <div class="DP_wrapper" :style="position" v-show="isPop">
    <Header
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      @mouseleave="mouseup"
      @close="close"
    />
    <Awareness @toggleAction="toggleAction" />
    <Action
      :style="actionPosition"
      @toggleAction="toggleAction"
      @triggerIntervention="triggerIntervention"
    />
    <Hide :state="hideState" :key="hideState" />
  </div>
</template>

<script>
import Header from '@/contents/components/basic/Header.vue';
import Awareness from '@/contents/components/basic/Awareness.vue';
import Action from '@/contents/components/basic/Action.vue';
import Hide from '@/contents/components/tailwind/Hide.vue';

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
      actionY: 37,
      actionHeight: 400,
      isPop: true,
      hideState: false
    };
  },
  components: {
    Header,
    Awareness,
    Action,
    Hide
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
    triggerIntervention(value) {
      console.log(value);
      if (value === 'hide') {
        this.hideState = true;
      } else {
        this.hideState = false;
      }
    },
    toggleAction(value) {
      console.log(value);
      if (this.actionX === 0) {
        this.actionX = 260;
      } else if (this.actionX === 260) {
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
  }
};
</script>

<style lang="scss" scoped>
.DP_wrapper {
  @apply flex flex-col justify-center items-center drop-shadow-lg;

  width: 260px;
}
</style>
