<template>
  <div>
    <div class="bg"></div>
    <div class="contain">


      <div class="the-top">
        <div class="acroche yo">
          <div id="title">{{heroGuy}}</div>
          <div id="subtitle">{{heroDesc.a}}</div>
          <div id="subtitle">{{heroDesc.b}}</div>
        </div>
        <div class="rectangle yo">Hey, my name is Mattèo, I’m 17 yo. I live in Poitiers in France. I am a novice
          developer
          who is currently working with technologies such as Javascript, Python, Node.js and obviously Web. I can also
          use
          editing softwares like Premiere Pro, Photoshop or Figma. My actual status is middleschool student on my 12th
          year.</div>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsPreview from "@/components/PostsPreview.vue";
  import Snackbar from "node-snackbar";

  export default {
    data() {
      return {
        heroGuy: "Mattèo Gauthier",
        heroDesc: {
          a: `Novice Developper`,
          b: "Check out Blog"
        }
      };
    },
    components: {
      PostsPreview
    },
    mounted() {
      Snackbar.show({
        text: 'This website is in BETA',
        duration: 5000,
        actionTextColor: '#af4c4c',
        pos: 'bottom-left'
      });

    },
  };

</script>

<style scoped lang="scss">
  //@import url('https://indestructibletype.com/fonts/Jost.css');

  #title {
    font-weight: 700;
  }

  .bg {
    background-image: url('~assets/res/bg.svg');
    width: 100%;
    height: 96%;
    /* padding-top: 52px; */
    background-size: contain;
    z-index: -1;
    background-position-y: 108px;
    position: absolute;
    //filter: hue-rotate(-75deg)
  }

  .contain {
    font-family: 'Jost', Jost, 'Jost *', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    z-index: 2;
    font-display: swap;
    height: 100vh;
  }

  .the-top {
    display: flex;

    justify-content: space-around;
    align-items: center;
    padding: 13% 6%;
  }

  .rectangle {
    width: 37%;
    // height: 233px;

    background: rgba(255, 255, 255, 0.68);
    border: 9px solid #E9E6FF;
    border-radius: 13px;
    font-size: 22px;
    line-height: 33px;
    text-align: justify;
    padding: 12px;
  }

  .acroche {


    #title {
      font-weight: bold;
      font-size: 45px;
      color: black;
    }

    #subtitle {
      color: #a2acbd;

      font-weight: 500;
      font-size: 32px;
      line-height: 100%;
    }

    #subtitle:nth-child(2) {
      color: #6E7788;
    }

  }



  @media screen and (max-width: 1407px) {
    .the-top {
      padding: 13% 0%;
    }
  }

  @media screen and (max-width: 1215px) {
    .the-top {
      padding: 13% 0%;
    }
  }

  @media screen and (max-width: 1023px) {
    .the-top {
      flex-flow: column nowrap;
      padding: 2% 7%;

    }

    .rectangle {
      width: 100%;
    }

    .yo {
      opacity: 1;
      margin: 3% 0;
    }

  }

  @media screen and (max-width: 768px) {
    // Mobile

    .bg {
      background-size: 170%;
    }

    .acroche {
      font-size: 36px;
    }

    #title {
      line-height: 100%;
    }
  }

  .bg,
  .rectangle {
    animation: yuyu 20s linear infinite alternate;
    animation-delay: 0s;
    opacity: 1;
  }

  @keyframes yuyu {
    from {
      filter: hue-rotate(-75deg);
    }

    to {
      filter: hue-rotate(0deg);
    }
  }

</style>
