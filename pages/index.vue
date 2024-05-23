<template>
  <Hero />
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

const currentTime = useState<Date>();
const time = useState();

await callOnce(async () => {
  const res: any = await $fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Amsterdam"
  );

  if (res.error) {
    console.error(res.error);
    return;
  }
  currentTime.value = new Date(res.utc_datetime);
});

onMounted(async () => {
  setInterval(() => {
    currentTime.value = new Date(currentTime.value.getTime() + 1000);
  }, 1000);
});

const formattedTime = computed(() => {
  return currentTime.value.toLocaleTimeString();
});
</script>
