<template>
  <div></div>
</template>
<script>
// import { readDataNetflix } from "@contents/components/netflix/timeline/time_tracker_netflix/tracker";
import { readData } from "@/contents/components/youtube/recommended_video/time_tracker/tracker";

export default {
  data() {
    return {
      time_watched: 0,
      state: false,
      target: document.querySelector("[data-uia = 'controls-time-remaining']"),
    };
  },
  mounted() {
    this.emitter.on("netflix_timeline_reflection", (message) => {
      if (message === "on") {
        console.log("netflix player reflection on");
        this.sendAction(1, 'toggle netflix_timeline_reflection');
        let elt = document.createElement("div");
        elt.className = "DP_time_tracker";
        elt.id = "DP_time_tracker_wrapper";
        readData((data) => {
          elt.innerHTML =
            "<h1>You have been on Netflix for</h1>" +
            '<p id = "DP_time_tracker">' +
            Math.round(data.time_watched) +
            "mins</p>" +
            "<h1>Since - " +
            data.installed_at +
            "</h1>";
        });
        document.body.appendChild(elt);
      } else if (message === "off") {
        console.log("youtube recommended video reflection off");
        this.sendAction(0, 'toggle netflix_timeline_reflection');
        let elt = document.getElementById("DP_time_tracker_wrapper");
        document.body.removeChild(elt);
      }

      this.$emit("update");
    });
  },
};
</script>
<style lang="scss">
.DP_time_tracker {
  @apply fixed flex flex-col justify-start items-start border-[1px] border-solid border-cognition p-[24px] top-[80px] right-[12px] min-w-[200px] rounded-[12px] text-white z-extension drop-shadow-xl backdrop-blur-xl bg-dark/60;

  h1 {
    @apply text-[12px] font-cabin;
  }

  p {
    @apply text-[36px] mt-[8px] mb-[16px] font-cabin;
  }
}
</style>