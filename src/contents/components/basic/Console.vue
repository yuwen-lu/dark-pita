<template>
  <div id="DP_console" class="DP_console">
    <textarea
      id="message"
      rows="4"
      class="DP_text_area"
      placeholder="Take a screenshoot and send it with your insights..."
      v-model="diary"
    ></textarea>
    <input
      class="DP_upload"
      id="DP_upload"
      type="file"
      accept="image/jpeg/*"
      @change="uploadImage()"
    />
    <button @click="sendDiary">
      Send Insights
    </button>
    <button @click="openAlert" :disabled="isAlert || notSupport">
      Open Banner
    </button>
    <p v-show="notSupport">This page is not supported by Dark Pita.</p>
  </div>
</template>
<script>
import DataService from '@/contents/services/data.js';

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
      diary: '',
      screenshot: null
    };
  },
  methods: {
    sendDiary() {
      // console.log(this.diary);
      // console.log(this.userId);
      let data = {
        screenshot: this.screenshot,
        diary: this.diary,
        timestamp: new Date().valueOf()
      };
      DataService.sendDiary(this.userId, data)
        .then(() => {
          console.log('send new diary successfully!');
        })
        .catch((e) => {
          console.log(e);
        });
      // console.log(this.screenshot);
    },
    openAlert() {
      this.$emit('openAlert', 'open alert');
    },
    uploadImage() {
      const file = document.getElementById('DP_upload').files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.screenshot = reader.result;
        console.log(this.screenshot);
      };

      // console.log(file);
      if (file !== null && file !== undefined) {
        reader.readAsDataURL(file);
      }
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

  .DP_upload {
    @apply block w-full font-cabin font-normal text-[14px] text-gray-900 bg-gray-50 rounded-[4px] border border-gray-300 cursor-pointer focus:outline-none;
  }

  button {
    @apply bg-transparent w-full hover:bg-white font-cabin font-normal text-[14px] text-white hover:text-dark px-[24px] py-[8px] rounded-[4px] border disabled:cursor-not-allowed disabled:hover:bg-dark disabled:bg-dark disabled:hover:text-gray-400 disabled:text-gray-400 disabled:border-dark;
  }

  p {
    @apply mt-[12px] text-white text-[12px];
  }
}
</style>
