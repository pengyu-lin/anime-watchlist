<template>
  <div>
    <p class="category-title">looking for an anime?</p>
    <div class="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
      <div>
        <label class="search-label" for="name">Name</label>
        <input
          class="search-input"
          placeholder="Please Enter"
          id="name"
          type="text" />
      </div>
      <div>
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
      </div>
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
      <div
        v-for="item in seasonNow"
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
    </div>
    <div class="flex justify-between">
      <p class="category-title">Upcoming</p>
      <p>View All</p>
    </div>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <div
        v-for="item in seasonUpcoming"
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
    </div>
    <div class="flex justify-between">
      <p class="category-title">All Time Popular</p>
      <p>View All</p>
    </div>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <div
        v-for="item in topAnime"
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
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

// get seasons now
const seasonNow = ref();
const getSeasonNow = async () => {
  let top6;
  await nextTick();
  const { data, pending, error, refresh } = await useFetch(
    "https://api.jikan.moe/v4/seasons/now"
  );
  if (error.value) {
    getSeasonNow();
  } else {
    top6 = data.value.data.splice(0, 6);
    seasonNow.value = top6;
  }
};
getSeasonNow();

//get seasons upcoming
const seasonUpcoming = ref();
const getSeasonUpcoming = async () => {
  let top6;
  await nextTick();
  const { data, pending, error, refresh } = await useFetch(
    "https://api.jikan.moe/v4/seasons/upcoming"
  );
  if (error.value) {
    getSeasonUpcoming();
  } else {
    top6 = data.value.data.splice(0, 6);
    seasonUpcoming.value = top6;
  }
};
getSeasonUpcoming();

//get trending
const topAnime = ref();
const getTopAnime = async () => {
  let top6;
  await nextTick();
  const { data, pending, error, refresh } = await useFetch(
    "https://api.jikan.moe/v4/top/anime"
  );
  if (error.value) {
    getTopAnime();
  } else {
    top6 = data.value.data.splice(0, 6);
    topAnime.value = top6;
  }
};
getTopAnime();

// genre 跟 seaons 會有問題
//get anime genre
const { data: genre } = await useFetch("https://api.jikan.moe/v4/genres/anime");
//sort genre in alphabetical order
const genreInOrder = computed(() => {
  if (!genre.value || !genre.value.data) {
    return null;
  }
  const list = [];
  for (let i = 0; i < genre.value.data.length; i++) {
    list.push({
      name: genre.value.data[i].name,
      id: genre.value.data[i].mal_id,
    });
  }
  list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
});

const searchQuery = ref({
  genre: "",
  year: "",
  season: "",
});

// //get year list
const { data: years } = await useFetch("https://api.jikan.moe/v4/seasons");

//season list
const seasons = ref(["winter", "spring", "summer", "fall"]);
</script>

<style lang="scss" scoped></style>
