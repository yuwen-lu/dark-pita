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
      } else if (massage === 'off') {
        console.log('template off');
      }
    });
  }
};
</script>
<style lang="scss" scoped></style>
