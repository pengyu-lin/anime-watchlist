<template>
  <div>
    <p class="category-title">looking for something specific?</p>
    <div class="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
      <div>
        <label class="search-label" for="name">Name</label>
        <input
          class="search-input"
          v-model="searchQuery.name"
          @blur="reset"
          @keyup.enter="reset"
          placeholder="Please Enter"
          id="name"
          type="text" />
      </div>
      <div>
        <label class="search-label" for="genre">Genre</label>
        <select
          class="search-input"
          id="genre"
          v-model="searchQuery.genre"
          @change="reset">
          <option disabled value="">Please Select</option>
          <option v-for="item in genreInOrder" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div>
        <label class="search-label" for="year">Year</label>
        <select
          class="search-input"
          id="year"
          v-model="searchQuery.year"
          @change="reset">
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
        <label class="search-label" for="season">Type</label>
        <select
          class="search-input"
          id="season"
          v-model="searchQuery.type"
          @change="reset">
          <option disabled value="">Please Select</option>
          <option v-for="item in types" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <p v-if="searchResult.length === 0" class="category-title">
      Popular This Season
    </p>
    <div v-if="searchResult.length !== 0" class="flex flex-wrap mb-5">
      <div
        v-for="item in searchResult"
        :key="item.mal_id"
        class="shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
        <div class="aspect-w-9 aspect-h-13">
          <nuxt-link :to="`/search/${item.mal_id}`">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="item.images.jpg.image_url"
              :alt="item.title" />
          </nuxt-link>
        </div>
        <p class="line-clamp-2">{{ item.title }}</p>
      </div>
    </div>
    <div v-else class="flex flex-wrap mb-5">
      <div
        v-for="item in seasonNow"
        :key="item.mal_id"
        class="shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
        <div class="aspect-w-9 aspect-h-13">
          <nuxt-link :to="`/search/${item.mal_id}`">
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
</template>

<script setup>
import { onMounted } from "vue";
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
  name: "",
  genre: "",
  year: "",
  type: "",
});

// get year list
const { data: years } = await useFetch("https://api.jikan.moe/v4/seasons");

//season list
const types = ref(["tv", "movie", "ova", "special", "ona", "music"]);

// search data
const searchResult = ref([]);
const currentPage = ref(0);
const lastVisiblePage = ref(1000);
const search = async () => {
  if (currentPage.value < lastVisiblePage.value) {
    currentPage.value++;
  } else {
    return;
  }
  let url = `https://api.jikan.moe/v4/anime?page=${currentPage.value}&limit=24`;
  let query = "";
  if (searchQuery.value.name) {
    query += `&q=${searchQuery.value.name}`;
  }
  if (searchQuery.value.genre) {
    query += `&genres=${searchQuery.value.genre}`;
  }
  if (searchQuery.value.year) {
    query += `&start_date=${searchQuery.value.year}-01-01`;
  }
  if (searchQuery.value.type) {
    query += `&type=${searchQuery.value.type}`;
  }
  url += query;
  const { data } = await useFetch(url);
  lastVisiblePage.value = data.value.pagination.last_visible_page;
  data.value.data.forEach((obj) => {
    searchResult.value.push(obj);
  });
};

//reset search query
const reset = () => {
  searchResult.value = [];
  currentPage.value = 0;
  search();
};

// get seasons now
const seasonNow = ref([]);
const getSeasonNow = async () => {
  if (currentPage.value < lastVisiblePage.value) {
    currentPage.value++;
  } else {
    return;
  }
  await nextTick();
  const { data, pending, error, refresh } = await useFetch(
    `https://api.jikan.moe/v4/seasons/now?limit=24&page=${currentPage.value}`
  );
  lastVisiblePage.value = data.value.pagination.last_visible_page;
  data.value.data.forEach((obj) => {
    seasonNow.value.push(obj);
  });
};

// check if the uuser reaches bottom of page
const handleScroll = () => {
  const isBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight;

  if (
    isBottom &&
    (searchQuery.value.genre ||
      searchQuery.value.year ||
      searchQuery.value.name ||
      searchQuery.value.type)
  ) {
    search();
  } else if (isBottom) {
    getSeasonNow();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  getSeasonNow();
});
</script>

<style lang="scss" scoped></style>
