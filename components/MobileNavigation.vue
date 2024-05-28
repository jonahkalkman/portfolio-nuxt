<template>
  <div class="block md:hidden">
    <p class="uppercase border-2 rounded-full py-1 px-3" @click="toggleMenu">
      Menu
    </p>
    <nav :class="menuClasses">
      <ul class="flex flex-col gap-10 px-4">
        <li class="text-5xl">
          <NuxtLink to="/" @click="toggleMenu">Home</NuxtLink>
        </li>
        <li class="text-5xl">
          <NuxtLink to="/work" @click="toggleMenu">Work</NuxtLink>
        </li>
        <li class="text-5xl">
          <NuxtLink to="/blog" @click="toggleMenu">Blog</NuxtLink>
        </li>
        <li class="text-5xl">
          <a href="mailto:jonah@jkagency.nl">Contact</a>
        </li>
      </ul>
      <span
        class="uppercase border-2 rounded-full py-1 px-3 absolute top-4 right-4"
        @click="toggleMenu"
      >
        Close
      </span>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menuActive = useState<boolean>("menuActive", () => false);

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

const menuClasses = computed(() => {
  return menuActive.value
    ? "block fixed h-full w-full left-0 top-0 bg-blue-700 text-white pt-20"
    : "hidden";
});
</script>
