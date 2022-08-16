<template>
    <div></div>
</template>
<script>
export default {
    data() { },
    methods: { },
    mounted() {
        this.emitter.on('facebook_suggested_for_you_highlight', (message) => {

            console.log("Received emitter message, " + message);

            let elementList = [];
            let element;
            // look for the sponsored component
            var retrievedHtmls = document.getElementsByTagName("span");
            for (var j = 0; j < retrievedHtmls.length; j++) {
                if (retrievedHtmls[j].innerHTML.indexOf("Suggested for you") != -1) {
                    elementList.push(element);
                }
            }

            if (message === 'on') {
                console.log('facebook suggested for you content highlight on');

                if (elementList.length > 0) {
                    for (var i = 0; i < elementList.length; i++) {
                        var tempElement = elementList[i];
                        tempElement.style.backgroundColor = '#ff0000';
                    }
                    
                    console.log(element + " highlighted");
                } else {
                    console.log("cannot find target element for facebook suggested for you content");
                }
            } else if (message === 'off') {
                console.log('facebook suggested for you content highlight off');
                if (elementList.length > 0) {
                    for (var i = 0; i < elementList.length; i++) {
                        var tempElement = elementList[i];
                        tempElement.style.backgroundColor = 'inherit';
                    }

                    console.log(this.target + " highlight removed");
                }
            }
        });
    }
};
</script>
<style lang=""></style>
