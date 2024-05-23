<template>
  <header
    class="container mt-5 mx-auto py-4 flex justify-between items-center mb-10 border-b-2"
  >
    <NuxtLink to="/">
      <h1 :class="titleClasses">Jonah Kalkman</h1>
    </NuxtLink>
    <Navigation />
  </header>
  <main class="container mx-auto">
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
const titleClasses =
  "text-lg after:content-[' '] after:w-0 after:bg-black after:h-[2px] after:block hover:after:w-full transition-all after:transition-all after:duration-300 after:ease-in-out hover:opacity-50 duration-300 ease-in-out";
</script>
