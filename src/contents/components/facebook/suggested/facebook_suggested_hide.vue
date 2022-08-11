<template>
    <div></div>
</template>
<script>
export default {
    data() {},
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

                var retrievedHtmls = document.getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn iv3no6db jq4qci2q a3bd9o3v b1v8xokw m9osqain');
                for (var i = 0; i < retrievedHtmls.length; i++) {
                    if (retrievedHtmls[i].innerHTML.indexOf("People You May Know") != -1) {
                        this.target = retrievedHtmls[i].innerHTML;
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
