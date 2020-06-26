<template>
  <div>
    <CoolLightBox :items="images" :index="index" loop @close="index = null"></CoolLightBox>

    <div class="inline-flex flex-wrap">
      <img
        class="flex-1 object-cover h-64 max-w-full m-2 transition-all duration-700 rounded shadow sm:max-w-md"
        v-for="(src, index) in images"
        :key="index"
        @click="setIndex(index)"
        v-lazy="src"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    link: [{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vue-cool-lightbox/dist/vue-cool-lightbox.min.css" }]
  },

  data() {
    return {
      images: [
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Home Mattèo.dev 2020.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Blog Mattèo.dev 2020.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Portfolio Mattèo.dev 2020.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/CV_MattèoGauthier_2020_2.1.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Dpliance Dashboard Mockup.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Editing Poitiers Home Page.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Dpliance WebSite.png",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Mattèo.dev Home Black.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Mattèo.dev Home White.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/MiniCard.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Proto Cross De ligugé Mobile.jpg",
        "https://cdn.jsdelivr.net/gh/MattixNow/StaticHost@master/portfolio/Spiaggia HomePage.jpg"
      ],
      index: null
    };
  },
  methods: {
    setIndex(index) {
      this.index = index;
    }
  }
};
</script>

<style lang="scss">
</style>
