<template>
  <section class="md:flex md:gap-10 md:items-center">
    <NuxtImg
      class="w-full object-cover mb-5 rounded-xl aspect-square md:w-1/2 md:mx-auto"
      :src="image"
      alt="Hero image"
      placeholder
      loading="lazy"
    />
    <div>
      <h1 class="text-4xl md:text-5xl mb-5"><slot /></h1>
      <p class="text-xl mb-10">
        <slot name="description" />
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { image } = defineProps<{ image: string }>();
</script>
