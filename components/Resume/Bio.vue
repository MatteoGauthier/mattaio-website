<template>
  <fragment>
    <div class="sm:w-1/4 leading-8 font-serif text-xxl sm:text-right sm:pr-8 sm:pb-0 pb-2">Bio</div>
    <div class="sm:w-2/4 more">Salut je m’appelle Mattèo Gauthier, j’ai 17 ans et je suis développeur web novice. Actuellement au Lycée Nelson Mandela en Terminal S SI.</div>
    <nuxt-link  to="/CV" class="block sm:w-1/4 side sm:mt-0 mt-2">
      <img src="~/assets/images/CVPreview.jpg" alt="Curriculum Vitae / CV" class="sm:absolute sm:w-imgCV sm:h-imgCV w-16 sm:ml-8 border border-gray-300 rounded mg-cv-img" />
      <span class="inline-block sm:hidden">← Découvrir mon cv</span>
    </nuxt-link>
  </fragment>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
</style>
