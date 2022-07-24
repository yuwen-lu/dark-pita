<script>
import { defineComponent, ref, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const state = reactive({
      currentTab: null
    })

    onMounted(() => {
      chrome.runtime.sendMessage({ type: 'POPUP_INIT' }, async (tab) => {
        state.currentTab = await tab
        console.log(state.currentTab)
      })
    })

    return {
      visible,
      ...toRefs(state)
    }
  }
})
</script>
<template>
  <div class="overlay"
       v-show="visible">
    <div class="popup">
      <p>Dark Pita is on...</p>
      <!-- <h1>Legen...wait for it..dary</h1>
      <pre>{{ currentTab }}</pre> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  @apply fixed inset-0 w-full h-full bg-black bg-opacity-30 z-50;
}

.popup {
  @apply absolute top-0 left-0 bg-dark px-6 py-3 w-auto;

  p {
    @apply m-0 font-menlo text-white text-xs;
  }
}
</style>
