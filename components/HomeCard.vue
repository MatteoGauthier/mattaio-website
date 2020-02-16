<template>
  <div class="relative flex flex-col text-left box" v-bind:style="{'--lightColor': lightColor}">
    <div class="lightsaber"></div>
    <div class="mb-4 title">{{name}}</div>
    <div class="desc">{{desc}}</div>
    <nuxt-link class="self-start button" :to="name.slice(' ').toLowerCase()" v-if="name">{{typeof name == 'string' ? 'Check it out' : button}}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: ["name", "desc", "button", "lightColor", "custom"]
};
</script>

<style lang="scss" scoped>
$lightColor: var(--lightColor);

.box {
  padding: 18px 25px;
  //   width: 372px;
  // height: 194px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06), inset 25px 0px 22px -23px $lightColor;
}

.lightsaber {
  content: "";
  // background: #0095fa;
  background: $lightColor;

  width: 6px;
  float: left;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
}
@debug rgba($lightColor, 0.5);
.title {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 110.5%;
  /* or 24px */

  color: #00030a;
}

.desc {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 110.5%;
  /* or 20px */

  color: #21242a;
}
.button {
  margin-top: auto;
  color: #00030a;

  padding: 10px 30px;
  border: 1px solid #00030a;
}
</style>
