<template>
  <div id="DP_console" class="DP_console">
    <!-- The First FAQ -->
    <details class="DP_question_one" open>
      <summary>What is the dark pattern you want to talk about?</summary>
      <div>
        <ul>
          <li>
            How does the dark pattern affect your browsing experience?
          </li>
          <li>
            Do you think our provided interventions help improve your
            experience?
          </li>
          <li>
            Is there a better intervention you can think of?
          </li>
        </ul>
        <textarea
          id="message"
          rows="4"
          class="DP_text_area"
          placeholder="Write your insights..."
          v-model="questionOne"
        ></textarea>
      </div>
    </details>

    <details class="DP_question_two">
      <summary
        >For the Dark Pita extension, anything interesting or any issue you
        found when using it?</summary
      >
      <div>
        <textarea
          id="message"
          rows="4"
          class="DP_text_area"
          placeholder="Write your insights..."
          v-model="questionTwo"
        ></textarea>
      </div>
    </details>

    <details class="DP_question_three">
      <summary
        >Did you encounter things related to dark patterns that you found
        meaningful or interesting, not limited to our targeted dark patterns and
        interventions?</summary
      >
      <div>
        <textarea
          id="message"
          rows="4"
          class="DP_text_area"
          placeholder="Write your insights..."
          v-model="questionThree"
        ></textarea>
      </div>
    </details>

    <p>Take a screenshoot and upload it with your insights:</p>
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
    },
    currentURL: {
      type: String
    }
  },
  data() {
    return {
      questionOne: '',
      questionTwo: '',
      questionThree: '',
      screenshot: '',
      interventionState: null
    };
  },
  methods: {
    sendDiary() {
      // console.log(this.diary);
      // console.log(this.interventionState);
      let data = {
        url: this.currentURL,
        screenshot: this.screenshot,
        intervention: this.interventionState,
        one: this.questionOne,
        two: this.questionTwo,
        three: this.questionThree,
        timestamp: new Date().valueOf()
      };
      DataService.sendDiary(this.userId, data)
        .then(() => {
          console.log('send new diary successfully!');
          this.questionOne = '';
          this.questionTwo = '';
          this.questionThree = '';
          this.screenshot = '';
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
  },
  mounted() {
    chrome.storage.sync.get('savedSettings', (settings) => {
      this.interventionState = settings;
    });

    this.emitter.on('intervention state', (message) => {
      this.interventionState = message;
    });
  }
};
</script>
<style lang="scss" scoped>
.DP_console {
  @apply flex flex-col gap-[8px] fixed right-0 top-0 p-[16px] w-[400px] font-cabin bg-background z-infinite text-white text-[12px];

  .DP_text_area {
    @apply block p-[10px] w-full h-[200px] text-[14px] rounded-[4px] border-[1px] bg-dark border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500;
  }

  .DP_upload {
    @apply block w-full font-cabin font-normal text-[14px] text-gray-900 bg-gray-50 rounded-[4px] border border-gray-300 cursor-pointer focus:outline-none;
  }

  .DP_question_one {
    @apply open:bg-money;
  }

  .DP_question_two {
    @apply open:bg-privacy;
  }

  .DP_question_three {
    @apply open:bg-cognition;
  }

  details {
    @apply bg-background text-white duration-300;

    summary {
      @apply bg-inherit px-[20px] py-[8px] font-cabin text-white text-[14px] cursor-pointer border-[1px] rounded-[4px] select-none;
    }

    div {
      @apply bg-background py-[8px] font-cabin text-[12px] leading-[18px] font-light text-white;
    }

    ul {
      @apply list-disc ml-[40px] mb-[8px] text-white;

      li {
        @apply text-white;
      }
    }
  }

  button {
    @apply bg-transparent w-full hover:bg-white font-cabin font-normal text-[14px] text-white hover:text-dark px-[24px] py-[8px] rounded-[4px] border disabled:cursor-not-allowed disabled:hover:bg-dark disabled:bg-dark disabled:hover:text-gray-400 disabled:text-gray-400 disabled:border-dark;
  }

  p {
    @apply mt-[12px] text-white text-[12px];
  }
}
</style>
