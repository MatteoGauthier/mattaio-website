<template>
  <nav class="mt-6 bg-gray-100 md:mt-12">
    <div class="container px-4 py-4 mx-auto">
      <div class="relative flex flex-col items-center justify-around h-16 md:justify-between md:flex-row">
        <div class="inline-flex leading-5 text-gray-900">
          <span class="mr-1 font-semibold text-black ">Mattèo.dev </span>
          <span class="mr-1 ">2017 </span>
          <svg class="inline mr-1" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.60227 15L13.6932 9.90909L8.60227 4.81818L7.72727 5.69318L11.3295 9.28409H2V10.5341H11.3295L7.72727 14.1364L8.60227 15Z" fill="#1A202C" />
          </svg>
          <span class="mr-1 ">2020 by </span>
          <span class="text-blue-700 ">Mattèo Gauthier</span>
        </div>
        <div class="flex">
          <div class="flex items-center mr-4">
            <img src="~/assets/images/icons/Github.svg" class="w-6 mr-1" alt="github icon" />
            <span>Github</span>
          </div>
          <div class="flex items-center ">

            <img src="~/assets/images/icons/Twitter.svg" class="w-6 mr-1" alt="github icon" />
            <span>Twitter</span>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
</style>
