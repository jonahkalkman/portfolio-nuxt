<template>
  <NuxtLink :to="article._path" class="flex justify-start items-center w-full">
    <div class="bg-blue-700 text-white w-full rounded-xl flex">
      <NuxtImg
        class="h-[300px] rounded-l-xl"
        :src="article.image"
        :alt="article.title"
        placeholder
      />
      <div class="py-8 px-10 flex justify-between flex-col">
        <div>
          <h2 class="text-4xl mb-4 border-b-2 border-blue-800 pb-2 line-clamp-2">{{ article.title }}</h2>
          <p class="text-xl line-clamp-2">{{ article.description }}</p>
        </div>
        <div
          to="/work"
          class="w-fit flex items-center justify-end gap-2 bg-white text-black py-2 px-5 rounded-full group shadow-lg"
        >
          <p
            class="text-base group-hover:opacity-80 transition-all duration-300 ease-in-out"
          >
            Read
          </p>
          <svg
            class="group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </div>
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
