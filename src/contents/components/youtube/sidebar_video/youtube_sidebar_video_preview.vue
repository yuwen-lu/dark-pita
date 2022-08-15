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
      if (message === 'on') {
        console.log('youtube sidebar video block preview on');
        this.target = document.querySelectorAll('[id^=mouseover-overlay]');
        this.target.forEach((elt) => this.remove(elt));
        this.$emit('update');
      } else if (message === 'off') {
        this.target = document.querySelectorAll('[id^=mouseover-overlay]');
        this.target.forEach((elt) => this.recover(elt));
        this.$emit('update');
      }
    });
  }
};
</script>
<style lang=""></style>
