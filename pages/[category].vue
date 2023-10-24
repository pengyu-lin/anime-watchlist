<template>
  <div>
    <p class="category-title">{{ title }}</p>
    <div v class="flex flex-wrap mb-5">
      <div
        v-for="item in list"
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
    <skeleton v-if="pending"/>
  </div>
</template>

<script setup>
const { category } = useRoute().params;

// sets the title for the page
const title = computed(() => {
  if (category === "now") {
    return "popular this season";
  } else if (category === "upcoming") {
    return "upcoming";
  } else if (category === "popular") {
    return "all time popular";
  }
});

// // get seasons now
const list = ref([]);
const currentPage = ref(0);
const lastVisiblePage = ref(1000);
const pending = ref(false);
const getList = async () => {
  if(pending.value){
    return
  }
  pending.value = true;
  if (currentPage.value < lastVisiblePage.value) {
    currentPage.value++;
  } else {
    pending.value = false;
    return;
  }
  await nextTick();
  let data;
  switch (category) {
    case "now":
      data = await useFetch(
        `https://api.jikan.moe/v4/seasons/now?page=${currentPage.value}&limit=24`
      );
      break;
    case "upcoming":
      data = await useFetch(
        `https://api.jikan.moe/v4/seasons/upcoming?page=${currentPage.value}&limit=24`
      );
      break;
    case "popular":
      data = await useFetch(
        `https://api.jikan.moe/v4/top/anime?page=${currentPage.value}&limit=24`
      );
      break;
  }
  lastVisiblePage.value = data.data.value.pagination.last_visible_page;
  data.data.value.data.forEach((obj) => {
    list.value.push(obj);
  });
  pending.value = false;
};

// check if the user reaches bottom of page
const handleScroll = () => {
  const isBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight;

  if (isBottom) {
    getList();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  getList();
});
</script>
