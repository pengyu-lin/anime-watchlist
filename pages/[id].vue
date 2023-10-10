<template>
  <div>
    <div class="grid gap-4 grid-cols-4 xl:grid-cols-5">
      <div class="col-span-1">
        <div></div>
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
      <div class="col-span-3 xl:col-span-4">
        <p class="text-xl pb-4 xl:pb-8">{{ anime.data.title }}</p>
        <p>
          {{ anime.data.synopsis }}
        </p>
        <div>
          <div
            v-for="item in anime.data.genres"
            :key="item.mal_id"
            class="inline bg-teal-400 rounded p-1 text-xs mr-2">
            {{ item.name }}
          </div>
          <div
            v-for="item in anime.data.themes"
            :key="item.mal_id"
            class="inline bg-violet-500 rounded p-1 text-xs mr-2 text-white">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="grid gap-2">
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
      </div>
    </div>
    <!-- <div>
      <p>Relations</p>
      <p>{{ anime.data.relations }}</p>
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
