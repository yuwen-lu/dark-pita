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
                    selectors[i].parentNode.removeChild(selectors[0]);
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
        this.emitter.on('facebook_suggested_hide', (massage) => {
            if (massage === 'on') {
                console.log('facebook suggested content hide on');

                var retrievedHtmls = document.getElementsByTagName("h3");
                for (var j = 0; j < retrievedHtmls.length; j++) {
                    if (retrievedHtmls[j].innerHTML.indexOf(this.targets[i]) != -1) {
                        // very ugly way, but the whole container is the 4th parent of the h3 tag
                        element = retrievedHtmls[j].parentElement.parentElement.parentElement.parentElement;
                    }
                }

                this.remove(this.target);
            } else if (massage === 'off') {
                console.log('facebook suggested content hide off');
                this.recover(this.target);
            }
        });
    }
};
</script>
<style lang=""></style>
