import Vue from 'vue'
import Splitting from 'splitting'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

// Don't works

Vue.use(Splitting)

export default ({ app }, inject) => {
  inject('Splitting', Splitting() )
}
