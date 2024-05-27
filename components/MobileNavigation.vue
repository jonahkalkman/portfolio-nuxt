<template>
  <div class="block md:hidden">
    <p class="uppercase border-2 rounded-full py-1 px-3" @click="toggleMenu">Menu</p>
    <nav :class="menuClasses">
      <ul class="flex flex-col gap-10 px-4">
         <li :class="route.path == '/' ? activeLinkClasses : linkClasses">
          <nuxt-link to="/" @click="toggleMenu">Home</nuxt-link>
        </li>
        <li :class="route.path == '/work' ? activeLinkClasses : linkClasses">
          <nuxt-link to="/work" @click="toggleMenu">Work</nuxt-link>
        </li>
        <li :class="route.path == '/blog' ? activeLinkClasses : linkClasses">
          <nuxt-link to="/blog" @click="toggleMenu">Blog</nuxt-link>
        </li>
        <li :class="linkClasses">
          <a href="mailto:jonah@jkagency.nl">Contact</a>
        </li>
      </ul>
      <span class="uppercase border-2 rounded-full py-1 px-3 absolute top-4 right-4" @click="toggleMenu">
        Close
      </span>
    </nav>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const menuActive = useState<boolean>('menuActive', () => false);

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

const menuClasses = computed(() => {
  return menuActive.value ? 'block fixed h-full w-full left-0 top-0 bg-blue-700 text-white pt-20' : 'hidden';
});

const linkClasses =
  "text-5xl";

const activeLinkClasses =
  "text-5xl";
</script>
