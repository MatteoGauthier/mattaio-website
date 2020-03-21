<template>
  <fragment>
    <div class="pb-2 font-serif leading-8 sm:w-1/4 text-xxl sm:text-right sm:pr-8 sm:pb-0">Bio</div>
    <div class="sm:w-2/4 more">Salut je m’appelle Mattèo Gauthier, j’ai 17 ans et je suis développeur web novice. Actuellement au Lycée Nelson Mandela en Terminal S SI.</div>
    <nuxt-link  to="/CV" class="flex items-center justify-center mt-2 sm:block sm:w-1/4 side sm:mt-0">
      <img src="~/assets/images/CVPreview.jpg" alt="Curriculum Vitae / CV" class="w-16 mr-4 border border-gray-300 rounded sm:mr-0 sm:absolute sm:w-imgCV sm:h-imgCV sm:ml-8 mg-cv-img" />
      <span class="inline-block text-gray-800 sm:block sm:hidden">← Découvrir mon cv</span>
    </nuxt-link>
  </fragment>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
</style>
