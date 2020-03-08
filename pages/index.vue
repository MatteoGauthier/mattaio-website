<template>
  <div class="container mx-auto lg:px-8 xl:px-8 xl:max-w-xxl">
    <Hero class="mt-4 mb-10 md:mt-16 md:mb-24"/>
    <Navigation/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Hero from '~/components/Hero.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Logo,Hero,Navigation
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS */
/* .container {
  @apply max-w-xxl;
} */


</style>
