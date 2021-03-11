<template>
  <div>
    <CoolLightBox
      :items="images"
      :index="index"
      loop
      @close="index = null"
    ></CoolLightBox>

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
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/vue-cool-lightbox/dist/vue-cool-lightbox.min.css"
      }
    ]
  },

  data() {
    return {
      images: [
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/1.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/2.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/3.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/4.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/5.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/6.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/7.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/8.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/9.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/10.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/11.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/12.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/13.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/14.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/15.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/16.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/17.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/18.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/19.webp",
        "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/portfolio/out/20.webp"
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

<style lang="scss"></style>
