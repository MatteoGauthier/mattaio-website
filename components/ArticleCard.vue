<template>
    <nuxt-link :to="`/blog/${articleInfo.slug}`" class="overflow-hidden rounded shadow-lg sm:flex article-card sm:rounded-none sm:shadow-none">
      <img v-lazy="this.articleInfo.landingImg ? this.articleInfo.landingImg :setImage(articleInfo.slug) " class="object-cover w-full h-32 mr-4 rounded-sm sm:shadow-md sm:w-imgA sm:h-imgA" alt />
      <div class="flex flex-col px-3 py-3 bg-white sm:px-0 sm:py-0 sm:pt-1 sm:bg-transparent ">
        <div class="mb-1 text-2xl font-semibold leading-none">{{articleInfo.title}}</div>
        <div id="desc" class="leading-6">{{articleInfo.description}}</div>
      </div>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    articleInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    setImage(slug) {

        let img = 'https://source.unsplash.com/random?' + slug
        return img

    }
  },
}
</script>

<style lang="scss">
// .mg-article-card-img {
//   width: 140px;
//   height: 80px;
// }
</style>
