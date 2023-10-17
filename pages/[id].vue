<template>
  <div>
    <p class="text-xl">{{ anime.title }}</p>
    <p class="text-md pb-2">{{ anime.title_japanese }}</p>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
      <img
        class="h-auto w-full pb-2 col-span-1"
        :src="anime.images.webp.large_image_url"
        :alt="anime.title" />
      <div class="col-span-1 sm:col-span-2 lg:col-span-1">
        <div class="pb-1">
          <p class="block text-sm">Type: {{ anime.type }}</p>
          <p class="block text-sm">Source: {{ anime.source }}</p>
          <p class="block text-sm">Episodes: {{ anime.episodes }}</p>
          <p class="block text-sm">Duration: {{ anime.duration }}</p>
          <p class="block text-sm">Year: {{ anime.year }}</p>
          <p class="block text-sm">Season: {{ anime.season }}</p>
          <p class="block text-sm">Status: {{ anime.status }}</p>
          <p class="block text-sm">Rating: {{ anime.rating }}</p>
          <p class="block text-sm">Score: {{ anime.score }}</p>
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="item in anime.genres"
            :key="item.mal_id"
            class="inline bg-teal-400 rounded p-1 text-xs mr-1 mb-1">
            {{ item.name }}
          </div>
          <div
            v-for="item in anime.themes"
            :key="item.mal_id"
            class="inline bg-violet-500 rounded p-1 text-xs mr-1 mb-1 text-white">
            {{ item.name }}
          </div>
        </div>
      </div>
      <iframe class="col-span-3 w-full lg:w-[80%] aspect-[16/9] mx-auto order-2 lg:order-1" :src="anime.trailer.embed_url" frameborder="0"></iframe>
      <p class="col-span-3 lg:col-span-full order-1 lg:order-2">
        {{ anime.synopsis }}
      </p>
    </div>
    <!-- <div>
      <p>Relations</p>
      <p>{{ anime.relations }}</p>
    </div> -->
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://api.jikan.moe/v4/anime/" + id + "/full";

//get anime detail
const { data: anime } = await useFetch(uri, {
  transform: (_anime) => _anime.data,
});
</script>

<style lang="scss" scoped></style>
