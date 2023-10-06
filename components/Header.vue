<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link class="font-bold" to="/">Anime Watchlist</nuxt-link>
        <ul class="flex gap-4">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/search">Search</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login">Login</nuxt-link>
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
