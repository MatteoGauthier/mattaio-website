
<template>
  <div class="app">
    <div class="section">
      <div class="container">
        <div class="hero">
          <client-only>
            <div data-splitting class="title has-text-centered hero-text words chars splitting" style="--word-total:5; --char-total:21;">
              <span class="word" data-word="Les" style="--word-index:0;">
                <span class="char" data-char="L" style="--char-index:0;">L</span>
                <span class="char" data-char="e" style="--char-index:1;">e</span>
                <span class="char" data-char="s" style="--char-index:2;">s</span>
              </span>
              <span class="whitespace"></span>
              <span class="word" data-word="cours" style="--word-index:1;">
                <span class="char" data-char="c" style="--char-index:3;">c</span>
                <span class="char" data-char="o" style="--char-index:4;">o</span>
                <span class="char" data-char="u" style="--char-index:5;">u</span>
                <span class="char" data-char="r" style="--char-index:6;">r</span>
                <span class="char" data-char="s" style="--char-index:7;">s</span>
              </span>
              <span class="whitespace"></span>
              <span class="word" data-word="que" style="--word-index:2;">
                <span class="char" data-char="q" style="--char-index:8;">q</span>
                <span class="char" data-char="u" style="--char-index:9;">u</span>
                <span class="char" data-char="e" style="--char-index:10;">e</span>
              </span>
              <span class="whitespace"></span>
              <span class="word" data-word="j'ai" style="--word-index:3;">
                <span class="char" data-char="j" style="--char-index:11;">j</span>
                <span class="char" data-char="'" style="--char-index:12;">'</span>
                <span class="char" data-char="a" style="--char-index:13;">a</span>
                <span class="char" data-char="i" style="--char-index:14;">i</span>
              </span>
              <span class="whitespace"></span>
              <span class="word" data-word="suivis" style="--word-index:4;">
                <span class="char" data-char="s" style="--char-index:15;">s</span>
                <span class="char" data-char="u" style="--char-index:16;">u</span>
                <span class="char" data-char="i" style="--char-index:17;">i</span>
                <span class="char" data-char="v" style="--char-index:18;">v</span>
                <span class="char" data-char="i" style="--char-index:19;">i</span>
                <span class="char" data-char="s" style="--char-index:20;">s</span>
              </span>
            </div>
          </client-only>
          <div class="subtitle has-text-centered hero-subtitle">Retrouver ici les cours que j'ai effectuer pour compléter mon apprentissage</div>
        </div>
        <div class="columns">
          <div class="column is-centered">
            <div v-for="plateform in courses" :key="plateform.name" v-bind:id="plateform.name" class="categories">
              <h1 class="title categorie-name">{{plateform.name}}</h1>
              <div class="flex">
                <div class="elm" v-for="course in plateform.courses" :key="course.name">
                  <div class="course-name">{{course.name}}</div>
                  <div class="course-desc">{{course.description}}</div>
                  <div class="course-badges tags">
                    <div v-show="course.certificate" class="course-badge tag">
                      <i class="fas fa-award"></i>
                      <span>Certif</span>
                    </div>
                    <div v-show="course.price == 'Free'" class="course-badge is-success is-light tag">
                      👌
                      <span>Free</span>
                    </div>
                    <div v-show="course.price == 'Variable'" class="course-badge is-warning is-light tag">
                      <i class="fas fa-dollar-sign"></i>
                      <span>Variable</span>
                    </div>
                    <div class="course-badge is-info is-light tag">{{Rating(course.rating)}}</div>
                    <a class="course-badge is-info is-light tag info-tag" @click="linkTag([course.name, plateform.name])">
                      <i class="fas fa-question-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Stars />
  </div>
</template>

<script>
import tippy from 'tippy.js'
import Snackbar from "node-snackbar";
import axios from "axios";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import Stars from "@/components/Stars";
export default {
  data() {
    return {
      count: 16,
      categories: ["OpenClassrooms", "FreeCodeCamp", "Grafikart", "Udemy", "Scrimba", "WesBos Courses", "VueMastery"],
      courses: null,
      askedDoc: ""
    };
  },
  components: {
    Stars
  },
  methods: {
    genData1() {
      return this.$faker().commerce.product() + " " + this.$faker().commerce.product();
    },
    gen() {
      var myArray = ["Introduction à NodeJS", "Développez une application mobile React Native", "Adapter son site au format mobile avec CSS3", "Apprenez à créer votre site web avec HTML5 et CSS3", "Réalisez une application web avec React.js", "Des applications ultra-rapides avec Node.js"];
      return myArray[Math.floor(Math.random() * myArray.length)];
    },
    Rating(rating) {
      let stars = "⭐⭐⭐⭐⭐";
      // console.log(stars);

      let result = stars.toString().slice(0, rating);
      // console.log(result);
      return result;
    },
    Badges(price, certif) {},
    linkTag: function(ctx) {
      console.log(this.$event);
      this.askedDoc = ctx;
      this.open();
    },
    open() {
      this.$confirm("Pour avoir plus d'info sur ce cours (certificat, commentaires, infos additionnels), envoyez un email au propriétaire", "Info", {
        confirmButtonText: "Let's go",
        cancelButtonText: "Annuler",
        type: "info"
      }).then(() => {
        window.open(`mailto:matteo.gauthier@gmail.com?subject=%5B%F0%9F%8C%90%5D%20Infos%20%C3%A0%20propos%20du%20cours%20${this.askedDoc.join(" - ")}&body=Que%20voulez%20vous%20savoir%20%3F%20%3A%0A%0AQui%20%C3%AAtes%20vous%20%3F%20%3A%0A`, "_blank");
      });
    }
  },
  mounted() {
    
    axios
      .get("https://api.jsonbin.io/b/5df14e15bc5ffd040097c63a/latest")
      .then(response => {
        this.courses = response.data.plateforms;
        console.log(this.courses);
        Object.keys(this.courses).map((key, index) => {
          // myObject[key] *= 2;
          console.log(key);
          Object.keys(this.courses[key]).map((k, i) => {
            this.courses[key].courses.sort((a, b) => b.rating - a.rating);
          });
        });
      })
      .catch(error => console.log(error));
    Snackbar.show({
      text: "Cette page n'est pas terminée, il peut manquer des informations.",
      duration: 100000,
      actionTextColor: "#000",
      pos: "bottom-left",
      textColor: "#000",
      backgroundColor: "#f4f6ff"
    });
    var infoTag = document.querySelectorAll(".info-tag");
    tippy(infoTag, {
      content: "Pour avoir plus d'info sur ce cours (certificat, commentaires, infos additionnels), envoyez un email au propriétaire",
      placement: "bottom",
      theme: "light-border"
    });
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.whitespace::after {
  content: " ";
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  // align-items: flex-start;
  align-content: stretch;
  font-family: "Muli", Muli;
}

.elm {
  padding: 0.7rem;
  padding-left: 1rem;
  margin: 0.2rem;
  border: 0.05rem #d0dcff solid;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 30%;
  background: #fff;
  box-shadow: 0 7px 19px 0 rgba(0, 0, 0, 0.03), 0 4px 20px 0 rgba(0, 0, 0, 0.03);
  will-change: transform;
  position: relative;
  border-radius: 0.3rem;
}

@media (max-width: 768px) {
  .elm {
    flex-basis: 60%;
    // background-color: red;
  }
}

.course-name {
  font-family: "Muli", Muli;
  font-weight: 700;
  font-size: 18px;
}

.course-badges {
  margin-top: 0.5rem;

  .course-badge {
    span {
      margin-left: 0.25em;
    }
  }
}

.hero-text {
  font-family: "Rubik", Rubik;
  font-size: 2.5rem;
  user-select: none;
}
.hero-subtitle {
  font-weight: lighter;
}

.splitting .char {
  animation: float 2500ms ease-in-out alternate infinite;
  animation-delay: calc(var(--char-index) * -0.5s);
}

@keyframes float {
  from {
    transform: translate(2%, -2%) rotate(-3deg);

    // opacity:0
  }
  to {
    transform: translate(-2%, 2%) rotate(3deg);

    // opacity:1
  }
}

.categories {
  margin: 3rem 0;
}

.categories:first-of-type {
  margin: 1.5rem 0;
}
.title {
  //margin-bottom: 0.5rem;
}

$family-sans-serif: "Muli", Muli, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;

@import "~bulma";

.categorie-name {
  margin-bottom: 1rem !important;
  font-size: 2rem;
  font-weight: 500;
  font-family: "Rubik", Rubik;
  background: -webkit-linear-gradient(-91deg, #fff, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
}
</style>
