<template>
  <div class="root">
    <div v-if="$mq == 'laptop'" class="box-wsh content fade hover-box">
      <div class="hover-box-layer_bottom">
        <h2>Commencement</h2>
        <p>Depuis mes 13 ans je m'intéresse à l'informatique et à son fonctionnement, c'est à partir de la quatrième que je commence à découvrir le monde de la programmation (une infime partie bien sûr) c'est avec Visual Basic .NET que je commence la création de petites applications, la première fut un utilitaire de 3 Forms permettant de gérer la veille de l'appareil. C'était très simple mais cette approche visuelle de la programmation me plaisait (l'interface graphique click & drag des composants rendait la création d'interface simplifiée). Au fil du temps j'ai appris différentes notions d'informatique, de réseaux, de design. C'est en 3ème que j'ai suivi mon premier cours de programmation en ligne (MOOC) avec les PDFs du site du zéro renommé OpenClassrooms aujourd'hui, vous pouvez d'ailleurs retrouver les cours que j'ai validés dans la section cours de mon site web. OpenClassrooms est un très bon moyen d'enrichir ses connaissances gratuitement c'est vraiment pour moi le point de départ d'un apprentissage, le cours "Apprenez à coder avec JavaScript" m'a orienté vers l'apprentissage développement web pour à terme espérer devenir développeur web (je suis encore loin mais je fais le maximum pour atteindre mon objectif).</p>
      </div>
      <nuxt-link :to="`about/story`" class="hover-box-layer_top">
        <div class="hover-box-text">Read more +</div>
      </nuxt-link>
    </div>
    <div v-if="$mq == 'mobile' || $mq == 'tablet'" class="box-wsh content fade hover-box">
      <div class="hover-box-layer_bottom">
        <h2>Commencement</h2>
        <p>Depuis mes 13 ans je m'interresse à l'informatique et à son fonctionnement, c'est à partir de la quatrième que je commence à découvrir le monde de la programmation (une infime partie bien sûr) c'est avec Visual Basic .NET que je commence la création de petites applications, la première fut un utilitaire de 3 Forms permettant de gérer la veille de l'appareil.</p>
      </div>
      <div class="hover-box-layer_top">
        <nuxt-link :to="`about/story`" class="hover-box-text">Read more +</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// import VueMq from "vue-mq";
export default {
  name: "Story",

  data: function() {
    return {
      msg: "Hello World! This is a Event listener test.",
      windowWidth: 0,
      windowHeight: 0,
      expanded: false
    };
  }

};
</script>

<style lang="scss" scoped>
a {
  color:initial;
}
.fade p {
  background: -webkit-linear-gradient(rgb(0, 0, 0) -0.98%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-box {
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  height: auto;

}
.hover-box .hover-box-layer_bottom {
  display: block;
}
.hover-box .hover-box-layer_top {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.76);
  color: rgb(0, 0, 0);
  padding: 15px;

  -moz-transition: all 0.4s ease-in-out 0s;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -ms-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}
.hover-box:hover .hover-box-layer_top,
.hover-box.active .hover-box-layer_top {
  opacity: 1;
}
.hover-box .hover-box-text {
  text-align: center;
  font-size: 18px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
    font-family: 'Montserrat', Monserrat;
  font-size: 2rem;
}

h2 {
  font-family: "Jost", Jost, "Jost *", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 41px;
  margin-bottom: 0.2em;
  color: #000000;
}
h3 {
  margin-bottom: 0.2rem !important;
  margin-top: 0.2rem !important;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Jost", Jost, "Jost *", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-weight: 600;
}

p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 132.4%;
  /* or 24px */

  color: rgba(0, 0, 0, 0.9);
}
.root {
  padding: 35px;
}
.box-wsh {
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 11px 18px 11px 18px;
}
.box-container {
  padding: 35px;
  display: flex;
  flex-flow: row wrap;
}

@media screen and (max-width: 1215px) {
  .box-container {
    justify-content: center;
  }
}

.box-wsh::after {
  background-color: aquamarine;
  content: "";
}

details > div {
  padding-left: 0.5rem;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  border-left: solid #e7e7e7;
}

summary {
  font-size: 18px;
  font-style: italic;
}
.content {
  p:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  h2:not(:first-child) {
    margin-top: 1rem;
  }
}
details {
  margin-top: 0.25rem;
}
</style>
