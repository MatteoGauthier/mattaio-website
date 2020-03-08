<template>
  <div class="px-4">
    <h1 class="text-2xl font-bold leading-none md:text-xxl">Où souhaitez vous aller ?</h1>
    <div class="flex justify-between">
      <main class="py-4">

          <div class="justify-between block md:flex md:-mx-2">
            <div v-for="card in cards" :key="card.name" class="flex w-full pb-4 lg:w-1/3 md:mx-2">
              <div class="relative overflow-hidden bg-white rounded-lg shadow">
                <img class="object-cover object-center w-full h-32" :src="card.img" :alt="card.name + 'image'" />
                <div class="h-auto p-4">
                  <a href="#" class="block text-xl font-bold text-black hover:underline">{{card.name}}</a>
                  <div class="leading-relaxed text-gray-900">{{card.desc}}</div>
                </div>
              </div>
            </div>

        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cards: [
          {
            name:'Portfolio',
            desc: "Expériences, éducation, outils de travails, bio, etc..",
            img: "https://source.unsplash.com/daily"
          },
          {
            name:'Mes réalisations',
            desc: "Prototype d’applications web / mobile, site web, vidéos, logiciel.",
            img: "https://source.unsplash.com/weekly"
          },
          {
            name:'The Blog',
            desc: "J’écrit des articles quand j’ai le temps, je parle de développement web et de mes expériences.",
            img: "https://source.unsplash.com/random?blog"
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
