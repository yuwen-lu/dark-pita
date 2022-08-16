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
        this.emitter.on('facebook_suggested_for_you_hide', (message) => {

            console.log("Received emitter message, " + message);

            let elementList = [];
            let element;
            // look for the sponsored component
            var retrievedHtmls = document.getElementsByTagName("span");
            for (var j = 0; j < retrievedHtmls.length; j++) {
                if (retrievedHtmls[j].innerHTML.indexOf("Suggested for you") != -1 || retrievedHtmls[j].innerHTML.indexOf("Promoted by Facebook") != -1) {
                    // very ugly way, but the whole container is the 11th parent of the a tag
                    var parentLevel = 7;
                    element = retrievedHtmls[j];
                    for (var k = 0; k < parentLevel; k++) {
                        element = element.parentElement;
                    }
                    elementList.push(element);
                }
            }

            if (message === 'on') {
                console.log('facebook suggested for you content hide on');

                if (elementList.length > 0) {
                    this.target = elementList;
                    this.remove(elementList);
                    console.log(this.target + " removed");
                } else {
                    console.log("cannot find target element for facebook suggested for you content");
                }
            } else if (message === 'off') {
                console.log('facebook suggested for you content hide off');
                if (elementList.length > 0) {
                    this.target = elementList;
                    this.recover(this.target);
                    console.log(this.target + " restored");
                }
            }
            this.$emit('update');
        });
    }
};
</script>
<style lang=""></style>
