<template>
  <div>
    <section class="hero has-bg-img">
      <div class="hero-body">
        <div class="container">
          <h1 id="title" class="title has-text-white">{{heroGuy}}</h1>
          <h2 class="subtitle has-text-light">
            {{heroDesc}}
            
          </h2>
        </div>
      </div>
    </section>
    <!-- <PostsPreview/> -->
  </div>
</template>

<script>
import PostsPreview from "@/components/PostsPreview.vue";
export default {
  data() {
    return {
      heroGuy: 'Mattèo Gauthier',
      heroDesc: `Bonjour et bienvenue sur une page qui vous permetteras d'en savoir plus sur Mattèo Gauthier 😃`
    }
  },
  components: {
    PostsPreview

  }
}

</script>

<style>
.has-bg-img {
  background: url("../assets/res/cropped-bg.jpg") center center;
  background-size: cover;
}

#title {
  font-weight: 700;
}
</style>
