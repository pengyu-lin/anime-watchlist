<template>
  <div class="bg-sky-100">
    <Header />
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
