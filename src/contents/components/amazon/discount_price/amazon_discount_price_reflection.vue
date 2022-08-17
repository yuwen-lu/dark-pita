<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      target: document.querySelectorAll('[id^=apex_desktop]')[0]
    };
  },
  methods: {
    explode(x, y) {
      let particles = 10;
      // explosion container and its reference to be able to delete it on animation end
      let explosion = document.createElement('div');
      explosion.className = 'DP_explosion';

      // put the explosion container into the body to be able to get it's size
      document.body.appendChild(explosion);

      // position the container to be centered on click
      explosion.style.left = x - explosion.clientWidth / 2 + 'px';
      explosion.style.top = y - explosion.clientHeight / 2 + 'px';
      console.log(explosion.style.left, explosion.style.top);

      for (let i = 0; i < particles; i++) {
        // positioning x,y of the particle on the circle (little randomized radius)
        let x =
          explosion.clientWidth / 2 +
          this.rand(80, 150) *
            Math.cos(
              (2 * Math.PI * i) / this.rand(particles - 10, particles + 10)
            );
        let y =
          explosion.clientHeight / 2 +
          this.rand(80, 150) *
            Math.sin(
              (2 * Math.PI * i) / this.rand(particles - 10, particles + 10)
            );
        // particle element creation (could be anything other than div)
        let elm =
          '<div class="DP_particle" style="' +
          'top: ' +
          y +
          'px; ' +
          'left: ' +
          x +
          'px"><img src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/money.png?v=1659250500388" /></div>';

        let temp = document.createElement('div');
        temp.innerHTML = elm;
        elm = temp.childNodes[0];
        explosion.appendChild(elm);
      }
    },
    rand(min, max) {
      return Math.floor(Math.random() * (max + 1)) + min;
    }
  },
  mounted() {
    this.emitter.on('amazon_discount_price_reflection', (message) => {
      this.target = document.querySelectorAll('[id^=apex_desktop]')[0];

      if (message === 'on') {
        console.log('amazon discount price reflection on');
        this.sendAction(1, 'toggle amazon_discount_price_reflection');
        this.target.onmouseenter = () => {
          let boundingBox = this.target.getBoundingClientRect();
          let x = boundingBox.x;
          let y = boundingBox.y;
          this.explode(x, y);
        };
      } else if (message === 'off') {
        console.log('amazon discount price reflection off');
        this.sendAction(0, 'toggle amazon_discount_price_reflection');
        this.target.onmouseenter = () => {};
      }

      this.$emit('update');
    });
  }
};
</script>
<style lang="scss">
// explosion container
.DP_explosion {
  position: absolute; // required if positioned on click else 'relative'
  width: 600px;
  height: 600px;
  pointer-events: none; // make it clickable trhough
  z-index: 9999999;
  // particle styling
  .DP_particle {
    position: absolute; // required
    width: 96px;
    height: 96px;
    border-radius: 50%;
    animation: pop 1.5s reverse forwards; // required
  }
}

// animation for particle fly away from the cursor
@keyframes pop {
  from {
    opacity: 0;
  }
  to {
    top: 50%;
    left: 50%;
    opacity: 1;
  }
}
</style>
