<template>
  <div id="DP_console" class="DP_console">
    <textarea
      id="message"
      rows="4"
      class="DP_text_area"
      placeholder="Your message..."
      v-model="diary"
    ></textarea>
    <button @click="sendDiary">
      Screenshot & Send
    </button>
    <button @click="openAlert" :disabled="isAlert || notSupport">
      Open Banner
    </button>
    <p v-show="notSupport">This page is not supported by Dark Pita.</p>
  </div>
</template>
<script>
export default {
  props: {
    notSupport: {
      type: Boolean
    },
    isAlert: {
      type: Boolean
    }
  },
  data() {
    return {
      diary: ''
    };
  },
  methods: {
    sendDiary() {
      console.log(this.diary);
    },
    openAlert() {
      this.$emit('openAlert', 'open alert');
    }
  }
};
</script>
<style lang="scss" scoped>
.DP_console {
  @apply flex flex-col gap-[8px] fixed right-0 top-0 p-[16px] w-[400px] font-cabin bg-background z-infinite text-white text-[12px];

  .DP_text_area {
    @apply block p-[10px] w-full h-[200px] text-[14px] rounded-lg border-[1px] bg-dark border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500;
  }

  button {
    @apply bg-transparent w-full hover:bg-white font-cabin font-normal text-[14px] text-white hover:text-dark px-[24px] py-[8px] rounded-[4px] border disabled:cursor-not-allowed disabled:hover:bg-dark disabled:bg-dark disabled:hover:text-gray-400 disabled:text-gray-400 disabled:border-dark;
  }

  p {
    @apply mt-[12px] text-white text-[12px] text-gray-400;
  }
}
</style>
