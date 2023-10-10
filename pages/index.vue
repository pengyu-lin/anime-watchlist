<template>
  <div>
    <p class="category-title">looking for an anime?</p>
    <div class="grid grid-cols-2 gap-6 mb-6 md:grid-cols-4">
      <div>
        <label class="search-label" for="name">Name</label>
        <input
          class="search-input"
          placeholder="Please Enter"
          id="name"
          type="text" />
      </div>
      <!-- <div>
        <label class="search-label" for="genre">Genre</label>
        <select class="search-input" id="genre" v-model="searchQuery.genre">
          <option disabled value="">Please Select</option>
          <option v-for="item in genreInOrder" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div>
        <label class="search-label" for="year">Year</label>
        <select class="search-input" id="year" v-model="searchQuery.year">
          <option disabled value="">Please Select</option>
          <option
            v-for="item in years.data"
            :key="item.year"
            :value="item.year">
            {{ item.year }}
          </option>
        </select>
      </div> -->
      <div>
        <label class="search-label" for="season">Season</label>
        <select class="search-input" id="season" v-model="searchQuery.season">
          <option disabled value="">Please Select</option>
          <option v-for="item in seasons" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="category-title">Popular This Season</p>
      <p>View All</p>
    </div>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <ClientOnly>
        <div
          v-for="item in top6Now"
          :key="item.mal_id"
          class="shrink-0 w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <div class="aspect-w-9 aspect-h-13">
            <nuxt-link :to="`/${item.mal_id}`">
              <img
                class="object-cover w-full h-full rounded-md"
                :src="item.images.jpg.image_url"
                :alt="item.title" />
            </nuxt-link>
          </div>
          <p class="line-clamp-2">{{ item.title }}</p>
        </div>
      </ClientOnly>
    </div>
    <div class="flex justify-between">
      <p class="category-title">Upcoming</p>
      <p>View All</p>
    </div>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <ClientOnly>
        <div
          v-for="item in top6Upcoming"
          :key="item.mal_id"
          class="shrink-0 w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <div>
            <div class="aspect-w-9 aspect-h-13">
              <nuxt-link :to="`/${item.mal_id}`">
                <img
                  class="object-cover w-full h-full rounded-md"
                  :src="item.images.jpg.image_url"
                  :alt="item.title" />
              </nuxt-link>
            </div>
            <p class="line-clamp-2">{{ item.title }}</p>
          </div>
        </div>
      </ClientOnly>
    </div>
    <div class="flex justify-between">
      <p class="category-title">All Time Popular</p>
      <p>View All</p>
    </div>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <ClientOnly>
        <div
          v-for="item in top6Anime"
          :key="item.mal_id"
          class="shrink-0 w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <div>
            <div class="aspect-w-9 aspect-h-13">
              <nuxt-link :to="`/${item.mal_id}`">
                <img
                  class="object-cover w-full h-full rounded-md"
                  :src="item.images.jpg.image_url"
                  :alt="item.title" />
              </nuxt-link>
            </div>
            <p class="line-clamp-2">{{ item.title }}</p>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
//get trending
const { data: topAnime } = await useFetch("https://api.jikan.moe/v4/top/anime");
const top6Anime = topAnime.value.data.splice(0, 6);

// get seasons now
const { data: seasonNow } = await useFetch(
  "https://api.jikan.moe/v4/seasons/now"
);
const top6Now = seasonNow.value.data.splice(0, 6);

//get seasons upcoming
const { data: seasonUpcoming } = await useFetch(
  "https://api.jikan.moe/v4/seasons/upcoming"
);
const top6Upcoming = seasonUpcoming.value.data.splice(0, 6);

// genre 跟 seaons 會有問題
//get anime genre
// const { data: genre } = await useFetch("https://api.jikan.moe/v4/genres/anime");
// //sort genre in alphabetical order
// const genreInOrder = computed(() => {
//   if (!genre.value || !genre.value.data) {
//     return null;
//   }
//   const list = [];
//   for (let i = 0; i < genre.value.data.length; i++) {
//     list.push({
//       name: genre.value.data[i].name,
//       id: genre.value.data[i].mal_id,
//     });
//   }
//   list.sort((a, b) => a.name.localeCompare(b.name));
//   return list;
// });

const searchQuery = ref({
  genre: "",
  year: "",
  season: "",
});

// //get year list
// const { data: years } = await useFetch("https://api.jikan.moe/v4/seasons");

//season list
const seasons = ref(["winter", "spring", "summer", "fall"]);
</script>

<style lang="scss" scoped></style>
