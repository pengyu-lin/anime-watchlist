<template>
  <div class="relative bg-sky-100">
    <Header class="absolute top-0 left-0 right-0" />
    <div
      class="bg-cover bg-center h-60 md:h-72 lg:h-80 xl:h-96 bg-[url('@/assets/hero.jpeg')]"></div>
    <div class="p-4 xl:mx-auto max-w-[1280px]">
      <div class="container mx-auto xl:px-[120px]">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
