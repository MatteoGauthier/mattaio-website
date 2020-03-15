<template>
  <div class="relative pb-8 mt-4">
    <div class="container flex flex-col items-center justify-center px-3 mx-auto bg-transparent sm:px-0">
      <div class="flex flex-col items-center justify-center">
        <img class="mb-2" src="~/assets/Resume Plaque.png" alt="Plaque" />
        <p class="w-2/3 text-sm leading-4 text-center">Mon resumé vous permet de rapidement découvrir les domaines qui m'intéressent.</p>
      </div>
      <hr class="w-32 mx-auto my-10 border-black" />
      <div class="flex flex-wrap justify-center">
        <Bio />
        <Experiences :experiences="experiences" />
        <Education :education="education"/>
        <Tools :tools="tools"/>
      </div>
    </div>
  </div>
</template>

<script>


import Bio from "@/components/Portfolio/Bio"
import Experiences from "@/components/Portfolio/Experiences"
import Education from "@/components/Portfolio/Education"
import Tools from "@/components/Portfolio/Tools"
export default {
  components: {
    Bio,
Experiences,
Education,
Tools
  },

  data() {
    return {
      education: [
        {
          name: "Lycée Nelson Mandela",
          desc: "Terminale S SI, Option Sport",
          date: "2017 → 2020"
        },

        { name: "Collège France-Bloch Serazin",desc: "DNB mention bien", date: "2013 → 2017" }
      ],
      tools: [
        "Nuxt.js",
        "Vue.js",
        "Figma",
        "Github",
        "Photoshop",
        "Premiere Pro",
        "Javascript ES6",

      ],
      experiences: [
        {
          name: "Dpliance",
          desc: "Web Designer et Intégrateur",
          date: "2020 → Now"
        },
        {
          name: "StartupWeekend 2019",
          desc: "Hackathon challenge",
          date: "15 November 2019"
        },
        {
          name: "Stage TBWA\\Paris",
          desc: "pole création et dev. web",
          date: "Juillet 2019"
        },
        {
          name: "Stage de 3ème",
          desc: "service info univ poitiers",
          date: "2016"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.mg-cv-img {
  width: 223px;
  height: 317px;
}
/* prettier-ignore */

</style>
