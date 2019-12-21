<template>
  <div>
    <div class="bg"></div>
    <div class="contain">
      <div class="the-top">
        <div class="acroche yo">
          <div id="title">{{heroGuy}}</div>
          <div class="a-subtitle">{{heroDesc.a}}</div>
          <div class="a-subtitle">{{heroDesc.b}}</div>
        </div>
        <div class="rectangle yo">
          Hey, my name is Mattèo, I’m 17 yo. I live in Poitiers in France. I am a novice
          developer
          who is currently working with technologies such as Javascript, Python, Node.js and obviously Web. I can also
          use
          editing softwares like Premiere Pro, Photoshop or Figma. My actual status is middleschool student on my 12th
          year.
        </div>
      </div>
      <div class="floating-listening" v-show="spotifyFetch.title !== null">
        <div class="spot-box">
          <div id="spotTop">
            <div class="nowlisten">Now listening..</div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 0C8.05855 0 0 8.05855 0 18C0 27.9415 8.05855 36 18 36C27.9415 36 36 27.9415 36 18C36 8.05977 27.9415 0.00122825 18 0ZM26.2551 25.9603C25.932 26.4909 25.2405 26.6567 24.7124 26.3337C20.486 23.7507 15.1652 23.1672 8.8999 24.5982C8.2956 24.7369 7.69376 24.3586 7.55619 23.7543C7.4174 23.1501 7.79447 22.5482 8.4 22.4106C15.2561 20.8446 21.1382 21.5189 25.8829 24.4176C26.4111 24.7431 26.5793 25.4321 26.2551 25.9603ZM28.4573 21.0608C28.0508 21.7216 27.1861 21.9279 26.5265 21.5226C21.6897 18.549 14.3128 17.688 8.59038 19.4248C7.84852 19.6495 7.06489 19.2307 6.83889 18.4901C6.61535 17.7482 7.03419 16.9658 7.77482 16.7398C14.3116 14.7562 22.4389 15.7167 27.9943 19.1312C28.6551 19.5378 28.8639 20.4012 28.4573 21.0608ZM28.6465 15.9562C22.8442 12.511 13.2737 12.1941 7.73429 13.8743C6.84504 14.1445 5.9042 13.6422 5.63521 12.7529C5.36622 11.8637 5.86735 10.9228 6.75783 10.6526C13.1165 8.72303 23.6856 9.09519 30.3648 13.06C31.1644 13.5353 31.4272 14.5683 30.9531 15.3666C30.4802 16.1674 29.4448 16.4315 28.6465 15.9562Z"
                fill="#1DB954"
              />
            </svg>
          </div>

          <div id="spotMain">
            <div class="spotThumb">
              <img :src="spotifyFetch.thumbnail" alt />
            </div>
            <div class="spotInfo">
              <div id="spotTitle">{{spotifyFetch.title}}</div>
              <div id="spotArtists">{{spotifyFetch.artists}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostsPreview from "@/components/PostsPreview.vue";
import Snackbar from "node-snackbar";

export default {
  async asyncData({ params, error }) {
    try {
      const res = await axios.get("https://api.jsonbin.io/b/5dc840e6c9b247772abd680b/latest");
      let randomChoice = Math.floor(Math.random() * res.data.length);
      let names = res.data[randomChoice].artists.map(item => item.name);
      let nameString = names.join(", ");
      // console.log(res.data[randomChoice].album.images[2].url)
      return {
        spotifyFetch: {
          title: res.data[randomChoice].name,
          artists: nameString,
          thumbnail: res.data[randomChoice].album.images[1].url
        }
      };
    } catch (error) {
      console.log(error);
      return {
        spotifyFetch: {
          title: null,
          artists: null,
          thumbnail: null
        }
      };
    }
  },
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
      text: "This website is in BETA",
      duration: 5000,
      actionTextColor: "#af4c4c",
      pos: "bottom-left"
    });
  }
};
</script>

<style scoped lang="scss">
//@import url('https://indestructibletype.com/fonts/Jost.css');

#title {
  font-weight: 700;
  line-height: 40px;
}

// spot
.floating-listening {
  margin-left: 27%;
}
.spot-box {
  display: inline-block;
  background-color: #0e0c0c;
  padding: 14px;
  padding-top: 5px;
  border-radius: 4px;
  max-width: 50%;
  #spotTop {
    font-size: 32px;
    font-family: "Montserrat", Montserrat, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nowlisten {
      background: -webkit-linear-gradient(transparent, transparent), url("~static/maskSpot2.webp") repeat;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
    svg {
      float: left;
      margin-left: 25px;
    }
  }
  .spotInfo {
    line-height: 1.6em;
    margin-top: 1.1rem;
    text-shadow: 2px 3px 4px black;
    text-align: initial;
  }

  #spotTitle {
    font-family: "Jost", Jost, "Jost *";
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    transform: translate(-28px, -4px);
    // overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 32rem;
    line-height: 2.2rem;
    overflow: hidden;
  }
  #spotArtists {
    font-family: "Jost", Jost, "Jost *";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    transform: translate(-16px, -8px);
    // overflow: hidden;
    white-space: nowrap;
  }
  #spotMain {
    color: white;
    display: flex;
    .spotThumb {
      width: 86px;
      height: 86px;
      img {
        border-radius: 4px;
      }
    }
  }
}

.bg {
  background-image: url("~assets/res/bg.svg");
  width: 100%;
  height: 100%;
  /* padding-top: 52px; */
  background-size: contain;
  z-index: -1;
  background-position-y: 108px;
  position: absolute;
  //filter: hue-rotate(-75deg)
}

.contain {
  font-family: "Jost", Jost, "Jost *", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 2;
  font-display: swap;
  // height: 100vh;
}

.the-top {
  display: flex;

  justify-content: space-around;
  align-items: center;
  padding: 13% 6%;
  padding-bottom: 3%;
}

.rectangle {
  width: 37%;
  // height: 233px;

  background: rgba(255, 255, 255, 0.68);
  border: 9px solid #e9e6ff;
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

  .a-subtitle {
    color: #a2acbd;

    font-weight: 500;
    font-size: 32px;
    line-height: 100%;
  }

  .a-subtitle:nth-child(2) {
    color: #6e7788;
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
  .floating-listening {
    text-align: center;
    margin: 0;
  }
  .spot-box {
    max-width: none;
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
