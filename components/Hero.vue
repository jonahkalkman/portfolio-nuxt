import IconGithub from './icons/IconGithub.vue';
<template>
  <section
    class="flex gap-10 justify-between items-stretch bg-blue-700 rounded-xl"
  >
    <div
      class="w-1/2 0 text-white py-10 px-8 flex items-start flex-col justify-center"
    >
      <h1 class="text-6xl mb-4">Hi! I'm Jonah</h1>
      <p class="text-xl mb-2">
        Front-end developer at B.made, a dutch digital agency based in
        Rotterdam. Making digital products for clients such as Feyenoord and
        Caiway.
      </p>
      <p class="text-xl mb-2">
        Helping brands as a freelance developer at JK Agency by combining
        technology with creativity.
      </p>
      <p class="text-xl mb-5">
        Current Stack: React, React Native, Vue and TypeScript
      </p>
      <Button title="Contact me" link="mailto:jonah@jkagency.nl" classes="bg-white text-black" />
    </div>
    <div class="w-1/2 flex justify-end">
      <NuxtImg
        height="800px"
        class="h-[70vh] min-h-[650px] w-full object-cover rounded-xl rounded-l-none"
        src="/img/portrait.jpg"
        alt="Jonah Kalkman"
        placeholder
      />
    </div>
  </section>
</template>
