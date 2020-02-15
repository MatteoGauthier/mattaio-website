<template>
  <div class="container">
    <div id="hero " class="flex flex-row w-3/4">
      <div id="canvas"><WorldTourer/></div>
      <div id="accroche" class="text-left"><span class="brandf">mattèo.dev</span> <span class="poppins--light">is my personal website, discover my portfolio, my blog, my work.</span></div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import WorldTourer from "~/components/WorldTourer.vue";

export default {
  components: {
    Logo,WorldTourer
  }
};
</script>



<style lang="scss">
  .container {
  @apply  flex justify-center items-center text-center mx-auto;
}
#accroche {
  font-size: 42px;
  line-height: 110%;
}
</style>
