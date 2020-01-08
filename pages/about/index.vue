<template>
  <div>
    <section class="hero is-light has-text-centered about-hero">
      <div class="hero-body hero-box">
        <div class="container landing">
          <h1 class="title rellax">About Mattèo Gauthier</h1>
          <!-- <div class="subtitle"></div> -->
        </div>
      </div>
      <nuxt-link to="/cv" class="dl-button enTravaux" aria-label="Télécharger mon CV / Resume">
        <span>Download resume</span> <i class="fas fa-arrow-down"></i>
      </nuxt-link>
    </section>
    <section class="section">
      <div v-for="(item, index) in aboutData" :key="index">
        <minihero :title="item.title" :boxGradient="item.boxGradient" />
        <div v-show="item.boxs" class="box-container">
          <div v-for="(s, idx) in item.boxs" :key="idx">
            <!-- <nuxt-link v-show="item.title == `Les cours que j’ai suivis`" :to="`/about/courses#${s.boxTitle}`"> -->
            <nuxt-link :to="item.title == `Les cours que j’ai suivis` ? `/about/courses#${s.boxTitle}` : ''" v-bind:class="[item.title == `Les cours que j’ai suivis` ? 'click-cursor' : 'default-cursor']">

              <lightBox :boxTitle="s.boxTitle" :desc="s.description" :tags="s.tags"/>
            </nuxt-link>
          </div>
        </div>
        <!-- {{item.body}} -->
      </div>
      <StoryPreview />
    </section>
  </div>
</template>

<script>
import Rellax from "rellax";
import minihero from "~/components/minihero";
import lightBox from "~/components/lightBox";
import aboutData from "~/static/about.json";
import StoryPreview from "~/components/StoryPreview";
export default {
  components: {
    minihero,
    lightBox,
    StoryPreview
  },
  mounted() {
    var rellax = new Rellax(".rellax");
    // ScrollReveal().reveal(".cc", {
    //     delay: 0,
    //     interval: 100
    //   });
  },
  asyncData({ params }) {
    // console.log(aboutData)
    return { aboutData };
  }
};
</script>

<style lang="scss" scoped>
.box-container {
  padding: 35px;
  display: flex;
  flex-flow: row wrap;
}

.body-container {
  padding: 35px;
}

.section {
  padding-left: 0;
  padding-right: 0;

}

.about-hero {

    position: relative;

}
h2 {
  font-family: 'Montserrat', Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.75rem;

  color: #000000;
}
h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2a2a2a;
}

p {
  font-family: 'Montserrat', Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  // font-weight: bold;
  font-size: 16px;

  color: #000000;
}

.landing {
  display: inline-block;
  // background-color: #f5f5f5a2;
  padding: 1rem;
  .title {
    font-family: "Jost", Jost, "Jost *", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 6.5vw;

    color: #4c4c4c;
    mix-blend-mode: color-dodge;
  }
}

.hero-box {
  background: url("~static/landing-about.png");
  padding: 2rem 1.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (min-width: 769px) {
.dl-button{
  position: absolute;
    left: calc(100% - 12.25rem);
bottom: 5%;
background: rgba(0, 0, 0, 0.46);
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 4px;
    display: flex;
    color: white;
    align-items: baseline;
    padding: 8px 10px;
    // width: 120%;
    i {
          margin-left: 1rem;
    }
};
}

.dl-button{

}
@media (max-width: 1408px) and (min-width: 1216px) {
  .box-container {
    padding-right: 2px;
    padding-left: 2px;
  }
}

@media screen and (max-width: 1215px) {
  .box-container {
    justify-content: center;
  }
}

@media screen and (max-width: 528px) {
  .landing {
    .title {
      font-size: 1.8rem;
    }
  }
  .hero-box {
    padding: 2rem 0;
  }
}
</style>
