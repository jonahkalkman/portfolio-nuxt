import IconGithub from './icons/IconGithub.vue';
<template>
  <section class="flex gap-20 justify-between items-center">
    <div class="w-1/2">
      <h1 class="text-7xl mb-4">Hi! I'm Jonah</h1>
      <p class="text-lg mb-2">
        Front-end developer at B.made, a dutch digital agency based in
        Rotterdam. Making digital products for clients such as Feyenoord and
        Caiway.
      </p>
      <p class="text-lg mb-2">
        Helping brands as a freelance developer at JK Agency by combining
        technology with creativity.
      </p>
      <p class="text-lg mb-2">
        Current Stack: React, React Native, Vue and TypeScript
      </p>
      <IconsGithub />
    </div>
    <div class="w-1/2">
      <NuxtImg
        height="500px"
        class="h-[500px] w-2/3 object-cover"
        src="/img/portrait.jpg"
        alt="Jonah Kalkman"
        placeholder
      />
    </div>
  </section>
</template>
