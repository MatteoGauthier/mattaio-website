import Vue from "vue";
import VueLazyload from "vue-lazyload";

import error from "../assets/images/error.svg";
import loading from "../assets/images/loading.svg";

Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
});
