<template>


      <div class="root-lightBox">

        <div class="box-title">{{boxTitle}}</div>
        <div class="box-desc">{{desc}}</div>
        <div class="box-tags tags">
          <a class="box-tag tag" v-for="(tag, ctx) in tags" :key="ctx" @click="linkTag(tag)">
            <span class="icon tag-icon">
              <i :class="tag[0]"></i>
            </span>
            {{tag[1]}}
          </a>
        </div>

  </div>
</template>



<script>
import { MessageBox } from "element-ui";
export default {
  name: "lightBox",
  props: ["boxTitle", "desc", "tags", "nlink"],
  data() {
    return {
      askedDoc: null,
      isSoon: null
    };
  },

  methods: {
    linkTag: function(ctx) {
      console.log(this.$event);
      if (ctx[1] === "Attestation de stage") {
        this.askedDoc = ctx[1];
        this.open();
      } else if (ctx[1] === "lettre de recommandation") {
        this.askedDoc = ctx[1];
        this.open();
      } else {
        console.log(ctx[2]);
        if (ctx[2] !== undefined) {
          console.log("cc");
          this.isSoon = true;
          window.open(ctx[2]);
        }
      }
    },
    open() {
      this.$confirm("Il vous faut une autorisation pour pouvoir accéder à ce fichier, envoyez un email au propriétaire", "Info", {
        confirmButtonText: "Let's go",
        cancelButtonText: "Annuler",
        type: "info"
      }).then(() => {
        window.open(`mailto:matteo.gauthier@gmail.com?subject=Demande%20d'obtention%20du%20document%20'${this.askedDoc}'&body=Pourquoi%20%3F%20%3A%0A%0AQui%20%C3%AAtes%20vous%20%3F%20%3A%0A`, "_blank");
      });
    }
  }
};
</script>

<style src="element-ui/lib/theme-chalk/index.css"></style>
<style lang="scss" scoped>
.tag-icon {
  padding-right: 2px;
}
.root-lightBox {
  margin: 0.5rem;
  max-width: 406px;
  min-width: 18rem;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 11px 18px 11px 18px;
  .box-title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;

    color: #000000;
  }
  .box-desc {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    // line-height: 22px;

    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 528px) {
  // .root-lightBox {
  //   margin: 0;
  //   margin-block-start: 0.5rem;
  //   margin-block-end: 0.5rem;
  // }
}
</style>
