<template>
  <div class="relative pb-8 mt-4 ">
    <div class="container flex flex-col items-center justify-center px-3 mx-auto bg-transparent sm:px-0">
      <div class="flex flex-col items-center justify-center">
        <img class="mb-2" src="~/assets/The Blog Plaque.svg" alt="Plaque" />
        <p class="w-2/3 text-sm leading-4 text-center">J’écrit des articles quand j’ai le temps, je parle de développement web et de mes expériences.</p>
      </div>
      <hr class="w-32 mx-auto my-10 border-black" />
      <div class="flex flex-col items-center max-w-4xl">
        <div v-for="post in posts" :key="post" class="flex w-full mb-4">
          <img src="https://source.unsplash.com/random" class="object-cover w-32 h-20 mr-2 rounded-sm sm:mr-4" alt />
          <div class="flex flex-col">
            <h1 class="text-lg font-semibold leading-none sm:leading-8 sm:text-sl">Startup Weekend 2019</h1>
            <p class="leading-tight sm:leading-6" v-dummy></p>
          </div>
        </div>
      </div>
    </div>
    <img class="z-n1 leaf1" src="~/assets/images/leaf1.png" alt="">
    <img class="z-n1 leaf2" src="~/assets/images/leaf2.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'TheBlog',
    data() {
      return {
        posts: 8
      }
    },
  }
</script>

<style lang="scss" scoped>

.leaf1 {
  position: absolute;
  top: 0%;
}
.leaf2 {
  position: absolute;
  right: 0;
  bottom: 0;
}

@media screen and (max-width: 1024px) {
  .leaf1, .leaf2 {
    filter: opacity(0.2)
  }
}
</style>
