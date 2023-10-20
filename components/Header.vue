<template>
  <div>
    <header
      class="shadow-sm hover:bg-gray-800 bg-gray-800/75 transition duration-500 ease-in-out">
      <nav class="p-4 flex justify-between">
        <nuxt-link class="font-bold text-white" to="/">Anime Watchlist</nuxt-link>
        <ul class="flex gap-4">
          <li>
            <nuxt-link class="text-white" to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" to="/search">Search</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link class="text-white" to="/login">Login</nuxt-link>
          </li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
	color: rgb(96 165 250)
}
</style>
