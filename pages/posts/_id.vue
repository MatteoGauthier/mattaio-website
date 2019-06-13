<template>
  <div class="container-posts">
    <article>
      <h1 class="title-posts">{{post.title}}</h1>
        <p> {{post.content}}	</p>
    </article>
  </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            posts: [
                {
                    id: 'balut',
                    title: 'What is balut',
                    content: 'BalueBalueBalueBalueBalueBalueBalueBalueBalueBalue Balue Balue Balue Balue vBalueBalue BalueBalueBalueBalueBalueBalueBalueBalueBalueBalue'
                },
                {
                    id: 'racli 2',
                    title: 'What is racli',
                    content: 'racli racli racli racli racli racli racli racli racli racli racli racli 2'
                }
            ]
        }
    },
    computed: {
        post () {
            return this.posts.find(post => post.id === this.id)
        }
    }
};
</script>


<style scoped>

p {
  color:red;
}
</style>
