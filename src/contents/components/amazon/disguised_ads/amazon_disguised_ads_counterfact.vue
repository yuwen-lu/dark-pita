<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll("[id^=CardInstance]")[0],
    };
  },
  methods: {
    changeCursor(node, type) {
      let nodeList = node.childNodes;
      for (let i = 0; i < nodeList.length; i++) {
        let childNode = nodeList[i];
        if (childNode.nodeType == 1) {
          childNode.style.cssText =
            'cursor: url("https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/cursor.cur?v=1660230130304"), auto;';
          if (type === "default") {
            childNode.style.cssText = "";
          }
          this.changeCursor(childNode, type);
        }
      }
    },
  },
  mounted() {
    this.emitter.on("amazon_disguised_ads_counterfact", (message) => {
      this.target = document.querySelectorAll("[id^=CardInstance]")[0];

      if (message === "on") {
        console.log("amazon disguised ads counterfact on");
        this.sendAction(1, 'toggle amazon_disguised_ads_counterfact');
        this.changeCursor(this.target, "warning");
        this.target.style.cssText =
          "border-width: 4px; border-color: rgb(220 38 38);";
        let tip = document.createElement("div");
        tip.setAttribute("id", "amazon_disguised_ads_disclosure_tip_id");
        tip.appendChild(
          document.createTextNode(
            "These may be recommended because the company paid Amazon, not because they fit your needs."
          )
        );
        tip.style.cssText =
          "background-color: rgb(220 38 38); color: rgb(255 255 255); font-size: 20px; position: absolute; top: 0; right: 0; padding: 4px;";
        this.target.appendChild(tip);
      } else if (message === "off") {
        console.log("amazon disguised ads counterfact off");
        this.sendAction(0, 'toggle amazon_disguised_ads_counterfact');
        this.changeCursor(this.target, "default");
        this.target.style.cssText = "";
        let tip = document.getElementById(
          "amazon_disguised_ads_disclosure_tip_id"
        );
        this.target.removeChild(tip);
      }

      this.$emit("update");
    });
  },
};
</script>
<style lang="scss" scoped></style>
