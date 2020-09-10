<template>
  <article class="container max-w-5xl px-8 mx-auto" :key="$route.params.slug">
    <ArticleHead class="pt-5 pb-12" :article="article" />
    <!-- <div class="markdown" v-html="content"></div> -->
    <nuxt-content class="markdown" :document="article" />
    <OSSBadge :href="$route.params.slug" />
  </article>
</template>

<script>
import ArticleHead from "@/components/ArticleHead.vue";
import OSSBadge from "@/components/OSSBadge.vue";


export default {
  components: {
    ArticleHead,
    OSSBadge,
  },

  // async asyncData({ params }) {
  //   const fileContent = await import(`~/content/blog/${params.slug}.md`);
  //   // console.log(fileContent.html)
  //   // return {
  //   //   attributes: fileContent.attributes,
  //   //   blogPost: fileContent.html,
  //   // };

  //   let res = fm(fileContent.default);
  //   // console.log("21")
  //   res.attributes.slug = params.slug;
  //   return {
  //     // attributes will be an object containing the markdown metadata
  //     attributes: res.attributes,
  //     // landingImg : res.attributes.landingImg ? 'url('+require('@/assets/res/'+ res.attributes.landingImg + '?quality=100' )+')' : '' ,
  //     content: marked(res.body),
  //   };
  // },
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return { article };
  },
  head() {
    return {
      title: this.article.title + " - " + "Mattèo.dev",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        {
          name: "keywords",
          content: this.article.tags,
        },
      ],
    };
  },
};
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

  h1,
  h2 {
    padding-bottom: 0.2em;
    border-bottom: 1px solid #eaecef;
  }

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    /* identical to box height */

    color: #000000;
    margin-bottom: 1rem;
  }

  h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color: #1a202c;
    margin-bottom: 0.75rem;
  }
  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #2d3748;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #4a5568;
    margin-bottom: 0.25rem;
  }
  h5 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #718096;
  }

  p {
    margin-bottom: 1rem;
    font-size: 19px;
    text-align: justify;
    // font-size: 19px;
    line-height: 32px;
  }

  a {
    color: #4299e1;
  }
  ul {
    list-style-position: inside;
    padding-left: 2em;
  }
  li {
    list-style-type: disc;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 24px;
    margin-bottom: 16px;
  }

  blockquote,
  details,
  dl,
  ol,
  p,
  pre,
  table,
  ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  /* code {
    overflow-x: auto;
    padding: 0.25em;
    color: #abb2bf;
    background: #282c34;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.32) 0px 3px 20px;
  } */
}
</style>
