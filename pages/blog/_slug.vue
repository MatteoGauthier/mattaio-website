<template>
  <article class="container max-w-5xl px-8 mx-auto" :key="$route.params.slug">
    <ArticleHead class="pt-5 pb-12" :article="attributes" />
    <div class="markdown" v-html="content"></div>
  </article>
</template>

<script>
import ArticleHead from "@/components/ArticleHead.vue";
const fm = require("front-matter");
const md = require('markdown-it')({
  breaks: true,
  linkify: true,
  html: true
}).use(require('markdown-it-highlightjs'))

export default {
  components: {
    ArticleHead
  },


  async asyncData({ params }) {

      const fileContent = await import(`~/content/blog/${params.slug}.md`)
      // console.log(fileContent.html)
      // return {
        //   attributes: fileContent.attributes,
      //   blogPost: fileContent.html,
      // };

      let res = fm(fileContent.default);
      // console.log("21")
      res.attributes.slug = params.slug
      return {
      // attributes will be an object containing the markdown metadata
      attributes: res.attributes,
      // landingImg : res.attributes.landingImg ? 'url('+require('@/assets/res/'+ res.attributes.landingImg + '?quality=100' )+')' : '' ,
      content: md.render(res.body)
      };


    }

}
</script>

<style lang="scss">
.markdown {
  em {
    font-family: Inter;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    display: block;
    /* gray/800 */

    color: #2d3748;
  }

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    /* identical to box height */

    color: #000000;
    padding-bottom: 1rem;
  }

  h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color: #000000;
    padding-bottom: 0.75rem;
  }
  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #111111;
    padding-bottom: 0.5rem;
  }
  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #111111;
    padding-bottom: 0.25rem;
  }
  h5 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #111111;
  }

  p {
    padding-bottom: 1rem;
    font-size: 19px;
    text-align: justify;
    // font-size: 19px;
    line-height: 32px;
  }
}
</style>
