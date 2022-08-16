<template>
    <div></div>
</template>
<script>
export default {
    data() { },
    methods: {
        remove(selectors) {
            selectors.removeNode = [];
            if (selectors.length != undefined) {
                let len = selectors.length;
                for (let i = 0; i < len; i++) {
                    selectors.removeNode.push({
                        parent: selectors[i].parentNode,
                        inner: selectors[i].outerHTML,
                        next: selectors[i].nextSibling
                    });
                }
                for (let i = 0; i < len; i++)
                    selectors[i].parentNode.removeChild(selectors[i]);
            } else {
                selectors.removeNode.push({
                    parent: selectors.parentNode,
                    inner: selectors.outerHTML,
                    next: selectors.nextSibling
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
                    let div = document.createElement('div');
                    div.innerHTML = node.inner;
                    node.parent.insertBefore(div.childNodes[0], node.next);
                }
            }
        }
    },
    mounted() {
        this.emitter.on('facebook_reels_hide', (message) => {
            console.log("facebook_reels_hide message: ", message);

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
                    console.log("element", element);
                }
            }

            if (message === 'on') {
                console.log('facebook reels content hide on');
                console.log("Trying to remove facebook reels, target: " + element.innerHTML);

                if (element != null && element !== undefined) {
                    this.remove(element)
                    console.log("Removed facebook reels: " + element.innerHTML);
                    console.log("New element style: " + element.style);
                } else {
                    console.log("Message on, but cannot find target element for facebook reels");
                }                
            } else if (message === 'off') {
                console.log('facebook reels content hide off');
                if (element != null) {
                    this.recover(element);
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
