<template>
  <div :key="$route.params.post">
      <section class="hero is-light has-text-centered">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{attributes.title}}</h1>
            <div class="subtitle">
                Published on <time>{{require('moment')(attributes.ctime).format('Do MMM YYYY')}}</time>
              <!-- Published on {{attributes.ctime}} -->
              by {{ attributes.author }}
            </div>
          </div>
        </div>
      </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <article class="column">
            <div class="content">
              <div v-html="content" class="blog-content content"></div>
              <!-- <div class="field is-grouped">
                <div class="control">
                  <span class="tag has-text-grey is-white is-paddingless">Tags :</span>
                </div>
                <div class="control">
                  <div class="tags">
                    <span v-for="tags in post.tags" :key="tags" class="tag is-grey has-text-dark">{{tags}}</span>
                  </div>
                </div>
              </div>-->
            </div>
          </article>
          <!-- <aside class="column">
            <div class="has-text-centered box has-background-white">
              <h3 class="is-size-4">Autres posts</h3>
              <ul class="postsOlist">
                <li v-for="related in relatedPosts" :key="related">
                  <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">{{related.title}}</nuxt-link>
                </li> 
              </ul>
            </div>
          </aside>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Let's require the needed modules
const fm = require("front-matter");
var md = require("markdown-it")({
  html: true,
  typographer: true
});

export default {
  async asyncData({ params }) {
    // We read the markdown file by looking at the `post` parameter
    // in the URL and searching for a markdown file with that name in
    // the articles directory
    const fileContent = await import(`~/articles/${params.post}.md`);
    // We process the raw output through front-matter
    // (markdownit was giving me garbled results)
    let res = fm(fileContent.default);
    return {
      // attributes will be an object containing the markdown metadata
      attributes: res.attributes,
      // content will contain the body of the markdown file,
      // rendered in HTML via the `markdownit` class
      content: md.render(res.body)
    };
  },
  head() {
    return {
      title:  this.attributes.title + " - " + process.env.npm_package_name || "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.attributes.description
        }
      ]
    };
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
