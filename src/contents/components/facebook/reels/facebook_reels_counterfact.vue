<template>
    <div></div>
</template>
<script>
export default {
    data() { },
    methods: {},
    mounted() {
        this.emitter.on('facebook_reels_counterfact', (message) => {
            console.log("facebook_reels_counterfact message: ", message);

            let element;
            // look for the reels component
            var retrievedHtmls = document.getElementsByTagName("span");
            for (var j = 0; j < retrievedHtmls.length; j++) {
                if (retrievedHtmls[j].innerHTML.indexOf("Reels and short videos") != -1) {
                    element = retrievedHtmls[j];
                }
            }

            if (message === 'on') {
                console.log('facebook reels content counterfact on');
                this.sendAction(1, 'toggle facebook_reels_counterfact');
                console.log("Trying to add counterfactual thinking on facebook reels: " + element.innerHTML);

                if (element != null && element !== undefined) {
                    this.target = element;
                    // this.target.style.color = '#2D88FF';
                    this.target.style.fontWeight = 'bold';
                    this.target.style.fontSize = '1.5em';
                    this.target.innerHTML = this.target.innerHTML.replace("Reels and short videos", "Reels Not Followed by You, Promoted by Facebook Algorithm");
                    console.log(this.target + " counterfactual thinking added");
                } else {
                    console.log("Message on, but cannot find target element for facebook reels");
                }                
            } else if (message === 'off') {
                console.log('facebook reels content counterfact off');
                this.sendAction(0, 'toggle facebook_reels_counterfact');
                if (this.target != null) {
                    // this.target.style.style.color = 'inherit';
                    this.target.style.fontWeight = 'inherit';
                    this.target.style.fontSize = 'inherit';
                    this.target.innerHTML = this.target.innerHTML.replace("Reels Not Followed by You, Promoted by Facebook Algorithm", "Reels and short videos");
                } else {
                    console.log("cannot find target element for facebook reels");
                }
            }
            this.emitter.emit('update');
        });
    }
};
</script>
<style lang=""></style>
