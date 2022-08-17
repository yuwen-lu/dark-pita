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
        this.sendAction(1, 'toggle template');
      } else if (message === 'off') {
        console.log('template off');
        this.sendAction(0, 'toggle template');
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss" scoped></style>
