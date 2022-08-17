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
        this.emitter.on('twitter_promoted_hide', (message) => {

            alert("Received emitter message, " + message);

            let element;
            let retrievedHtmls = document.getElementsByTagName("span");
            for (let i = 0; i < retrievedHtmls.length; i++) {
                if (retrievedHtmls[i].innerHTML.search("See more") !== -1) {
                    element = retrievedHtmls[i];
                    break;
                }
            }

            alert("element: " + element);

            // our target is the retrieved element's container, i.e. 17th parent of the retrieved element
            let parentLevel = 17;
            for (let i = 0; i < parentLevel; i++) {
                if (element.parentElement !== null) {
                    element = element.parentNode;
                } else {
                    break;
                }
            }

            alert("container element: " + element);
        
            if (message === 'on') {
                alert('twitter promoted hide on');

                if (element !== null && element !== undefined) {
                    this.target = element;
                    this.remove(this.target);
                    console.log(this.target + " removed");
                } else {
                    console.log("cannot find target element for twitter promoted hide");
                }
            } else if (message === 'off') {
                console.log('twitter what\'s happening hide off');
                console.log("this.target: ", this.target);
                if (this.target !== null && this.target !== undefined) {
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
