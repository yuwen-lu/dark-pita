<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      friction_added: false,
      targetList: [],
      frictionOverlayElementDict: new Map(),
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
        console.log("cannot find target element for twitter promoted friction");
      }
    },
    createFrictionOverlays() {
      if (this.targetList.length === 0) {
        console.log(
          "Error when creating friction overlay: target is null or undefined"
        );
      } else {
        console.log(
          "Creating friction overlays for targetList: " + this.targetList
        );
        this.targetList.forEach((target, index) => {
          // if it's the first time creating the friction overlay
          if (this.frictionOverlayElementDict.has(target) === false) {
            console.log("Creating new overlay...");
            let newFrictionOverlayElement = document.createElement("div");
            newFrictionOverlayElement.style.display = "flex";
            newFrictionOverlayElement.style.flexDirection = "column";
            newFrictionOverlayElement.style.justifyContent = "space-evenly";
            newFrictionOverlayElement.style.alignItems = "center";
            newFrictionOverlayElement.style.padding = "5rem";
            newFrictionOverlayElement.style.position = "fixed";
            newFrictionOverlayElement.style.backgroundColor = "#fff";
            newFrictionOverlayElement.style.zIndex = "1";
            this.frictionOverlayElementDict.set(target, newFrictionOverlayElement);
            // add to the document body html
            document.body.appendChild(this.frictionOverlayElementDict.get(target));

            // initialize text and button for the overlay
            let textNode = document.createElement("h2");
            let buttonNode = document.createElement("button");
            // set value for text and button
            textNode.innerHTML =
              "This content is suggested by Twitter algorithm. <br /> <br /> It was hidden to prevent you from spending excessive time on it.";
            textNode.style.color = "#000";
            textNode.style.textAlign = "center";
            textNode.style.fontSize = "1rem";

            buttonNode.innerHTML = "Reveal";
            buttonNode.style.fontFamily = "Cabin";
            buttonNode.style.width = "7rem";
            buttonNode.style.height = "2rem";
            buttonNode.style.padding = "0.5rem";
            buttonNode.style.color = "#1C9BEF";
            buttonNode.style.textDecoration = "underline";
            buttonNode.style.backgroundColor = "transparent";
            buttonNode.addEventListener("click", () => {
              this.frictionOverlayElementDict.get(target).style.display = "none";
            });
            // add text and button to the overlay
            this.frictionOverlayElementDict.get(target).appendChild(textNode);
            this.frictionOverlayElementDict.get(target).appendChild(buttonNode);
          }

          // if it's not the first time to create the friction overlay, we are just updating its value on scroll event
          this.frictionOverlayElementDict.get(target).style.width =
            target.offsetWidth + "px";
          this.frictionOverlayElementDict.get(target).style.height =
            target.offsetHeight + "px";
          this.frictionOverlayElementDict.get(target).style.left =
            target.getBoundingClientRect().left + "px";
          this.frictionOverlayElementDict.get(target).style.top =
            target.getBoundingClientRect().top + "px";
        });
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.friction_added) {
        console.log("scroll from twitter sponsored friction");
        this.getTargetList();
        this.createFrictionOverlays();
      }
    });

    this.emitter.on("twitter_promoted_friction", (message) => {
      console.log("Received emitter message, " + message);
      this.getTargetList();

      if (message === "on") {
        this.friction_added = true;
        console.log("twitter promoted friction on");
        this.sendAction(1, "toggle twitter_promoted_friction");

        if (this.targetList.length > 0) {
          this.createFrictionOverlays();
        } else {
          console.log(
            "this.targetList empty for twitter promoted friction, cannot create friction overlay"
          );
        }
      } else if (message === "off") {
        this.friction_added = false;
        console.log("twitter promoted friction off");
        this.sendAction(0, "toggle twitter_promoted_friction");
        console.log("this.targetList: ", this.targetList);
        if (this.targetList.length > 0) {
          this.targetList.forEach((target) => {
            console.log("Removing child: " + this.frictionOverlayElementDict.get(target));
            document.body.removeChild(this.frictionOverlayElementDict.get(target));
          });
        }
      }
      this.$emit("update");
    });
  },
};
</script>
<style lang=""></style>
