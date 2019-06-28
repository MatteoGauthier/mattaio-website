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
        <div class="rectangle yo">Hey, my name is Mattèo, I’m 16 yo. I live in Poitiers in France. I am a novice
          developer
          who is currently working with technologies such as Javascript, Python, Node.js and obviously Web. I can also
          use
          editing software like Premiere Pro, Photoshop or Figma. My actual status is middleschool student on my 12th
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
    background-image: url("data:image/svg+xml,%3Csvg width='2066' height='1061' viewBox='0 0 2066 1061' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M168.111 513.397C133.843 505.061 104.089 485.688 70.3504 499.192C36.612 512.696 42.7172 513.854 32.3706 519.027C15.1896 527.617 1.83475 540.53 0.572641 561.355C-1.85347 601.385 2.82654 642.436 26.3238 675.932C52.199 712.818 94.3385 741.919 136.001 758.397C166.286 770.376 210.392 766.313 224.826 732.126C229.436 721.208 229.608 708.726 235.043 698.243C239.931 688.816 243.994 678.61 248.18 668.842C262.96 634.354 257.797 583.38 236.712 552.806C220.17 528.821 195.548 520.071 168.111 513.397Z' fill='url(%23paint0_linear)' fill-opacity='0.5'/%3E%3Cpath d='M1914.35 491.957C1964.25 513.796 1983.13 500.214 1992.92 570.79C2002.7 641.365 2022.09 637.777 2021.46 659.109C2020.83 680.441 2020.12 682.636 2017.99 689.253C2013.41 703.492 2007.23 718.865 1996.76 729.732C1979.53 747.612 1951.44 768.386 1925.9 770.567C1909.28 771.986 1894.43 769.249 1878.07 774.233C1864.92 778.237 1850.5 784.78 1836.56 784.097C1826.71 783.615 1816.04 779.225 1806.96 775.487L1806.53 775.312C1783.42 765.803 1755.8 761.443 1735.28 746.913C1693.04 716.994 1715.91 661.903 1732.51 623.798C1741.41 603.386 1748.68 582.855 1762.32 564.831C1779.57 542.044 1797.49 523.588 1820.87 506.784C1850.26 485.656 1879.9 476.882 1914.35 491.957Z' fill='url(%23paint1_linear)' fill-opacity='0.5'/%3E%3Cpath d='M1126.59 850.442C1156.16 832.073 1165.79 782.114 1211.22 770.771C1256.64 759.429 1274.49 761.304 1291.62 761.304C1313.71 761.304 1335.74 760.906 1357.2 767.038C1378.12 773.014 1391.89 781.752 1408.39 795.5C1425.62 809.858 1441.71 827.944 1446.44 850.546C1450.19 868.454 1451.44 888.255 1452.59 906.525L1452.59 906.636C1455.58 954.069 1456.72 1036.13 1400.05 1054.05C1373.65 1062.4 1344.29 1060.18 1316.96 1059.58C1286.59 1058.91 1255.63 1059.28 1228.24 1044.67C1197.8 1028.44 1171.55 1003.2 1147.33 978.989C1127.59 959.243 1103.51 931.1 1096.25 903.508C1089.13 876.467 1105.97 863.251 1126.59 850.442Z' fill='url(%23paint2_linear)' fill-opacity='0.5'/%3E%3Cpath d='M1690.09 46.688C1700.05 25.2051 1699.68 17.4864 1720.58 8.69649C1750.78 0.508307 1788.87 -4.67132 1819 6.0901C1860.07 20.7583 1885.19 64.1178 1877.7 107.218C1873.97 128.654 1857.07 142.097 1840.27 153.925C1821.74 166.963 1800.01 179.527 1777.61 184.159C1759.61 187.879 1735.94 189.175 1718.91 180.822C1701.45 172.258 1695.79 146.378 1692.12 129.32C1686.31 102.305 1678.23 72.2899 1690.09 46.688Z' fill='url(%23paint3_linear)' fill-opacity='0.5'/%3E%3Cpath d='M720.602 309.993C710.727 278.996 711.924 271.091 732.425 237.091C752.925 203.091 824.261 204.452 878.758 228.882C930.969 252.287 997.038 352.447 922.649 390.165C855.158 424.386 744.193 384.042 720.602 309.993Z' fill='url(%23paint4_linear)' fill-opacity='0.5'/%3E%3Cpath d='M185.169 100.291C176.005 61.1186 185.589 33.1879 242.089 35.1878C298.588 37.1878 326.016 31.8149 376.589 62.6879C425.04 92.2664 352.12 196.521 283.089 244.188C220.457 287.435 207.061 193.872 185.169 100.291Z' fill='url(%23paint5_linear)' fill-opacity='0.5'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='-180.782' y1='533.781' x2='280.461' y2='706.527' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%233413FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='2090.86' y1='323.13' x2='1719.84' y2='765.412' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%233413FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear' x1='841.585' y1='804.664' x2='1443.03' y2='1089.19' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%233413FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear' x1='1546.59' y1='27.188' x2='1888.59' y2='167.688' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%233413FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint4_linear' x1='544.536' y1='238.833' x2='941.37' y2='435.929' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%233413FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint5_linear' x1='588.088' y1='4.18799' x2='177.06' y2='254.17' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%233413FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
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
