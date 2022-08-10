<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll('[id^=CardInstance]')[0],
      sponsord: document.getElementById(
        'ad-feedback-text-auto-sparkle-hsa-tetris'
      )
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
    this.emitter.on('disguised_ads_disclosure', (massage) => {
      if (massage === 'on') {
        console.log('disguised ads disclosure on');
        this.target = document.querySelectorAll('[id^=CardInstance]')[0];
        this.sponsord = document.getElementById(
          'ad-feedback-text-auto-sparkle-hsa-tetris'
        );
        this.remove(this.sponsord);
        this.target.style.cssText =
          'border-width: 4px; border-color: rgb(220 38 38);';
      } else if (massage === 'off') {
        console.log('disguised ads disclosure off');
        this.recover(this.sponsord);
        this.target.style.cssText = '';
      }
    });
  }
};
</script>
<style lang="scss" scoped></style>
