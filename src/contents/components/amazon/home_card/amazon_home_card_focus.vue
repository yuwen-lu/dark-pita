<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll('[id^=pageContent]')
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
    this.emitter.on('amazon_home_card_focus', (message) => {
      if (message === 'on') {
        console.log('amazon home card focus mode on');
        this.sendAction(1, 'toggle amazon_home_card_focus');
        this.target = document.querySelectorAll('[id^=pageContent], [id^=rhf], [id^=navBackToTop]');
        this.remove(this.target);

        const emptyContent = document.createElement('div');
        emptyContent.id = 'emptyContent';
        emptyContent.style.height = '100vh';
        emptyContent.style.width = '100vw';
        emptyContent.style.backgroundColor = '#fff';
        
        // add empty content to screen
        let attachTarget = document.getElementById('navbar');
        attachTarget.appendChild(emptyContent);

        // move nav bar a little lower to become the focus of the screen
        let navBar = document.getElementById("navbar-main");
        navBar.style.marginTop = "20vh";

      } else if (message === 'off') {
        console.log('amazon home card focus mode off');
        this.sendAction(0, 'toggle amazon_home_card_focus');
        this.recover(this.target);

        let navBar = document.getElementById("navbar-main");
        navBar.style.marginTop = "0px";

        let emptyContent = document.getElementById("emptyContent");
        emptyContent.parentNode.removeChild(emptyContent);
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang=""></style>
