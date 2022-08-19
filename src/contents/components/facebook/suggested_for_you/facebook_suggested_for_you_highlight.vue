<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      targetList: [],
      isHighlightOn: false,
    };
  },
  methods: {
    getTargetList() {
      let elementList = [];
      let element;
      // look for the sponsored component
      var retrievedHtmls = document.getElementsByTagName("span");
      for (var j = 0; j < retrievedHtmls.length; j++) {
        if (
          retrievedHtmls[j].innerHTML.indexOf("Suggested for you") != -1 ||
          retrievedHtmls[j].innerHTML.indexOf("Promoted by Facebook") != -1
        ) {
          element = retrievedHtmls[j];
          elementList.push(element);
          console.log("element found");
        }
      }

      if (elementList.length !== 0) {
        this.targetList = elementList;
      }
    },
    highlightTargetList() {
      if (this.targetList.length > 0) {
        for (var i = 0; i < this.targetList.length; i++) {
          var tempElement = this.targetList[i];
          tempElement.style.color = "#2D88FF";
          tempElement.style.fontWeight = "bold";
          tempElement.style.fontSize = "1.5em";
          tempElement.innerHTML = tempElement.innerHTML.replace(
            "Suggested for you",
            "Promoted by Facebook, Not Followed By You"
          );
          console.log(tempElement + " highlighted");
        }
      } else {
        console.log(
          "cannot find target element for facebook suggested for you content"
        );
      }
    },
    removeHighlightFromTargetList() {
      if (this.targetList.length > 0) {
        for (var i = 0; i < this.targetList.length; i++) {
          var tempElement = this.targetList[i];
          tempElement.style.color = "inherit";
          tempElement.style.fontWeight = "inherit";
          tempElement.style.fontSize = "inherit";
          tempElement.innerHTML = tempElement.innerHTML.replace(
            "Promoted by Facebook, Not Followed By You",
            "Suggested for you"
          );
        }
        console.log(this.targetList + " highlight removed");
      } else {
        console.log(
          "remove highlight failed, cannot find target element for facebook suggested for you content"
        );
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.isHighlightOn) {
        this.getTargetList();
        this.highlightTargetList();
      }
    });

    this.emitter.on("facebook_suggested_for_you_highlight", (message) => {
      console.log("Received emitter message, " + message);

      this.getTargetList();
      this.highlightTargetList();

      if (message === "on") {
        this.isHighlightOn = true;
        console.log("facebook suggested for you content highlight on");
        this.sendAction(1, "toggle facebook_suggested_for_you_highlight");
        if (this.targetList.length !== 0) {
          this.highlightTargetList();
        }
      } else if (message === "off") {
        this.isHighlightOn = false;
        this.removeHighlightFromTargetList();
        console.log("facebook suggested for you content highlight off");
        this.sendAction(0, "toggle facebook_suggested_for_you_highlight");
      }
      this.$emit("update");
    });
  },
};
</script>
<style lang=""></style>
