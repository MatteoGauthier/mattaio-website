<template>
  <div class="page-container">
    <TheNavbar/>
    <nuxt/>

    <Footer/>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import Footer from "@/components/Footer.vue";
import tippy from "tippy.js";

export default {
  components: {
    TheNavbar,
    Footer
  },
  mounted() {
    var soonPop = document.querySelectorAll(".soonPop");
    tippy(soonPop, {
      content: "Soon",
      placement: "bottom",
      theme: "light-border"
    });
    
    var enTravaux = document.querySelectorAll(".enTravaux");
    tippy(enTravaux, {
      content: "En travaux",
      placement: "left",
      theme: "light-border"
    });
    
    }
};
</script>

<style lang="scss">

footer {
    display: flow-root;
    padding: 3rem 1.5rem 3rem !important; // TODO I don't know how to override the bulma default value
  }
html, body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}

.page-container {
  position: relative;
  min-height: 100vh;
}

nuxt {
  padding-bottom: 2.5rem;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
