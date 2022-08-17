<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.getElementById("preview"),
      previewPlayer: document.querySelector(".nf-player-container"),
      previewWrapper: document.querySelector(".motion-background-component"),
      imgLink: document.querySelector(".static-image").src,
    };
  },
  methods: {},
  mounted() {
    this.emitter.on("netflix_hugepreview_disable", (message) => {
      let that = this;
      //   setTimeout(() => {
      if (message === "on") {
        if (document.querySelector(".nfp") !== null) {
          document.querySelector(".nfp").remove();
        }
        // nfp
        const image = document.createElement("img");
        image.src = this.imgLink;
        console.log(image);
        document
          .querySelector(".motion-background-component")
          .appendChild(image);
      } else if (message === "off") {
        alert(
          "If you want the Preview on Featured Content back, please click Reset. Thanks :D"
        );
      }

      this.$emit("update");
      //   }, 2000);
    });
  },
};
</script>
<style lang=""></style>