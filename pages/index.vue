<template>
  <Hero />
  <WorkOverview />
  <BannerContact />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
useHead({
  title: "Jonah Kalkman - Frontend Developer",
  meta: [
    {
      name: "description",
      content:
        "My name is Jonah Kalkman and I'm a frontend developer based in Rotterdam, Netherlands. Currently working a lot with React, React Native, Vue and TypeScript.",
    },
  ],
});
</script>
