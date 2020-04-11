<template>
  <div>
    <NavBar />
    <nuxt />
    <portal-target name="modals"></portal-target>
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { NavBar, Footer },
  mounted() {
    console.log(this.$route);
    if (this.$route.query.hasOwnProperty("feedback")) {
      console.log("opening feeback from path instruction");
      this.openFeedback();
    }
  },
  created() {
    if (process.client) {
      window.addEventListener("keyup", e => this.parseEvent(e));
    }
    setTimeout(() => {
      this.$notibar.add("Tu peux laisser un feedback sur mon site en cliquant ici ou en appuyant sur Space/Enter/F");
    }, 50000);
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("keyup", e => this.parseEvent(e));
    }
  },
  methods: {
    openFeedback() {
      // console.log(e)
      this.$store.commit("setFeedback", true);
    },
    closeFeedback() {
      // console.log(e)
      this.$store.commit("setFeedback", false);
    },
    parseEvent(e) {
      // console.log(e)
      if (e.code == "Space" || e.code == "Enter" || e.code == "KeyF") {
        this.openFeedback();
      } else if (e.code == "Escape") {
        this.closeFeedback();
      }
    }
  }
};
</script>

<style>
.origin-top-right {
  transform-origin: top right;
}
.transition-all {
  transition-property: all;
}
.transition-fastest {
  transition-duration: 50ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.ease-out-quad {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.scale-70 {
  transform: scale(0.7);
}
.scale-100 {
  transform: scale(1);
}
</style>
