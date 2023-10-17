<template>
  <div>
    <header
      class="bg-gray-800">
      <nav class="p-4 flex justify-between">
        <nuxt-link class="font-bold" to="/">Anime Watchlist</nuxt-link>
        <ul class="flex gap-4">
          <li>
            <nuxt-link class="text-white" to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" to="/search">Search</nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" to="/login">Login</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: green;
}
</style>
