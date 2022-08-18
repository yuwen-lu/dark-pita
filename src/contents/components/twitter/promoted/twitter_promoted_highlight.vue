<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      highlight_added: false,
      target: null,
      highlightOverlayElement: null,
    };
  },
  methods: {
    getTarget() {
      let element;
      // look for the reels component
      var retrievedHtmls = document.getElementsByTagName("span");
      for (var j = 0; j < retrievedHtmls.length; j++) {
        if (retrievedHtmls[j].innerHTML.indexOf("See more") != -1) {
          var parentLevel = 17;
          element = retrievedHtmls[j];
          for (var k = 0; k < parentLevel; k++) {
            if (element.parentElement == null) break;
            element = element.parentElement;
          }
          break;
        }
      }
      if (element !== null && element !== undefined) {
        this.target = element;
      } else {
        console.log("cannot find target element for twitter promoted");
      }
    },
    createFrictionOverlay() {
      if (this.target === null || this.target === undefined) {
        console.log(
          "Error when creating friction overlay: target is null or undefined"
        );
      } else {
        let textNode = document.createElement("h2");
        textNode.innerHTML = "Promoted Content";
        textNode.style.color = "#ffffff";
        textNode.style.backgroundColor = "#DC2625";
        textNode.style.textAlign = "right";
        textNode.style.fontSize = "1rem";
        textNode.style.fontFamily = "Cabin";
        textNode.style.padding = "0.5rem";

        textNode.style.position = "absolute";
        textNode.style.top = "0";
        textNode.style.right = "0";

        if (this.highlightOverlayElement === null) {
          this.highlightOverlayElement = document.createElement("div");
          this.highlightOverlayElement.style.padding = "5rem";
          this.highlightOverlayElement.appendChild(textNode);

          document.body.appendChild(this.highlightOverlayElement);
        }
        this.highlightOverlayElement.style.position = "fixed";
        this.highlightOverlayElement.style.width =
          this.target.offsetWidth + "px";
        this.highlightOverlayElement.style.height =
          this.target.offsetHeight + "px";
        this.highlightOverlayElement.style.left =
          this.target.getBoundingClientRect().left + "px";
        this.highlightOverlayElement.style.top =
          this.target.getBoundingClientRect().top + "px";
        this.highlightOverlayElement.style.backgroundColor = "transparent";
        this.highlightOverlayElement.style.borderWidth = "4px";
        this.highlightOverlayElement.style.borderColor = "#DC2625";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.highlight_added) {
        console.log("scroll from twitter sponsored hightlight");
        this.getTarget();
        this.createFrictionOverlay();
      }
    });

    this.emitter.on("twitter_promoted_highlight", (message) => {
      console.log(
        "Received emitter message twitter_promoted_highlight, " + message
      );
        let element;
        let retrievedHtmls = document.getElementsByTagName("span");
        for (let i = 0; i < retrievedHtmls.length; i++) {
          if (retrievedHtmls[i].innerHTML.search("See more") !== -1) {
            element = retrievedHtmls[i];
            break;
          }
        }

        console.log("element: " + element);

        // if this is automatically triggered on loading the page because of a previous config, element may be null
        // in this case we set a timeout and do the retrieve again
        if (element === null || element === undefined) {
            console.log("element null, try to retrieve again");
            setTimeout(() => {
                let retrievedHtmls = document.getElementsByTagName("span");
                for (let i = 0; i < retrievedHtmls.length; i++) {
                    if (retrievedHtmls[i].innerHTML.search("See more") !== -1) {
                        element = retrievedHtmls[i];
                        break;
                    }
                }
            }, 2000);
        }

        if (element !== null && element !== undefined) {
            // our target is the retrieved element's container, i.e. 17th parent of the retrieved element
            let parentLevel = 17;
            for (let i = 0; i < parentLevel; i++) {
                if (element.parentElement !== null) {
                    element = element.parentNode;
                } else {
                    break;
                }
            }
            console.log("container element: " + element);
        }

       

        if (message === "on") {
          this.highlight_added = true;
          console.log("twitter promoted highlight on");
          this.sendAction(1, "toggle twitter_promoted_highlight");

          if (element !== null && element !== undefined) {
            this.target = element;
            // this.remove(this.target);
            // console.log(this.target + " removed");
            this.createFrictionOverlay();
          } else {
            console.log(
              "cannot find target element for twitter promoted highlight"
            );
          }
        } else if (message === "off") {
          this.highlight_added = false;
          this.sendAction(0, "toggle twitter_promoted_highlight");
          console.log("twitter promoted highlight off");

          console.log("this.target: ", this.target);
          if (this.target !== null && this.target !== undefined) {
            // this.recover(this.target);
            // console.log(this.target + " restored");
            document.body.removeChild(this.highlightOverlayElement);
          }
        }
        this.$emit("update");
    });
  },
};
</script>
<style lang=""></style>
