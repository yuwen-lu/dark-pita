<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      targetList: [],
      isHideOn: false,
    };
  },
  methods: {
    getTargetList() {
      let elementList = [];
      let element;
      // look for the sponsored component
      var retrievedHtmls = document.getElementsByTagName("span");
      for (var j = 0; j < retrievedHtmls.length; j++) {
        if (retrievedHtmls[j].innerHTML.indexOf("Suggested for you") != -1 || retrievedHtmls[j].innerHTML.indexOf("Promoted by Facebook, Not Followed By You") ) {
          var parentLevel = 7;
          element = retrievedHtmls[j];
          for (var k = 0; k < parentLevel; k++) {
            if (element.parentElement == null) break;
            element = element.parentElement;
          }
          elementList.push(element);
          console.log("element found");
        }
      }

      if (elementList.length !== 0) {
        this.targetList = elementList;
      }
    },
    remove(selectors) {
      selectors.removeNode = [];
      if (selectors.length != undefined) {
        let len = selectors.length;
        for (let i = 0; i < len; i++) {
          selectors.removeNode.push({
            parent: selectors[i].parentNode,
            inner: selectors[i].outerHTML,
            next: selectors[i].nextSibling,
          });
        }
        for (let i = 0; i < len; i++)
          selectors[i].parentNode.removeChild(selectors[i]);
      } else {
        selectors.removeNode.push({
          parent: selectors.parentNode,
          inner: selectors.outerHTML,
          next: selectors.nextSibling,
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
          let div = document.createElement("div");
          div.innerHTML = node.inner;
          node.parent.insertBefore(div.childNodes[0], node.next);
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.isHideOn) {
        this.getTargetList();
        if (this.targetList.length !== 0) {
          this.remove(this.targetList);
        }
      }
    });

    this.emitter.on("facebook_suggested_for_you_hide", (message) => {
      console.log("Received emitter message, " + message);

      this.getTargetList();

      if (message === "on") {
        this.isHideOn = true;
        console.log("facebook suggested for you content hide on");
        this.sendAction(1, "toggle facebook_suggested_for_you_hide");

        if (this.targetList.length > 0) {
          this.remove(this.targetList);
          console.log(this.targetList + " removed");
        } else {
          console.log(
            "cannot find target element for facebook suggested for you content"
          );
        }
      } else if (message === "off") {
        this.isHideOn = false;
        console.log("facebook suggested for you content hide off");
        this.sendAction(0, "toggle facebook_suggested_for_you_hide");
        console.log("this.targetList: ", this.targetList);
        if (this.targetList.length > 0) {
          this.recover(this.targetList);
          console.log(this.targetList + " restored");
        }
      }
      this.$emit("update");
    });
  },
};
</script>
<style lang=""></style>
