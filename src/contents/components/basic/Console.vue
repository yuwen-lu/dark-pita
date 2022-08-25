<template>
  <div id="DP_console" class="DP_console">
    <h1>Diary Note Submission</h1>
    <!-- The First FAQ -->

    <div class="DP_question DP_scrollbar">
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
            placeholder="Write your feedback..."
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
            placeholder="Write your feedback..."
            v-model="questionTwo"
          ></textarea>
        </div>
      </details>

      <details class="DP_question_three">
        <summary
          >Did you encounter things related to dark patterns that you found
          meaningful or interesting, not limited to our targeted dark patterns
          and interventions?</summary
        >
        <div>
          <textarea
            id="message"
            rows="4"
            class="DP_text_area"
            placeholder="Write your feedback..."
            v-model="questionThree"
          ></textarea>
        </div>
      </details>
    </div>

    <p>Take a screenshot and upload it with your feedback:</p>
    <input
      class="DP_upload"
      id="DP_upload"
      type="file"
      accept="image/jpeg/*"
      @change="uploadImage()"
    />
    <button @click="sendDiary">
      Send Note
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
    },
    isConsole:{
      type: Boolean
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
      this.$emit('closeConsole', 'close console');
      alert('Your note has been sent!');
    },
    openAlert() {
      this.$emit('openAlert', 'open alert');
      this.$emit('closeConsole', 'close console');
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
  @apply flex flex-col gap-[8px] items-start fixed right-0 top-0 p-[16px] w-[400px] font-cabin bg-background z-infinite text-white text-[12px] text-left;

  h1 {
    @apply text-[24px] font-cabin text-white text-left;
  }

  .DP_text_area {
    @apply block p-[10px] w-full h-[200px] text-[14px] rounded-[4px] border-[1px] bg-dark border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500;
  }

  .DP_upload {
    @apply block w-full font-cabin font-normal text-[14px] text-gray-900 bg-gray-50 rounded-[4px] border border-gray-300 cursor-pointer focus:outline-none;
  }

  .DP_question {
    @apply flex flex-col gap-[8px] w-full h-[500px] overflow-scroll;
  }

  .DP_scrollbar::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .DP_scrollbar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    background: #aeaeae;
  }

  .DP_scrollbar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 5px;
    background: #2c2c2c;
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
      @apply bg-inherit px-[20px] py-[8px] font-cabin text-white text-[14px] cursor-pointer border-[1px] rounded-[4px] select-none text-left;
    }

    div {
      @apply bg-background py-[8px] font-cabin text-[12px] leading-[18px] font-light text-white text-left;
    }

    ul {
      @apply list-disc ml-[40px] mb-[8px] text-white;

      li {
        @apply text-white text-left;
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
