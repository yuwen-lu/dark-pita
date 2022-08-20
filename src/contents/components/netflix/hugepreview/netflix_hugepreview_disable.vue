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
        this.sendAction(1, "toggle netflix_hugepreview_disable");

        if (document.querySelector(".nfp") !== null) {
          document.querySelector(".nfp").remove();
        }

        // nfp
        const image = document.createElement("img");
        image.src = this.imgLink;
        console.log(image);
        image.style.width = "100%";
        document
          .querySelector(".motion-background-component")
          .appendChild(image);
        if (
          document
            .querySelector("[aria-label='Turn audio on']")
            .getAttribute("data-uia") === "audio-toggle-unmuted"
        ) {
          document.querySelector("[aria-label='Turn audio on']").click();
        }
      } else if (message === "off") {
        this.sendAction(0, "toggle netflix_hugepreview_disable");
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