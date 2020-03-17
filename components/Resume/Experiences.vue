<template>
  <fragment>
    <div class="w-1/4 mt-10 leading-8 font-serif text-xxl text-right pr-8">Expériences</div>
    <div class="w-2/4 mt-10 more">
      <div class="flex flex-col">
        <div v-for="item in experiences" :key="item.desc" class="flex justify-between">
          <div class="mb-4">
            <div class="font-sans text-xl font-semibold leading-7">{{ item.name }}</div>
            <div class="text-xs leading-3 text-gray-900 uppercase">{{ item.desc }}</div>
          </div>
          <div class="mg-table-idesc">{{ item.date }}</div>
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
