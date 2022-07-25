<template>
  <div class="popup">
    <header>
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
          fill="#212121"
        />
      </svg>
    </header>
    <body>
      <div>
        <img src="" />
        <h1>Financial Loss</h1>
      </div>
      <div>
        <h2>Loss-gain framing</h2>
        <p>
          A selective disclosure of information that positively frames the
          consequences of an action, while omitting the entailed risks.
        </p>
      </div>
      <div>
        <h2>Awareness <a>- Threats</a></h2>
        <p>
          If I am manipulated by this item, I will have a high chance of
          purchasing this item. If I purchase this item, I would not break even.
        </p>
      </div>
      <div>
        <h2>Action <a>- Intervention Desgn</a></h2>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown button
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.22 8.47a.75.75 0 0 1 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"
              fill="#212121"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <p>
          If I am manipulated by this item, I will have a high chance of
          purchasing this item. If I purchase this item, I would not break even.
        </p>
      </div>
    </body>
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
  @apply bg-dark;
}
</style>
