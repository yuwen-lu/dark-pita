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
          selectors[i].parentNode.removeChild(selectors[i]);
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
    this.emitter.on('amazon_disguised_ads_hide', (message) => {
      if (message === 'on') {
        console.log('amazon disguised ads hide on');
        this.sendAction(1, 'toggle amazon_disguised_ads_hide');
        this.target = document.querySelectorAll('[id^=CardInstance]')[0];
        this.target.style.display = 'none';
        // this.remove(this.target);
      } else if (message === 'off') {
        console.log('amazon disguised ads hide off');
        this.sendAction(0, 'toggle amazon_disguised_ads_hide');
        this.target.style.display = 'block';
        // this.recover(this.target);
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang=""></style>
