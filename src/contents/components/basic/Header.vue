<template>
  <div class="DP_header" id="DP_header">
    <p>DARK PITA</p>
    <button @click="close">
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m4.397 4.554.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084-.073.084Z"
          fill="#FFFFFF"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'money'
    }
  },
  methods: {
    close(event) {
      this.$emit('close', false);
      event.preventDefault();
      event.cancelBubble = true;
    }
  },
  mounted() {
    let element = document.getElementById('DP_header');
    element.classList.remove('DP_money');
    element.classList.remove('DP_privacy');
    element.classList.remove('DP_cognition');
    element.classList.add('DP_' + this.color);
    // console.log(this.color);
  }
};
</script>
<style lang="scss" scoped>
div {
  p {
    @apply p-0 m-0;
  }
}

.DP_header {
  @apply flex flex-row justify-between items-center w-full px-3 py-2 bg-dark opacity-100 border-b border-solid rounded-t;

  height: 36px;

  p {
    @apply font-cabin font-bold text-xs text-white pointer-events-none select-none;
  }
}

.DP_money {
  @apply border-money;
}

.DP_privacy {
  @apply border-privacy;
}

.DP_cognition {
  @apply border-cognition;
}

svg {
  @apply w-[20px] h-[20px];
}
</style>
