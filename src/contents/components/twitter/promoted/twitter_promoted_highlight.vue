<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      highlight_added: false,
      targetList: [],
      highlightOverlayElementDict: new Map(),
    };
  },
  methods: {
    getTargetList() {
      let elementList = [];
      let retrievedHtmls = document.getElementsByTagName("span");
      for (let i = 0; i < retrievedHtmls.length; i++) {
        if (retrievedHtmls[i].innerHTML.search("See more") !== -1) {
          elementList.push(retrievedHtmls[i]);
        }
      }

      // if this is automatically triggered on loading the page because of a previous config, element may be null
      // in this case we set a timeout and do the retrieve again
      if (elementList.length === 0) {
        setTimeout(() => {
          let retrievedHtmls = document.getElementsByTagName("span");
          for (let i = 0; i < retrievedHtmls.length; i++) {
            if (retrievedHtmls[i].innerHTML.search("See more") !== -1) {
              elementList.push(retrievedHtmls[i]);
            }
          }
        }, 2000);
      }

      if (elementList.length !== 0) {
        // our target is the retrieved element's container, i.e. 17th parent of the retrieved element
        let parentLevel = 17;
        elementList.forEach((element, index, list) => {
          for (let i = 0; i < parentLevel; i++) {
            if (list[index].parentElement === null) break;
            list[index] = list[index].parentNode;
          }
        });
        this.targetList = elementList;

        console.log("targetList: " + this.targetList);
      } else {
        console.log("cannot find target element for twitter promoted highlight");
      }
    },
    createFrictionOverlays() {
      if (this.targetList.length === 0) {
        console.log(
          "Error when creating friction overlay: target is null or undefined"
        );
      } else {
        this.targetList.forEach( (target) => {
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

            if (this.highlightOverlayElementDict.has(target) === false) {
                let newHighlightOverlayElement = document.createElement("div");
                newHighlightOverlayElement.className = "twitter-promoted-highlight";
                newHighlightOverlayElement.style.padding = "5rem";
                newHighlightOverlayElement.style.backgroundColor = "transparent";
                newHighlightOverlayElement.style.borderWidth = "3px";
                newHighlightOverlayElement.style.borderColor = "#DC2625";
                newHighlightOverlayElement.style.pointerEvents = "none";

                newHighlightOverlayElement.appendChild(textNode);

                this.highlightOverlayElementDict.set(target, newHighlightOverlayElement);
                document.body.appendChild(this.highlightOverlayElementDict.get(target));
            }

            this.highlightOverlayElementDict.get(target).style.position = "fixed";
            this.highlightOverlayElementDict.get(target).style.width =
            target.offsetWidth + "px";
            this.highlightOverlayElementDict.get(target).style.height =
            target.offsetHeight + "px";
            this.highlightOverlayElementDict.get(target).style.left =
            target.getBoundingClientRect().left + "px";
            this.highlightOverlayElementDict.get(target).style.top =
            target.getBoundingClientRect().top + "px";
        })
      }
    },
    hideAllOverlays() {
      let fetchedHighlightDivs = document.getElementsByClassName("twitter-promoted-highlight");
      for (let i = 0; i < fetchedHighlightDivs.length; i++) {
        fetchedHighlightDivs[i].style.visibility = "hidden";
      }
    },
    showAllOverlays() {
      let fetchedHighlightDivs = document.getElementsByClassName("twitter-promoted-highlight");
      for (let i = 0; i < fetchedHighlightDivs.length; i++) {
        fetchedHighlightDivs[i].style.visibility = "visible";
      }
    }
  },
  mounted() {

    // check if the url changes, if so, don't show anything
    let previousUrl = "";

    const observer = new MutationObserver(() => {
      if (window.location.href !== previousUrl) {
        console.log(`URL changed from ${previousUrl} to ${window.location.href}`);
        previousUrl = window.location.href;

        // do your thing
        if (window.location.href.indexOf("twitter.com/home") !== -1) {
          console.log("Show all overlays");
          this.showAllOverlays();
        } else {
          console.log("Hide all overlays");
          this.hideAllOverlays();
        }
        
      }
    });
    const config = { subtree: true, childList: true };
    // start observing change
    observer.observe(document, config);


    window.addEventListener("scroll", () => {
      if (this.highlight_added) {
        console.log("scroll from twitter sponsored hightlight");
        this.getTargetList();
        this.createFrictionOverlays();
      }
    });

    this.emitter.on("twitter_promoted_highlight", (message) => {
      console.log(
        "Received emitter message twitter_promoted_highlight, " + message
      );
        this.getTargetList();
       

        if (message === "on") {
          this.highlight_added = true;
          console.log("twitter promoted highlight on");
          this.sendAction(1, "toggle twitter_promoted_highlight");

          if (this.targetList.length !== 0) {
            this.createFrictionOverlays();
          } else {
            console.log(
              "cannot find target element for twitter promoted highlight"
            );
          }
        } else if (message === "off") {
          this.highlight_added = false;
          this.sendAction(0, "toggle twitter_promoted_highlight");
          console.log("twitter promoted highlight off");

          if (this.targetList.length !== 0) {
            this.targetList.forEach((target) => {
                console.log("Removing friction: " + this.highlightOverlayElementDict.get(target));
                document.body.removeChild(this.highlightOverlayElementDict.get(target));
            })
          }
        }
        this.$emit("update");
    });
  },
};
</script>
<style lang=""></style>
