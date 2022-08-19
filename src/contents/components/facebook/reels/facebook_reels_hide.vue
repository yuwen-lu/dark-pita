<template>
    <div></div>
</template>
<script>
export default {
    data() {
        return {
            target: null,
            reelsIsHide: false,
        };
    },
    methods: {
        getTarget() {
            let element;
            // look for the reels component
            var retrievedHtmls = document.getElementsByTagName("span");
            for (var j = 0; j < retrievedHtmls.length; j++) {
                if (retrievedHtmls[j].innerHTML.indexOf("Reels and short videos") != -1) {
                    // very ugly way, but the whole container is the 20th parent of the h3 tag
                    var parentLevel = 20;
                    element = retrievedHtmls[j];
                    for (var k = 0; k < parentLevel; k++) {
                        if (element.parentElement == null) break;
                        element = element.parentElement;
                    }
                }
            }
            if (element === null || element === undefined) {
                console.log("facebook_reels_hide: cannot find reels component");
            } else {
                console.log("facebook_reels_hide retrieved element", element);
                this.target = element;
            }
        }
    },
    mounted() {

        window.addEventListener('scroll', () => {
            console.log("scroll from facebook_reels_hide, reelsIsHide: " + this.reelsIsHide);
            if (this.reelsIsHide) {
                this.getTarget();
                if (this.target !== null && this.target !== undefined) {
                    this.target.style.visibility = 'hidden';
                    console.log("Removed facebook reels: " + this.target.innerHTML);
                } else {
                    console.log("Message on, but cannot find target element for facebook reels");
                }  
            }
        });

        this.emitter.on('facebook_reels_hide', (message) => {
            console.log("facebook_reels_hide message: ", message);

            this.getTarget();

            if (message === 'on') {
                this.reelsIsHide = true;
                console.log('facebook reels content hide on');
                this.sendAction(1, 'toggle facebook_reels_hide');
                this.getTarget();

                if (this.target !== null && this.target !== undefined) {
                    this.target.style.visibility = "hidden";
                    console.log("Removed facebook reels: " + this.target.innerHTML);
                } else {
                    console.log("Message on, but cannot find target element for facebook reels");
                }                
            } else if (message === 'off') {
                this.reelsIsHide = false;
                console.log('facebook reels content hide off');
                this.sendAction(0, 'toggle facebook_reels_hide');
                if (this.target !== null && this.target !== undefined) {
                    this.target.style.display = "visible";
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
