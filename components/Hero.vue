<template>
  <div class="flex px-2 lg:justify-around">
    <div class="flex items-start xl:items-center lg:w-7/12">
      <img src="~/assets/images/matt.jpg" v-tilt="vtiltdata" class="w-1/3 mr-4 shadow-lg lg:mr-6 lg:w-1/3 md:w-1/4 xl:w-1/4" alt />
      <div class="flex flex-col">
        <img class="mattèo self-start" src="~/assets/images/Mattèo.svg" alt="mattèo" />

        <span class="text-sm font-medium text-justify text-gray-900 sm:leading-7 sm:text-xl">
          Je suis un développeur Web novice de 17 ans de Poitiers. Je
          conçois des sites web avec Figma et les construis avec Vue, Nuxt ou
          encore React.
        </span>
        <nuxt-link to="/Portfolio" class="text-sm font-medium text-blue-600 md:text-lg">Découvrez mon portfolio →</nuxt-link>
      </div>
    </div>
    <div class="hidden lg:block">
      <no-ssr>
      <youtube :video-id="videoId" ref="youtube" :height="270" :width="480" :fitParent="true" style="background-image: url('https://i.ytimg.com/vi/Qn2fZ2FlO4M/hqdefault.jpg'); background-position:center;"></youtube>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {videoId: 'Qn2fZ2FlO4M',
      vtiltdata: {
        speed: 3000,
        max: 10,
        reset: false,
        glare: true,
        perspective: 800
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.mg-text-h2 {
  font-size: 42px;
}
.mg-img {
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
}
</style>
