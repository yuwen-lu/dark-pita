<template>
  <div></div>
</template>
<script>
export default {
  data() {},
  mounted() {
    this.emitter.on("amazon_home_card_progress", (message) => {
      if (message === "on") {
        console.log("amazon home card progress on");
        this.sendAction(1, "toggle amazon_home_card_progress");
        let elt = document.createElement("div");
        elt.className = "DP_money_tracker";
        elt.id = "DP_money_tracker_wrapper";

        // Create the close button as a separate element
        const closeButton = document.createElement("button");
        closeButton.innerHTML =
          '<svg class="DP_alert_close" width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.397 4.554.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084-.073.084Z"fill="#FFFFFF"/></svg>';
        // Add the event listener to the close button
        closeButton.addEventListener("click", this.closeAmazonHomeCardProgress);

        // Append the close button to the elt element
        elt.appendChild(closeButton);

        const mainContent = document.createElement("div");
        mainContent.innerHTML =
          '<h1>Dark Patterns on Amazon has affected your decisions on about 75% of your purchases.</h1><div class="circular-progress"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="title" role="graphic"> <title id="title">svg circular progress bar</title> <circle cx="50" cy="50" r="40" ></circle> <circle cx="50" cy="50" r="40" id="pct-ind"></circle> </svg> <p class="pct">$126</p></div>';
        elt.appendChild(mainContent);
        document.body.appendChild(elt);
      } else if (message === "off") {
        this.closeAmazonHomeCardProgress();
      }

      this.$emit("update");
    });
  },
  methods: {
    closeAmazonHomeCardProgress() {
      console.log("amazon home card progress off");
      this.sendAction(0, "toggle amazon_home_card_progress");
      let elt = document.getElementById("DP_money_tracker_wrapper");
      document.body.removeChild(elt);
    },
  },
};
</script>
<style lang="scss">
.DP_money_tracker {
  @apply fixed flex flex-col justify-center items-center border-[1px] border-solid border-money p-[24px] top-[80px] right-[12px] w-[220px] rounded-[12px] text-center text-white z-extension drop-shadow-xl backdrop-blur-xl bg-dark/60 select-none;

  h1 {
    @apply text-[12px] leading-[16px] font-cabin mt-4;
  }

  p {
    @apply text-[24px] font-cabin;
  }

  button {
    @apply absolute top-2 right-2;
  }
}

$circle-circumstance: (2 * calc(22 / 7) * 40);

.circular-progress {
  position: relative;
  display: inline-block;
  margin-top: 8px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  svg {
    transform: rotate(270deg);
  }
  circle {
    stroke-width: 15;
    fill: none;
    stroke-linecap: round;
  }
  circle:nth-of-type(1) {
    stroke: #dee2e6;
  }
  circle:nth-of-type(2) {
    stroke: rgba(250, 188, 5);
    stroke-dasharray: $circle-circumstance;

    // here we multiply the circle circumstance by an opposite number of what we want it to present
    // so here we want it to present 70% which means 0.7 and the opposite of that is 0.3 ( 1 - 0.7 )
    stroke-dashoffset: (0.3 * $circle-circumstance);
  }

  .pct {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
