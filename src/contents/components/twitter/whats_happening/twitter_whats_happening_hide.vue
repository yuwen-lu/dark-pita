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
        this.emitter.on('twitter_whats_happening_hide', (message) => {

            console.log("Received emitter message, " + message);


            let element = document.querySelector("[aria-label=\"Timeline: Trending now\"]");
        
            if (message === 'on') {
                console.log('twitter what\'s happening hide on');

                if (element !== null && element !== undefined) {
                    this.target = element;
                    this.remove(this.target);
                    console.log(this.target + " removed");
                } else {
                    console.log("cannot find target element for twitter what\'s going on hide");
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
