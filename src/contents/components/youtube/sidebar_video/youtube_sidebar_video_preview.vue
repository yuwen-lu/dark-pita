<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: null
    };
  },
  methods: {
    remove(selectors) {
      selectors.removeNode = [];
      if (selectors.length != undefined) {
        let len = selectors.length;
        for (let i = 0; i < len; i++) {
          selectors.removeNode.push({
            parent: selectors[i].parentNode,
            inner: selectors[i].outerHTML,
            next: selectors[i].nextSibling
          });
        }
        for (let i = 0; i < len; i++)
          selectors[i].parentNode.removeChild(selectors[0]);
      } else {
        selectors.removeNode.push({
          parent: selectors.parentNode,
          inner: selectors.outerHTML,
          next: selectors.nextSibling
        });
        selectors.parentNode.removeChild(selectors);
      }
    },
    recover(selectors) {
      let len = selectors.removeNode.length;
      for (let i = 0; i < len; i++) {
        let node = selectors.removeNode[i];
        if (node.next == null) node.parent.innerHTML += node.inner;
        else {
          let div = document.createElement('div');
          div.innerHTML = node.inner;
          node.parent.insertBefore(div.childNodes[0], node.next);
        }
      }
    }
  },
  mounted() {
    this.emitter.on('youtube_sidebar_video_preview', (message) => {
      let that = this;
      setTimeout(() => {
        that.target = document.querySelectorAll('[id^=mouseover-overlay]');

        if (message === 'on') {
          console.log('youtube sidebar video block preview on');
          that.target.forEach((elt) => that.remove(elt));
        } else if (message === 'off') {
          that.target.forEach((elt) => that.recover(elt));
        }

        that.$emit('update');
      }, 3000);
    });
  }
};
</script>
<style lang=""></style>
