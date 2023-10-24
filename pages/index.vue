<template>
  <div>
    <div class="flex justify-between">
      <p class="category-title">Popular This Season</p>
      <nuxt-link to="/now">View All</nuxt-link>
    </div>
    <skeleton v-if="seasonPending"/>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <div
        v-for="item in seasonNow"
        :key="item.mal_id"
        class="shrink-0 w-1/3 md:w-1/4 lg:w-1/6 p-2">
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
    <div class="flex justify-between">
      <p class="category-title">Upcoming</p>
      <nuxt-link to="/upcoming">View All</nuxt-link>
    </div>
    <skeleton v-if="upcomingPending"/>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <div
        v-for="item in seasonUpcoming"
        :key="item.mal_id"
        class="shrink-0 w-1/3 md:w-1/4 lg:w-1/6 p-2">
        <div>
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
    <div class="flex justify-between">
      <p class="category-title">All Time Popular</p>
      <nuxt-link to="/popular">View All</nuxt-link>
    </div>
    <skeleton v-if="topPending"/>
    <div class="flex flex-nowrap overflow-x-auto mb-5">
      <div
        v-for="item in topAnime"
        :key="item.mal_id"
        class="shrink-0 w-1/3 md:w-1/4 lg:w-1/6 p-2">
        <div>
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
  </div>
</template>

<script setup>
definePageMeta({
    documentDriven: {
      page: false, // Keep page fetching enabled
      surround: false // Disable surround fetching
    }
  }) 
// get seasons now
const seasonNow = ref();
const seasonPending = ref(true);
const getSeasonNow = async () => {
  let top6;
  await nextTick();
  const { data, pending, error, refresh } = await useLazyFetch(
    "https://api.jikan.moe/v4/seasons/now"
  );
  if (error.value) {
    getSeasonNow();
  } else {
    top6 = data.value.data.splice(0, 6);
    seasonNow.value = top6;
    seasonPending.value = pending.value;
  }
};

//get seasons upcoming
const seasonUpcoming = ref();
const upcomingPending = ref(true);
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
    upcomingPending.value = pending.value;
  }
};

//get trending
const topAnime = ref();
const topPending = ref(true);
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
    topPending.value = pending.value;
  }
};

onMounted(() => {
  getSeasonNow();
  getSeasonUpcoming();
  getTopAnime();
});
</script>

<style lang="scss" scoped></style>
