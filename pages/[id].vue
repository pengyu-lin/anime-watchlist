<template>
  <div>
    <div
      class="grid gap-4 grid-cols-5 grid-rows-5">
      <div class="col-span-2 lg:col-span-1 row-span-5">
        <img
          class="w-full"
          :src="anime.data.images.webp.large_image_url"
          :alt="anime.data.title" />
        <button
          type="button"
          class="border-2 text-white rounded bg-cyan-500 border-cyan-500 w-full py-1.5 mt-4 text-xs font-medium uppercase hover:bg-white hover:text-cyan-500">
          add to list
        </button>
      </div>
      <div class="md:col-span-3 lg:col-span-4 row-span-1">
        <div>
          <p>{{ anime.data.title }}</p>
        </div>
      </div>
      <div class="md:col-span-3 lg:col-span-4 row-span-4">
        <p>{{ anime.data.synopsis }}</p>
      </div>
    </div>
    <!-- <div
      class="grid gap-2 grid-cols-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
      <div class="">
        <p class="block">Type</p>
        <p class="block text-sm">{{ anime.data.type }}</p>
      </div>
      <div class="">
        <p class="block">Source</p>
        <p class="block text-sm">{{ anime.data.source }}</p>
      </div>
      <div class="">
        <p class="block">Episodes</p>
        <p class="block text-sm">{{ anime.data.episodes }}</p>
      </div>
      <div class="">
        <p class="block">Status</p>
        <p class="block text-sm">{{ anime.data.status }}</p>
      </div>
      <div class="">
        <p class="block">Rating</p>
        <p class="block text-sm">{{ anime.data.rating }}</p>
      </div>
      <div class="">
        <p class="block">Score</p>
        <p class="block text-sm">{{ anime.data.score }}</p>
      </div>
      <div class="">
        <p class="block">Season</p>
        <p class="block text-sm">{{ anime.data.season }}</p>
      </div>
      <div class="">
        <p class="block">Year</p>
        <p class="block text-sm">{{ anime.data.year }}</p>
      </div>
    </div> -->
    <!-- <div>
      <p>Relations</p>
      <p>{{ anime.data.relations }}</p>
    </div>
    <div>
      <p>Theme</p>
      <p>{{ anime.data.theme }}</p>
    </div> -->
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://api.jikan.moe/v4/anime/" + id + "/full";

//get anime detail
const { data: anime } = await useFetch(uri);
</script>

<style lang="scss" scoped></style>
