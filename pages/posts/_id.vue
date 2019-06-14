<template>
  <div>


    <section class="section">


      <div class="container">
        <div class="columns">
          <article class="column is-three-quarters">
            <div class="content">

              <h1 class="title">{{post.title}}</h1>
              <p> {{post.content}} </p>
              <div class="field is-grouped">
                <div class="control">
                  <span class="tag has-text-grey is-white is-paddingless">Tags :</span>
                </div>
                <div class="control">
                  <div class="tags">

                    <span v-for="tags in post.tags" :key="tags" class="tag is-grey has-text-dark">{{tags}}</span>


                  </div>
                </div>

              </div>
            </div>
          </article>
          <aside class="column">
            <div class="has-text-centered box has-background-white">
              <h3 class="is-size-4  ">Autres posts</h3>
              <ul class="postsOlist">


                <li v-for="related in relatedPosts" :key="related">
                  <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">
                    {{related.title}}
                  </nuxt-link>
                </li>

              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      post() {
        return this.$store.state.posts.all.find(post => post.id === this.id)
      },
      relatedPosts() {
        return this.$store.state.posts.all.filter(post => post.id !== this.id)
      },
      
      posts() {
        return this.$store.state.posts.all.filter(post => post.tags === this)
        // return this.$store.state.posts.all.find(post => post.tags === this.tags)
      }
    }

  };

</script>


<style scoped lang="scss">
  #otherPostsTitle {
    text-align: center;
  }

  //   .container {
  //       padd
  //   }
  .title {
    font-size: 2rem;
  }

  .postsOlist {
    margin-top: 0.75rem;
  }

</style>
