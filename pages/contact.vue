<template>
  <div class="contact-app">
    <div class="accroche">
      <div class="contact-title">Contact</div>
      <div class="contact-sub">wanna get in touch ?</div>
    </div>
    <div class="flex">
      <div class="social columns">
        <div class="column flex-h">
          <a target="_blank" href="https://twitter.com/MattixNow" class="contact-button" id="twitter">
            <i class="fab fa-twitter fa-2x"></i>
            <span class="contact-button-text">follow me on Twitter</span>
          </a>
          <a target="_blank" href="https://dev.to/MatteoGauthier" class="contact-button" id="dev-to">
            <i class="fab fa-dev fa-2x"></i>
            <span class="contact-button-text">checkout my dev.to</span>
          </a>
          <a target="_blank" href="https://github.com/MattixNow" class="contact-button" id="github">
            <i class="fab fa-github fa-2x"></i>
            <span class="contact-button-text">visit my github</span>
          </a>
        </div>
        <div class="column flex-h">
          <a class="contact-button" id="instagram">
            <i class="fab fa-instagram fa-2x"></i>
            <span class="contact-button-text">follow me on Instagram</span>
          </a>
          <a target="_blank" href="mailto:hello@mattèo.dev" class="contact-button" id="email">
            <i class="fas fa-envelope fa-2x"></i>
            <span class="contact-button-text">send me an email</span>
          </a>
          <a target="_blank" href="https://t.me/MatteoGauthier" class="contact-button" id="telegram">
            <i class="fab fa-telegram-plane fa-2x"></i>
            <span class="contact-button-text">connect on Telegram</span>
          </a>
        </div>
      </div>
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
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:600&display=swap');
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
  width: 700px;

  // justify-content: center;
  // flex-flow: row wrap;
  #email {
    background: #0053fa;
    background-size: cover;
  }
  #telegram {
    background: linear-gradient(180deg, #37aee2 0%, #1e96c8 100%), linear-gradient(180deg, #37aee2 0%, #1e96c8 100%);
    background-size: cover;
  }
  #instagram {
    background: url("data:image/jpeg;base64,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");
    background-size: cover;
  }
  #twitter {
    background: linear-gradient(129.99deg, #00c2ff 0%, #0075ff 59.65%);
    background-size: cover;
  }
  #github {
    background: #0366d6;
    background-size: cover;
  }
  #dev-to {
    background: url("data:image/jpeg;base64,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");
    background-size: cover;
  }
}

.contact-button {
  // flex-basis: 33%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 18px 16px;
  border-radius: 12px;
  // flex-shrink: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .contact-button-text {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-left: 16px;
  }

  margin: 23px;
  position: relative;
  display: inline-flex;

  background: linear-gradient(75deg, #6d78ff, #00ffb8);
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    transform: scale(1.1);
    &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: inherit;
    top: 6px;
    right: 0;
    filter: blur(15px);
    opacity: 0.5;
    z-index: -1;
  }
  }
  &::after {
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: inherit;
    top: 6px;
    right: 0;
    filter: blur(11px);
    opacity: 0.8;
    z-index: -1;
  }
}

@media screen and (max-width: 528px) {
  .contact-button {
    display: flex;
    justify-content: left;
  }
}

.accroche {
  padding-top: 12vw;
  padding-bottom: 1.5rem;
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
