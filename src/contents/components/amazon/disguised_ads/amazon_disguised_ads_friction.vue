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
    this.emitter.on('amazon_disguised_ads_friction', (massage) => {
      if (massage === 'on') {
        console.log('disguised ads friction on');
        this.target = document.querySelectorAll('[id^=CardInstance]')[0];
        this.changeCursor(this.target, 'none');
        this.$emit('update');
      } else if (massage === 'off') {
        console.log('disguised ads friction off');
        this.changeCursor(this.target, 'default');
        this.$emit('update');
      }
    });
  }
};
</script>
<style lang="scss" scoped></style>
