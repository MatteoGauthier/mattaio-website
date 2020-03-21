<template>
  <fragment>
    <div class="pr-8 mt-10 font-serif leading-8 sm:text-right sm:w-1/4 text-xxl">Tools</div>
    <div class="px-2 mt-10 sm:w-2/4 more">
      <div class="flex flex-wrap items-stretch overflow-hidden strech sm:-mx-2">
        <div v-for="item in tools" :key="item" class="w-auto px-2 my-1 last:pb-6 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5">
          <div class="flex flex-col items-center self-stretch justify-center py-3 shadow-md">
            <img :src="icons(item)" class="w-12 h-12" alt />
            <span class="mt-1 text-sm">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 side"></div>
  </fragment>
</template>

<script>
  export default {
    props: ["tools"],

      methods: {
    icons(img) {
      return require(`@/assets/images/icons/${img}.svg`)
    }
  }

  }
</script>

<style lang="scss" scoped>
</style>
