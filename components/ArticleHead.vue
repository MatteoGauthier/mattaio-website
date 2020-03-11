<template>
  <div class="flex justify-center">
    <div class="mr-6 mg-img">
      <img class="rounded shadow-md" src="https://source.unsplash.com/400x225" />
    </div>
    <div class="flex flex-col">
      <div id="top-infos">
        <span class="inline text-gray-500">{{`Fait le ${formatDate(article.date)} - `}}</span>
        <span class="inline text-blue-500">{{'/blog/' + article.slug}}</span>
      </div>
      <div id="titles" class="mb-3">
        <div id="title" class="table mb-2 -mt-2 text-4-5xl">{{article.title}}</div>
        <div id="subtitle" class="table text-gray-800 ">{{article.description}}</div>
      </div>
      <div id="tags">
        <div v-for="tag in article.tags" :key="tag" v-html="tag" class="inline px-3 py-1 mr-2 text-sm text-gray-800 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name:"ArticleHead",
    props: ["article"],
    methods: {
      formatDate(date) {
        return dayjs(date).format("DD MMM YYYY")
      }
    },
    mounted() {
      this.article.tags = this.article.tags.split(',').map(x => {
        return '#' + x.charAt(0).toUpperCase() + x.slice(1)
        })

    },
  }
</script>

<style lang="scss" scoped>
#title {
  font-family: "Playfair Display", Georgia, "Times New Roman", Times, serif;
}
#titles {
  &:last-child {
    margin: 0;
  }
  #title, #subtitle {
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: #000;
    &::after {
    content: "";
    background: #BEE3F8;
    position: absolute;
    left: 10px;
    bottom: 5px;
    min-width: 100%;
    height: calc(100% - 66%);
    z-index: -1;
    transition: 0.35s cubic-bezier(0.25, 0.1, 0, 1);
    }

  }
  #subtitle::after {
    background: #EBF8FF;
    height: calc(100% - 20%);
    bottom:-4px
  }
}


</style>
