<template>
  <nav class="">
    <ul class="flex space-x-4 gap-5">
      <li :class="linkClasses">
        <nuxt-link to="/work">Work</nuxt-link>
      </li>
      <li :class="linkClasses">
        <a href="mailto:jonah@jkagency.nl">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const linkClasses =
  "text-lg after:content-[' '] after:w-0 after:bg-black after:h-[2px] after:block hover:after:w-full transition-all after:transition-all after:duration-300 after:ease-in-out hover:opacity-50 duration-300 ease-in-out";
</script>
