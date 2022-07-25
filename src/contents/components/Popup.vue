<template>
  <div class="popup">
    <header class="header">
      <p>DARK PITA</p>
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
    </header>
    <div class="body">
      <div class="section">
        <div class="title">
          <img
            src="https://raw.githubusercontent.com/yuwen-lu/dark-pita/main/public/images/money.png?token=GHSAT0AAAAAABWHHBVOW6YR7AGJMIWLJDUUYW6VDUA"
          />
          <h1>Financial Loss</h1>
        </div>
        <div class="introduction">
          <h2>Loss-gain framing</h2>
          <p>
            A selective disclosure of information that positively frames the
            consequences of an action, while omitting the entailed risks.
          </p>
        </div>
        <div class="subtitle">
          <h2>Awareness <span>- Threats</span></h2>
          <div class="description">
            <p>
              If I am manipulated by this item, I will have a high chance of
              purchasing this item. If I purchase this item, I would not break
              even.
            </p>
          </div>
        </div>
        <div class="subtitle">
          <h2>Action <span>- Intervention Desgn</span></h2>
          <div class="description">
            <p>
              If I am manipulated by this item, I will have a high chance of
              purchasing this item. If I purchase this item, I would not break
              even.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.popup {
  @apply flex flex-col justify-center items-center p-0 shadow-sm;

  width: 230px;
}

.header {
  @apply flex flex-row items-start px-3 py-2 bg-dark opacity-100;

  gap: 132px;
  width: 230px;

  p {
    @apply font-cabin font-bold text-xs leading-4 text-white;
  }

  svg {
    @apply w-4 h-4;
  }
}
.body {
  @apply box-border flex flex-col items-end px-3 py-3 gap-2 border-t-2 border-solid border-money bg-dark opacity-90 backdrop-filter backdrop-blur-sm;

  width: 230px;

  .section {
    @apply flex flex-col items-start p-0 gap-4;

    .title {
      @apply flex flex-row items-center p-0 gap-2;

      img {
        @apply w-8 h-8;
      }

      h1 {
        @apply font-cabin font-normal text-xl leading-6 text-white;
      }
    }

    .introduction {
      @apply flex flex-col items-start p-0 gap-1;

      > h2 {
        @apply font-cabin font-normal text-xs uppercase text-money;
      }

      p {
        @apply font-cabin font-medium text-xs text-white;
      }
    }

    .subtitle {
      @apply flex flex-col items-start p-0 gap-1;

      > h2 {
        @apply font-cabin font-normal text-xs uppercase text-white;

        span {
          @apply font-cabin font-normal text-xs uppercase text-white opacity-50;
        }
      }
    }

    .description {
      @apply box-border p-2 gap-2 bg-dark border-2 border-solid border-money;

      > p {
        @apply font-cabin italic font-medium text-xs text-white;
      }
    }
  }
}
</style>
