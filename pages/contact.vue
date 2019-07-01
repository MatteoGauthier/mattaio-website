<template>
  <div class="tos">
    <div class="hero has-text-centered">
      <div class="hero-body title has-background-gradient hue-rotate-static">
        <div class="container ">
          <div class="boxs">

            <div class="title has-text-white" id="blog-text">Contact <i class="fas fa-address-card"></i></div>
            <div class="subtitle has-text-white">Retrouve ici mes dernières publications</div>
          </div>

        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <article class="column">
            <div class="content is-medium">
              <div><i class="fab fa-telegram-plane"></i> Telegram <a
                  href="https://t.me/MatteoGauthier">t.me/MatteoGauthier</a></div>
              <div><i class="far fa-envelope"></i> Email <a
                  href="mailto:matteo.gauthier@gmail.com">matteo.gauthier@gmail.com</a></div>
              <div><i class="fab fa-twitter"></i> Twitter <a
                  href="https://twitter.com/MattixNow">twitter.com/MattixNow</a></div>
              <div><i class="fab fa-instagram"></i> Instagram <a class="modal-button"
                  data-target="modal-fadeInScale-fs">Private</a></div>

              <div><i class="fab fa-dev"></i> Dev.to <a href="https://dev.to/MatteoGauthier">dev.to/MatteoGauthier</a>
              </div>
              <div><i class="fab fa-github"></i> Github <a href="https://github.com/MattixNow">github.com/MattixNow</a>
              </div>

            </div>
          </article>

        </div>
      </div>
    </section>
    <div id="modal-fadeInScale-fs" class="modal modal-fx-fadeInScale">

      <div class="modal-background"></div>
      <div class="modal-content notification">
        <h1 class="title">Private Question (FR)</h1>
        <label class="label">Comment ce nomme le lycée où je fais mes études ?</label>
        <input class="input" id="pss" type="text" v-model="message" placeholder="modifiez-moi">
        <!-- TODO fix Close on first value  -->
        <form method="POST">
          <div class="h-captcha" data-sitekey="2b46b432-c50d-4167-819b-b0a48722f850"></div>
          <script src="https://hcaptcha.com/1/api.js" async defer></script>
        </form>
        <div v-if="message === 'Nelson Mandela'" class="conditional">
          <div class="is-size-4">Voici mon instagram
            <a class="button" href="https://instagram.com/matteo.gauthier_">@matteo.gauthier_</a></div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>

    </div>

  </div>
</template>

<script>
  //   import 'node_modules/bulma-modal-fx/dist/css/modal-fx.min.css'
  //   import 'node_modules/bulma-modal-fx/dist/js/modal-fx.min.js'
  export default {
    asyncData(context) {
      // appelé avant le chargement du composant
      return {
        message: ''
      }
    },
    mounted() {

      ! function () {
        var t, n, e, o, e, l, c, a, d, i, m, u, s;
        (t = "data-target", n = "is-active", e = ".modal-button", o = ".modal-close", l = ".modal-button-close", c =
          ".modal-background", a = function (e, t) {
            document.querySelectorAll(e).forEach(function (e) {
              e.addEventListener("click", t)
            })
          }, d = function () {
            document.querySelectorAll("." + n).forEach(function (e) {
              e.classList.remove(n)
            }), s()
          }, i = function () {
            var e = this.getAttribute(t);
            u(), document.getElementById(e).classList.add(n)
          }, m = function () {
            var e = this.parentElement.id;
            document.getElementById(e).classList.remove(n), s()
          }, u = function () {
            document.getElementsByTagName("html")[0].style.overflow = "hidden", document.getElementsByTagName("body")[
                0]
              .style.overflowY = "scroll"
          }, s = function () {
            document.getElementsByTagName("html")[0].style.overflow = "", document.getElementsByTagName("body")[0]
              .style
              .overflowY = ""
          }, {
            init: function () {
              a(e, i), a(o, m), a(l, d), a(c, m), document.addEventListener("keydown", function (e) {
                27 == e.keyCode && d()
              })
            }
          }).init()
      }();

    },
  }

</script>
<style scoped lang="scss">
  @import url('https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css');

  .tos {
    height: 85vh;
  }

</style>
