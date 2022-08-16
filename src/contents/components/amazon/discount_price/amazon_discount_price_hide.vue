<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll("[id^=apex_desktop]")[0],
      originalContent:
        document.querySelectorAll("[id^=apex_desktop]")[0].innerHTML,
      price: document.querySelector(".a-offscreen"),
    };
  },
  methods: {},
  mounted() {
    this.emitter.on("amazon_discount_price_hide", (message) => {
      this.target = document.querySelectorAll("[id^=apex_desktop]")[0];

      if (message === "on") {
        console.log("amazon discount price hide on");
        // the line below is our original method
        // this.target.style.display = "none";
        // show the ultimate price only, not other marketing jargons
        document.querySelector("#apex_desktop").textContent =
          document.querySelector(".a-offscreen").textContent;
        // apply tailwind css
        document.querySelector("#apex_desktop").classList.add("text-2xl");
        this.target.style.color = "rgb(159,47,47)";
      } else if (message === "off") {
        console.log("amazon discount price hide off");
        this.target.style.display = "visible";
        // document.querySelector("#apex_desktop") = this.target;
      }

      this.$emit("update");
    });
  },
};
</script>
<style lang=""></style>
