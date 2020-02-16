<template>
  <div>
    <div id="hero" class="flex flex-row items-center">
      <div id="canvas">
        <WorldTourer />
      </div>
      <div id="accroche" class="w-3/4 text-left">
        <span class="brandf">mattèo.dev</span>
        <span class="poppins--light">is my personal website, discover my portfolio, my blog, my work.</span>
      </div>
    </div>
    <div class="mx-12 mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <HomeCard class="h-48 m-4" v-for="card in cards" :key="card.title" v-bind="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import WorldTourer from "~/components/WorldTourer.vue";
import HomeCard from "~/components/HomeCard.vue";

export default {
  components: {
    Logo,
    WorldTourer,
    HomeCard
  },
  data() {
    return {
      cards: [
        { name: "Work", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, lightColor: "#0095FA" },
        { name: "Blog", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, lightColor: "#EF5F8C" },
        { name: "Experiments", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, lightColor: "#E3EF5F" },
        { name: "Card", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, custom: true },
        { name: "Portfolio", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, lightColor: "#E76E30" },
        { name: "Uses", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, lightColor: "#00AEA3" },
        { name: "Contact me", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, lightColor: "#808080" },
        { name: "Socials", desc: "since 2017 i worked on dev, design, video project, check it out 😁", button: true, custom: true }
      ]
    };
  }
};
</script>



<style lang="scss">
// .container {
//   @apply flex justify-center items-center text-center mx-auto;
// }
#accroche {
  font-size: 42px;
  line-height: 110%;
      padding-bottom: 5px;
}
</style>
