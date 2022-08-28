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
                if (retrievedHtmls[j].innerHTML.indexOf("Reels and short videos") != -1) {
                    var parentLevel = 20;
                    element = retrievedHtmls[j];
                    for (var k = 0; k < parentLevel; k++) {
                        if (element.parentElement == null) break;
                        element = element.parentElement;
                    }
                }
            }
            if(element !== null && element !== undefined) {
                this.target = element;
            } else {
                console.log("Message on, but cannot find target element for facebook reels");
            }
        },
        createFrictionOverlay() {
            if (this.target === null || this.target === undefined) {
                console.log("Error when creating friction overlay: target is null or undefined");
            } else {

                let textNode = document.createElement("h2");
                textNode.innerHTML = "This content is suggested by Facebook algorithm. <br /> <br /> It was hidden to prevent you from spending excessive time on it.";
                textNode.style.color = '#E3E6EA';
                textNode.style.textAlign = "center";
                textNode.style.fontSize = "1rem";
                
                let buttonNode = document.createElement("button");
                buttonNode.innerHTML = "Reveal";
                buttonNode.style.fontFamily = "Cabin";
                buttonNode.style.width = "7rem";
                buttonNode.style.height = "2rem";
                buttonNode.style.padding = "0.5rem";
                buttonNode.style.color = "#E3E6EA";
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
                this.frictionOverlayElement.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                this.frictionOverlayElement.style.zIndex = "1";

            }
        }
    },
    mounted() {

        window.addEventListener('scroll', () => {
            if(this.friction_added) {
                this.getTarget();
                console.log("After scroll, target position: top - " + this.target.getBoundingClientRect().top + ", left - " + this.target.getBoundingClientRect().left);
                this.createFrictionOverlay();
            }
        });

        this.emitter.on('facebook_reels_friction', (message) => {
            console.log("facebook_reels_friction message: ", message);

            this.getTarget();

            if (message === 'on') {
                this.friction_added = true;
                console.log('facebook reels content friction on');
                this.sendAction(1, 'toggle facebook_reels_friction');

                if (this.target != null && this.target !== undefined) {
                    this.createFrictionOverlay();
                    console.log(this.frictionOverlayElement + " friction added");
                } else {
                    console.log("Message on, but cannot find target element for facebook reels");
                }                
            } else if (message === 'off') {
                this.friction_added = false;
                console.log('facebook reels content friction off');
                this.sendAction(0, 'toggle facebook_reels_friction');
                if (this.frictionOverlayElement != null) {
                    document.body.removeChild(this.frictionOverlayElement);
                } else {
                    console.log("Message on, but cannot find target element for facebook reels");
                }
            }
            this.emitter.emit('update');
        });
    }
};
</script>
<style lang=""></style>
