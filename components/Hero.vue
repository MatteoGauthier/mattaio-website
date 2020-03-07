<template>
  <div class="flex w-1/2">
    <div class="flex items-center">
      <img src="https://via.placeholder.com/250" class="mr-4" alt />
      <div class="flex flex-col">
        <img class="mattèo self-start" src="~/assets/Mattèo.svg" alt="mattèo" />

        <span class="text-xl font-medium leading-7 text-gray-900">Je suis un développeur Web novice de 17 ans vivant à Poitiers. Je conçois des sites web avec Figma et les construis avec Vue, Nuxt ou encore React.</span>
        <a href="#" class="text-lg font-medium text-blue-600">Découvrez mon portfolio →</a>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'Hero'
  }
</script>

<style lang="scss" scoped>
.mg-text-h2 {
  font-size: 42px;
}
</style>
