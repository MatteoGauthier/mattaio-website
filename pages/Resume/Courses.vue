<template>
<fragment>
  <div class="container mx-auto">
    <div id="courses-top">
      <div class="text-3xl font-bold text-center text-gray-900">Les cours que j'ai suivis</div>
      <p class="font-light text-center text-gray-800">Retrouvez ici les cours que j'ai effectué pour compléter mon apprentissage</p>
    </div>
    <div>
      <div class="mt-6 mg-courses-categories" v-for="plateform in courses" :key="plateform.name">
        <h1 class="text-2xl font-semibold">{{ plateform.name }}</h1>
        <div class="px-2">
          <div class="flex flex-wrap -mx-4">
            <div class="flex flex-col content-between justify-between flex-auto w-3/12 m-2 border border-gray-300 rounded shadow-sm mg-courses-course" v-for="course in plateform.courses" :key="course.description">
              <div class="flex flex-col m-3">
                <span class="text-lg font-medium text-blue-600">{{ course.name }}</span>
                <span>{{ course.description }}</span>
              </div>
              <div class="flex justify-between border-t items-strech">
                <div class="flex items-center py-2 pl-2">
                  <div v-show="!course.certificate" class="px-2 py-1 mr-2 text-sm text-yellow-900 bg-orange-200 rounded">
                    <span>Certif</span>
                  </div>
                  <div v-show="course.price == 'Free'" class="px-2 py-1 text-sm text-green-900 bg-green-200 rounded">
                    <span>Free</span>
                  </div>
                </div>
                <a :href="`${course.link}?ref=mattèo.dev`" target="_blank" class="flex items-center justify-between px-2 text-white bg-gray-500 rounded-br">
                  <span class="pr-1">Link</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H10.4914V6.65143H13.7219L15.6114 6.49905L15.6724 6.59048L13.6305 8.38857L4 18.019L5.98095 20L15.581 10.3695L17.4095 8.32762L17.501 8.38857L17.3486 10.2781V13.5086H20V4Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </fragment>
</template>

<script>
import axios from "axios";
import Modal from "@/components/Modal";
export default {
  name: 'Courses',
  components: {
    Modal
  },
  asyncData() {
    return axios
      .get("https://api.jsonbin.io/b/5df14e15bc5ffd040097c63a/latest")
      .then(response => {
        const data = response.data.plateforms;
        console.log(data);
        Object.keys(data).map((key, index) => {
          // myObject[key] *= 2;
          console.log(key);
          Object.keys(data[key]).map((k, i) => {
            data[key].courses.sort((a, b) => b.rating - a.rating);
          });
        });
        return {courses : data}
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped></style>
