<template>
  <div>
    <div class="flex flex-wrap mb-5">
      <div
        v-for="item in 6"
        :key="item"
        class="shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 animate-pulse">
        <div class="aspect-w-9 aspect-h-13 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
