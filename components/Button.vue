<template>
  <template v-if="link">
    <NuxtLink :to="link" :class="[linkClasses, classes]">
      <p class="text-xl transition-all duration-300 ease-in-out">
        {{ title }}
      </p>
    </NuxtLink>
  </template>
  <template v-else>
    <div :class="[linkClasses, classes]">
      <p class="text-xl transition-all duration-300 ease-in-out">
        {{ title }}
      </p>
    </div>
  </template>
</template>

<script setup lang="ts">
const { title, link } = defineProps({
  title: { type: String, required: true },
  link: { type: String, required: false },
  classes: { type: String, default: "" },
});

const linkClasses =
  "flex items-center justify-center gap-1 py-2 px-5 rounded-full group shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out";
</script>
