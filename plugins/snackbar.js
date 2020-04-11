import Vue from "vue";
import VueNotibar from "vue-notibar";

Vue.use(VueNotibar, {
  position: 'left',
  time: '3000',
  dismiss: {
    show: true,
    color: "#FFF"
  }
});
