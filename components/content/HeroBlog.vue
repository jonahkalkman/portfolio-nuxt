<template>
  <section>
    <NuxtImg
      :src="image"
      alt="Hero image"
      placeholder
      loading="lazy"
      class="w-full object-cover mb-5 rounded-xl aspect-square"
    />
    <h1 class="text-4xl md:text-5xl md:text-center mb-5"><slot /></h1>
    <p class="text-xl mb-10">
      <slot name="description" />
    </p>
  </section>
</template>

<script setup lang="ts">
const { image } = defineProps<{ image: string }>();
</script>
