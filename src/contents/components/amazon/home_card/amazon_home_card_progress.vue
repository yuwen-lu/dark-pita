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
        let elt = document.createElement("div");
        elt.className = "DP_money_tracker";
        elt.id = "DP_money_tracker_wrapper";
        // elt.innerHTML =
        //   '<h1>You have already spent</h1>' +
        //   '<p id = "DP_money_tracker">$126</p>' +
        //   '<h1>Since - 2022-08-16</h1>';
        elt.innerHTML =
          '<h1>You have spent</h1><div class="circular-progress"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="title" role="graphic"> <title id="title">svg circular progress bar</title> <circle cx="50" cy="50" r="40" ></circle> <circle cx="50" cy="50" r="40" id="pct-ind"></circle> </svg> <p class="pct">$126</p></div>';
        document.body.appendChild(elt);
      } else if (message === "off") {
        console.log("amazon home card progress off");
        let elt = document.getElementById("DP_time_tracker_wrapper");
        document.body.removeChild(elt);
      }

      this.$emit("update");
    });
  },
};
</script>
<style lang="scss">
.DP_money_tracker {
  @apply fixed flex flex-col justify-center items-center border-[1px] border-solid border-money p-[24px] top-[80px] right-[12px] min-w-[160px] rounded-[12px] text-center text-white z-extension drop-shadow-xl backdrop-blur-xl bg-dark/60;

  h1 {
    @apply text-[16px] font-cabin;
  }

  p {
    @apply text-[24px] font-cabin;
  }
}

$circle-circumstance: (2 * calc(22 / 7) * 40);

.circular-progress {
  position: relative;
  display: inline-block;
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
