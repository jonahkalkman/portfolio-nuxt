<template>
  <footer>
    <div
      class="container px-4 mx-auto py-4 flex flex-col md:flex-row justify-between items-center border-t-2"
    >
      <p class="order-2 md:order-1">© {{ currentYear }} Jonah Kalkman</p>
      <p
        v-if="formattedTime"
        class="flex items-center justify-end gap-1 md:order-2"
      >
        <icons-globe />
        Rotterdam, Netherlands - {{ formattedTime }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { DateModel } from "~/types/DateModel";

const currentYear = new Date().getFullYear();
const currentTime = useState<Date>();

await callOnce(async () => {
  try {
    const { data, pending, error, refresh } = await useFetch<DateModel>(
      "http://worldtimeapi.org/api/timezone/Europe/Amsterdam"
    );

    if (error.value || data.value === null) {
      throw new Error("Failed to fetch the current time");
    }

    currentTime.value = new Date(data.value.datetime);
  } catch (error) {
    console.error(error);
  }
});

// Update the time every second
onMounted(async () => {
  setInterval(() => {
    currentTime.value = new Date(currentTime.value.getTime() + 1000);
  }, 1000);
});

const formattedTime = computed(() => {
  if (!currentTime.value) return null;
  return currentTime.value.toLocaleTimeString();
});
</script>
