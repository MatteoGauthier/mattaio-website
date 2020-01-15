<template>
  <div class="contact-app">
    <div class="accroche">
      <div class="contact-title">Contact</div>
      <div class="contact-sub">wanna get in touch ?</div>
    </div>
    <div class="flex">


    <div class="social columns"><div class="column flex-h">
      <div class="contact-button" id="email">
        <span clas="contact-button-text">send me an email</span>
      </div>
      <div class="contact-button" id="telegram">
        <span clas="contact-button-text">connect on Telegram</span>
      </div>
      <div class="contact-button" id="instagram">
        <span clas="contact-button-text">follow me on Instagram</span>
      </div></div>
      <div class="column flex-h">
      <div class="contact-button" id="twitter">
        <span clas="contact-button-text">follow me on Twitter</span>
      </div>
      <div class="contact-button" id="github">
        <span clas="contact-button-text">visit my github</span>
      </div>
      <div class="contact-button" id="dev.to">
        <span clas="contact-button-text">checkout my dev.to</span>
      </div>
    </div> </div></div>

  </div>
</template>

<script>
//   import 'node_modules/bulma-modal-fx/dist/css/modal-fx.min.css'
//   import 'node_modules/bulma-modal-fx/dist/js/modal-fx.min.js'
export default {
  asyncData(context) {
    // appelé avant le chargement du composant
    return {
      message: ""
    };
  },
  mounted() {
    !(function() {
      var t, n, e, o, e, l, c, a, d, i, m, u, s;
      ((t = "data-target"),
      (n = "is-active"),
      (e = ".modal-button"),
      (o = ".modal-close"),
      (l = ".modal-button-close"),
      (c = ".modal-background"),
      (a = function(e, t) {
        document.querySelectorAll(e).forEach(function(e) {
          e.addEventListener("click", t);
        });
      }),
      (d = function() {
        document.querySelectorAll("." + n).forEach(function(e) {
          e.classList.remove(n);
        }),
          s();
      }),
      (i = function() {
        var e = this.getAttribute(t);
        u(), document.getElementById(e).classList.add(n);
      }),
      (m = function() {
        var e = this.parentElement.id;
        document.getElementById(e).classList.remove(n), s();
      }),
      (u = function() {
        (document.getElementsByTagName("html")[0].style.overflow = "hidden"), (document.getElementsByTagName("body")[0].style.overflowY = "scroll");
      }),
      (s = function() {
        (document.getElementsByTagName("html")[0].style.overflow = ""), (document.getElementsByTagName("body")[0].style.overflowY = "");
      }),
      {
        init: function() {
          a(e, i),
            a(o, m),
            a(l, d),
            a(c, m),
            document.addEventListener("keydown", function(e) {
              27 == e.keyCode && d();
            });
        }
      }).init();
    })();
  }
};
</script>
<style scoped lang="scss">
@import url("https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css");
.contact-app {
  background: #fafafa url("~static/Background SVG.svg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  // display: flex;
  position: absolute;
  background-position: 7vw -32vh;
}
.flex {
    display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.flex-h {
text-align: center;
}
.social {
    // display: flex;
    // align-items: center;
    height: 300px;
    width: 600px;
    // justify-content: center;
    // flex-flow: row wrap;
}


.contact-button {
// flex-basis: 33%;
  padding: 18px 16px;
// flex-shrink: 100%;

  margin: 23px;
position: relative;
    display: inline-flex;

  background: linear-gradient(75deg, #6d78ff, #00ffb8);
  z-index: 1;;
  &::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1;
}
}


.accroche {
  padding-top: 230px;
  width: 100%;
  text-align: center;
  font-family: "Jost", Jost, "Jost *", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .contact-title {
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 130%;
    /* identical to box height */
    text-align: center;

    color: #000000;
  }
  .contact-sub {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 0%;

    text-align: center;

    color: #3f3f3f;
  }
}

.tos {
  height: 85vh;
}
</style>
