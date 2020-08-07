<template>
  <a :href="`https://github.com/MatteoGauthier/mattaio-website/blob/master/content/blog/${href}.md`" class="inline-flex justify-between w-full p-2 border border-gray-400 rounded-sm sm:justify-start sm:w-auto">
    <div class="flex flex-col mr-2 justify-evenly">
      <div class="font-medium">Open Source Software</div>
      <div class="text-sm text-gray-900">Contribute to this article</div>
    </div>
    <div id="icon">
      <img src="~/assets/images/icons/Github.svg" alt />
    </div>
  </a>
</template>

<script>
  export default {
  props: ['href'],
    name:'OSSBadge'
  }
</script>

<style lang="scss" scoped>
</style>
