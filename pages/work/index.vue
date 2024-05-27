<template>
  <h1 class="text-4xl md:text-6xl mb-10">
    An archive of recent and past
    <span class="bg-blue-700 text-white px-2 py-0 leading-tight">work</span> for
    clients and brands.
  </h1>
  <div
    class="grid grid-cols-1 md:grid-cols-3 md:grid-row-2 gap-5 md:gap-10 mb-10"
  >
    <ContentList path="/work" v-slot="{ list }">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :to="article._path"
        class="flex justify-start items-center w-full"
      >
        <NuxtImg
          :class="imageClasses"
          :src="article.image"
          :alt="article.title"
          width="100%"
          height="500px"
          placeholder
          loading="lazy"
        />
      </NuxtLink>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Work - Jonah Kalkman",
  meta: [
    {
      name: "description",
      content: "An archive of recent and past work for clients and brands.",
    },
  ],
});

const imageClasses =
  "w-full object-cover rounded-xl aspect-square hover:scale-105 transition-transform duration-300 ease-in-out";
</script>
