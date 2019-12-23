<template>
  <div class="root-minihero" :style="cssProps">
    <div class="minihero-text">{{title}}</div>
    <div class="info-button"></div>
  </div>
</template>

<script>
export default {
  name: "minihero",
  props: ['boxGradient', 'title'],

  computed: {
    cssProps() { return {
        '--bg-box-gradient': this.boxGradient
        
      }
    }
	}
};
</script>

<style lang="scss" scoped>
.root-minihero {
  padding: 20px 34px 20px 80px;
  background: url("~static/solid rectangle.svg"), var(--bg-box-gradient),
    no-repeat;
  display: inline-flex;
  border-radius: 0 10px 10px 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  .minihero-text {
    font-family: "Jost", Jost, "Jost *", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;

    color: #ffffff;

    text-shadow: 2px 4px 16px rgba(0, 0, 0, 0.67);
  }
}

@media screen and (max-width: 768px) {
  .root-minihero {
    border-radius: 10px;
    position: relative;
	left: 50%;
  transform: translateX(-50%);
padding: 3vw;
    text-align: center;
    .minihero-text {
      font-size: 2rem;
          line-height: 100%;
    }
  }
}
</style>
