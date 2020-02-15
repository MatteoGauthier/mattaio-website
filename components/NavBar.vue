<template>
<nav class="flex flex-wrap items-start justify-between p-5 mx-8 mt-2 bg-transparent">
  <div class="flex items-center flex-shrink-0 mr-6">
    <span class="text-xl font-semibold tracking-tight text-black dark-hover:text-blue-600 brandf">Mattèo.dev</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
      <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="flex block w-full lg:flex lg:items-center lg:w-auto">

    <div class="items-start justify-between lg:w-auto">
      <a href="#" class="mr-4 leading-tight prosto--u">blog</a>
      <a href="#" class="mx-4 leading-tight prosto--u">about</a>
      <a href="#" class="ml-4 leading-tight prosto--u">contact</a>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="scss" scoped>

</style>
