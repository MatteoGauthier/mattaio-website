<template>
  <fragment>
    <div class="pr-8 mt-10 font-serif leading-8 sm:text-right sm:w-1/4 text-xxl">Expériences</div>
    <div class="mt-6 sm:mt-10 sm:w-2/4 more">
      <div class="flex flex-col">
        <div v-for="item in experiences" :key="item.desc" class="flex items-baseline justify-between sm:items-start">
          <div class="mb-4">
            <div class="font-sans text-xl font-semibold leading-7">{{ item.name }}</div>
            <div class="text-xs leading-3 text-gray-900 uppercase">{{ item.desc }}</div>
          </div>
          <div class="text-right text-gray-500 sm:leading-8">{{ item.date }}</div>
        </div>
      </div>
    </div>
    <div class="w-1/4 side"></div>
  </fragment>
</template>

<script>
  export default {
    props: ["experiences"]
  }
</script>

<style lang="scss" scoped>
</style>
