<template>
  <div></div>
</template>
<script>
export default {
  data() {},
  mounted() {
    this.emitter.on('template', (message) => {
      if (message === 'on') {
        console.log('template on');
      } else if (message === 'off') {
        console.log('template off');
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped></style>
