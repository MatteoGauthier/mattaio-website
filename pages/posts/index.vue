<template>
  <div>
    <div class="links">
      <nuxt-link v-for="post in posts" :to="{name: 'posts-id', params: {id: post.id}}" :key="post.id" class="button">

        {{post.title}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {

    computed: {
      posts() {
        return this.$store.state.posts.all
      }}
    }

</script>

<style scoped>

</style>
