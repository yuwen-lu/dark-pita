<template>
    <div></div>
</template>
<script>
export default {
    data() { 
        return {
            friction_added: false,
            target: null,
            frictionOverlayElement: null,
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
            if(element !== null && element !== undefined) {
                this.target = element;
            } else {
                console.log("cannot find target element for facebook reels");
            }
        },
        createFrictionOverlay() {
            if (this.target === null || this.target === undefined) {
                console.log("Error when creating friction overlay: target is null or undefined");
            } else {

                let textNode = document.createElement("h2");
                textNode.innerHTML = "This content is suggested by Twitter algorithm. <br /> <br /> It was hidden to prevent you from spending excessive time on it.";
                textNode.style.color = '#fff';
                textNode.style.textAlign = "center";
                textNode.style.fontSize = "1rem";
                
                let buttonNode = document.createElement("button");
                buttonNode.innerHTML = "Reveal";
                buttonNode.style.fontFamily = "Cabin";
                buttonNode.style.width = "7rem";
                buttonNode.style.height = "2rem";
                buttonNode.style.padding = "0.5rem";
                buttonNode.style.color = "#1C9BEF";
                buttonNode.style.textDecoration = "underline";
                buttonNode.style.backgroundColor = "transparent";
                buttonNode.addEventListener("click", () => {
                    this.frictionOverlayElement.style.display = "none";
                });


                if (this.frictionOverlayElement === null) {
                    
                    this.frictionOverlayElement = document.createElement("div");
                    
                    this.frictionOverlayElement.style.display = "flex";
                    this.frictionOverlayElement.style.flexDirection = "column";
                    this.frictionOverlayElement.style.justifyContent = "space-evenly";
                    this.frictionOverlayElement.style.alignItems = "center";
                    this.frictionOverlayElement.style.padding = "5rem";

                    this.frictionOverlayElement.appendChild(textNode);
                    this.frictionOverlayElement.appendChild(buttonNode);
                    
                    document.body.appendChild(this.frictionOverlayElement);
                } 
                this.frictionOverlayElement.style.position = "fixed";
                this.frictionOverlayElement.style.width = this.target.offsetWidth + "px";
                this.frictionOverlayElement.style.height = this.target.offsetHeight + "px";
                this.frictionOverlayElement.style.left = this.target.getBoundingClientRect().left + "px";
                this.frictionOverlayElement.style.top = this.target.getBoundingClientRect().top + "px";
                this.frictionOverlayElement.style.backgroundColor = "#000000";
                this.frictionOverlayElement.style.zIndex = "1";

                // textNode.style.top = this.frictionOverlayElement.style.height / 2 + "px";
                // buttonNode.style.top = parseInt(textNode.style.top) + parseInt(textNode.offsetHeight) + parseInt(buttonNode.offsetHeight) + "px";

                
            }
        }
    },
    mounted() {

        window.addEventListener('scroll', () => {
            if(this.friction_added) {
                console.log("scroll from twitter sponsored friction");
                this.getTarget();
                this.createFrictionOverlay();
            }
        });

        this.emitter.on('twitter_promoted_friction', (message) => {

            console.log("Received emitter message, " + message);

            let element;
            let retrievedHtmls = document.getElementsByTagName("span");
            for (let i = 0; i < retrievedHtmls.length; i++) {
                if (retrievedHtmls[i].innerHTML.search("See more") !== -1) {
                    element = retrievedHtmls[i];
                    break;
                }
            }

            console.log("element: " + element);

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
        
            if (message === 'on') {
                this.friction_added = true;
                console.log('twitter promoted friction on');
                this.sendAction(1, 'toggle twitter_promoted_friction');

                if (element !== null && element !== undefined) {
                    this.target = element;
                    // this.remove(this.target);
                    // console.log(this.target + " removed");
                    this.createFrictionOverlay();
                } else {
                    console.log("cannot find target element for twitter promoted friction");
                }
            } else if (message === 'off') {
                friction_added = false;
                console.log('twitter promoted friction off');
                this.sendAction(0, 'toggle twitter_promoted_friction');
                console.log("this.target: ", this.target);
                if (this.target !== null && this.target !== undefined) {
                    // this.recover(this.target);
                    // console.log(this.target + " restored");
                    document.body.removeChild(this.frictionOverlayElement);
                }
            }
            this.$emit('update');
        });
    }
};
</script>
<style lang=""></style>
