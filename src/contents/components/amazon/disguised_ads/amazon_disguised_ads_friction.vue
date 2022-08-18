<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll('[id^=CardInstance]')[0]
    };
  },
  methods: {
    changeCursor(node, type) {
      let nodeList = node.childNodes;
      for (let i = 0; i < nodeList.length; i++) {
        let childNode = nodeList[i];
        if (childNode.nodeType == 1) {
          childNode.style.cursor = type;
          if (type === 'default') {
            childNode.style.cssText = '';
          }
          this.changeCursor(childNode, type);
        }
      }
    }
  },
  mounted() {
    this.emitter.on('amazon_disguised_ads_friction', (message) => {
      this.target = document.querySelectorAll('[id^=CardInstance]')[0];

      if (this.target !== null) {
        if (message === 'on') {
          console.log('amazon disguised ads friction on');
          this.sendAction(1, 'toggle amazon_disguised_ads_friction');
          this.changeCursor(this.target, 'none');
        } else if (message === 'off') {
          console.log('amazon disguised ads friction off');
          this.sendAction(0, 'toggle amazon_disguised_ads_friction');
          this.changeCursor(this.target, 'default');
        }
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped></style>
