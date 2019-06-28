<template>
  <div>
    <div class="hero has-text-centered">
      <div class="hero-body title has-background-gradient">
        <div class="container ">
          <div class="boxs">

            <div class="title has-text-white" id="blog-text">Blog <i class="fas fa-feather-alt"></i></div>
            <div class="subtitle">Retrouve ici mes dernières publications</div>
          </div>

        </div>
      </div>
    </div>
    <div class="slideee"></div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10-tablet is-9-desktop">
            <article v-for="(post,key) in bloglist" :key="key" class="columns is-centered">
              <div v-if="post.cover_image" class="column is-3-desktop">
                <nuxt-link :to="`/blog/${post.slug}`">
                  <figure class="image">
                    <!-- <img
                    :src="require(`~/assets/images/articles/${post.cover_image}?size=640`)"
                    :alt="post.cover_image_cp"
                    loading="lazy"
                    >-->
                  </figure>
                </nuxt-link>
              </div>
              <div class="column">
                <p class="title">
                  <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
                </p>
                <p class="subtitle">{{ post.description }}</p>
                <div class="level">
                  <p class="small level-left">Published on {{ post.ctime }}</p>
                  <p class="subtitle level-right">
                    <nuxt-link :to="`/blog/${post.slug}`">Keep reading &rarr;</nuxt-link>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    computed: {
      bloglist() {
        if (!this.isPaginated) {
          return this.$store.state.bloglist.slice(0, this.postsPerPage);
        } else {
          return this.$store.state.bloglist;
        }
      },
      totalPages() {
        return this.isPaginated ?
          Math.ceil(this.$store.state.bloglist.length / this.postsPerPage) :
          1;
      }
    },
    props: {
      isPaginated: Boolean,
      postsPerPage: Number
    }
  };

</script>

<style scoped lang="scss">

  .preview-image {
    width: 12vw;
  }

  .hero-body {
    padding: 1.5rem;
  }

  .boxs {
    border: solid rgb(221, 221, 221) 2px;
    border-radius: 5px;
    display: inline-block;
    padding: 1.2rem;

    #blog-text {
      font-family: 'Source Code Pro', monospace;
      text-align: left;
    }

    .subtitle {
      color: white;
    }
  }

  @media screen and (max-width: 768px) {

    .boxs #blog-text {
      text-align: center;
    }
  }

</style>
