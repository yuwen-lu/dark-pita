<template>
  <div></div>
</template>
<script>
export default {
  props: {
    state: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.state) {
      console.log('hide on');
    } else {
      console.log('hide off');
    }
  }
};
</script>
<style lang=""></style>
