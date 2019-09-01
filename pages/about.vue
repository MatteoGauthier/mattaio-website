<template>
  <div class="tos">
    <div class="hero has-text-centered">
      <div class="hero-body title has-background-gradient hue-rotate-static">
        <div class="container">
          <div class="boxs">
            <div class="title has-text-white" id="blog-text">
              About
              <i class="fas fa-info-circle"></i>
            </div>
            <div class="subtitle has-text-white">Plus d'info sur Mattèo Gauthier</div>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class>
          <a href='CV_MattèoGauthier_2019.pdf'>
          <figure class="responsive-img">
            <img class="" src="CV_MattèoGauthier_2019 blur.svg" alt />
            <figcaption>Retrouve mon CV ici <i class="fas fa-arrow-up"></i></figcaption>
          </figure></a>
          <h1 class="title">Présentation</h1>
          <p class="content">
            Bonjour je m’appelle Mattèo Gauthier, j'habite dans la ville de Poitiers.
            J'ai actuellement 17 ans et je suis en première au Lycée Nelson Mandela. Depuis quelques années je m'intéresse aux nouvelles technologies, plus précisément à l'informatique. J'ai commencé par le montage vidéo à l'âge de 14 ans, aujourd'hui je centre mon apprentissage sur le développement web (Plus de précision sur mes expériences et mes compétences).
          </p>
        </div>
      </div>
    </section>
    <!-- <article>
      <h1 class="title">A propos</h1>
      <p>Bonjour et bienvenue sur mon blog, il me permet de créer des posts en tout genre et surtout de tester le framework nuxt.js</p>
    </article>-->
  </div>
</template>

<script>
export default {};
</script>


<style scoped lang="scss">
.container {
  margin: 0 auto;
}

.responsive-img {
  width: 40%;
  height: auto;
  float: right;
      margin-left: 1rem;

      img {
        box-shadow: 3px 3px 10px #00000038;
    border-radius: 5px;
      }
}
@media (max-width: 768px) {
  .responsive-img {
    float: none;
    width: 100%;
  }
}

article * {
  margin-bottom: 1rem;
}

.title {
  font-size: 2rem;
}
</style>
