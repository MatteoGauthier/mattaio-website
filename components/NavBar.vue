<template>
  <nav>
    <div class="container px-4 py-4 mx-auto">
      <div class="relative flex items-center justify-between">
        <nuxt-link to="/" class="flex items-center">
          <img class="logo" src="~/assets/images/logo.svg" alt="logo" />
        </nuxt-link>
        <button onclick="this.nextElementSibling.classList.toggle('hidden')" class="inline-block rounded md:hidden">
          <svg class="fill-current" stroke="currentColor" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>

            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <ul class="absolute top-0 right-0 z-10 hidden max-w-xs p-5 mt-12 font-medium text-right bg-white rounded shadow md:max-w-full md:w-auto md:flex md:mt-0 md:relative md:flex-row md:items-center md:bg-transparent md:p-0 md:shadow-none md:rounded-none">
          <li class="mb-3 md:mr-8 md:mb-0">
            <nuxt-link to="/Resume">Resume</nuxt-link>
          </li>
          <li class="mb-3 md:mr-8 md:mb-0">
            <a href="#">Mes réalisations</a>
          </li>
          <li class="mb-3 md:mr-8 md:mb-0">
            <nuxt-link to="/blog">The Blog</nuxt-link>
          </li>
          <li>
            <a href="#" class="inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style lang="scss" scoped>
</style>
