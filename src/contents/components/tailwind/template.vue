<template>
  <div></div>
</template>
<script>
export default {
  data() {},
  mounted() {
    this.emitter.on('template', (massage) => {
      if (massage === 'on') {
        console.log('template on');
        this.$emit('update');
      } else if (massage === 'off') {
        console.log('template off');
        this.$emit('update');
      }
    });
  }
};
</script>
<style lang="scss" scoped></style>
