import dayjs from 'dayjs'
export const state = () => ({
  blogPosts: []
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const fm = require("front-matter");
    let files = await require.context(
      "~/content/blog/",
      false,
      /\.md$/
    );
    let blogPosts = files
      .keys()
      .map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      })
      .map(post => {
        let attributes = fm(post.default).attributes;
        attributes.slug = post.slug;
        attributes.date = dayjs(attributes.date).format("DD-MM-YYYY");
        return attributes;
      })
      .sort((a, b) => {
        return a.date < b.date;
      });
    // console.log(blogPosts)
    await commit("setBlogPosts", blogPosts);
  }
};
