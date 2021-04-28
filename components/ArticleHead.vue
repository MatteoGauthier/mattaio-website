<template>
  <div class="flex justify-center">
    <div class="mr-6">
      <img
        class="rounded shadow-md mg-img"
        v-lazy="
          setImage(article.landingImg)
        "
      />
    </div>
    <div class="flex flex-col">
      <div id="top-infos">
        <span class="inline text-gray-500">
          {{ `Fait le ${formatDate(article.date)} - ` }}
        </span>
        <span class="inline text-blue-500">{{ "/blog/" + article.slug }}</span>
      </div>
      <div id="titles" class="mb-3">
        <div id="title" class="table mb-2 -mt-2 text-4-5xl">
          {{ article.title }}
        </div>
        <div id="subtitle" class="table text-gray-800">
          {{ article.description }}
        </div>
      </div>
      <div id="tags">
        <div
          v-for="tag in articleTags"
          :key="tag"
          v-html="tag"
          class="inline px-3 py-1 mr-2 text-sm text-gray-800 bg-gray-200 rounded-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from "dayjs";
export default {
  name: "ArticleHead",
  props: ["article"],
  methods: {
    formatDate(date) {
      return dayjs(date).format("DD MMM YYYY");
    },

    setImage(img) {
      return img

    }
    ,

   
  },
  computed: {
     articleTags: function( ) {
      return this.article.tags.split(",").slice(0, 5).map(x => {
        let result = "#" + x.charAt(0).toUpperCase() + x.slice(1);
        return result
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mg-img {
  max-width: 400px;
}

#title {
  font-family: "Playfair Display", Georgia, "Times New Roman", Times, serif;
}
#titles {
  #title,
  #subtitle {
    // box-shadow: inset 0 -0.5625em 0 0 #BEE3F8;
    text-decoration: underline #bee3f8;
  }
}
</style>
