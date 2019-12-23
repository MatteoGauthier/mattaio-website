<template >
  <div v-bind:class="is" class="stars">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Stars",
  computed: {
    is() {
      return this.$mq == 'mobile' ? 'mobile-opacity' : '';
    }
  },
  mounted() {
      if (this.$mq == "mobile") {
        this.animation("pause");
      } else {
        this.animation("play");
      }
  },
  watch: {
    $mq: function() {
      if (this.$mq == "mobile") {
        this.animation("pause");
      } else {
        this.animation("play");

      }
    }
  },
  methods: {

    animation(arg) {
      let randSize = anime.random(0, 200) + 200 - 170 + "px";

      var inside = anime({
        targets: ".star",

        translateX: function() {
          return anime.random(-500, 500);
        },
        translateY: function() {
          return anime.random(-500, 500);
        },
        width: randSize,
        height: randSize,
        opacity: 0.5,
        easing: "easeInOutQuad",
        duration: 20000,
        direction: "alternate",
        loop: true,
        autoplay: false
      });
      if (arg == "play") {
        inside.play();
      }
      if (arg == "pause") {
        inside.pause();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.star {
  height: 40px;
  width: 40px;
  border-radius: 300px;
  background-color: hsl(170, 100%, 94%);
  position: absolute;
  opacity: 1;
}
.stars {
  position: fixed;

  z-index: -2;
  overflow: hidden;
  height: 350%;
  width: 100%;
  top: 0;
}

.mobile-opacity {
  opacity: 0.3
}

@for $i from 1 through 50 {
  .star:nth-child(#{$i}) {
    $state: random(360);
    $size: random(200) + 200 - 170;
    $angle: random(360) + deg;
    $x: random(100);
    $y: random(100);
    left: ($x + vw);
    top: percentage($y/100);

    height: $size + px;
    width: $size + px;
    background-image: linear-gradient($angle, hsla($state, 100%, 96%, 0.8) 0%, hsla($state, 100%, 80%, 0.8) 100%);
    // background-color: hsl($state , 100%, 96%) // 97
  }
}
</style>
