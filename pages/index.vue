<template>
  <div class="mx-auto ">
    <Hero/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Logo,Hero
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
