<template>
  <NuxtLink :to="article._path" class="flex justify-start items-center w-full">
    <div class="bg-blue-700 text-white w-full rounded-xl flex flex-row">
      <NuxtImg
        class="h-[300px] w-1/2 rounded-l-xl object-cover"
        :src="article.image"
        :alt="article.title"
        placeholder
      />
      <div class="py-8 px-10 flex justify-between flex-col w-2/3">
        <div>
          <h2 class="text-4xl mb-4 line-clamp-2">{{ article.title }}</h2>
          <p class="text-xl line-clamp-2">{{ article.description }}</p>
        </div>
        <Button title="Read" classes="bg-white text-black mt-5 w-fit" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { article } = defineProps<{
  article: {
    _path: string;
    title: string;
    description: string;
    image: string;
  };
}>();
</script>
