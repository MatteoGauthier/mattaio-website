<template>
  <article class="article-card">
    <nuxt-link :to="`/blog/${articleInfo.slug}`" class="flex">
    <img v-lazy="`https://source.unsplash.com/140x80?${articleInfo.slug}`" class="mr-4 rounded-sm shadow-md" alt="">
      <div class="flex flex-col">
        <div class="mb-1 font-semibold leading-none text-sl">{{articleInfo.title}}</div>
        <div id="desc" class="leading-6">{{articleInfo.description}}</div>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    articleInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
</style>
