import IconGithub from './icons/IconGithub.vue';
<template>
  <section
    class="flex flex-col md:flex-row md:gap-10 justify-between items-stretch bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl"
  >
    <div
      class="w-full md:w-1/2 0 text-white py-6 px-4 md:py-10 md:px-8 flex items-start flex-col justify-center order-1"
    >
      <h1 class="text-4xl md:text-6xl mb-4">Hi! I'm Jonah</h1>
      <p class="text-lg md:text-xl mb-2">
        A freelance frontend developer based in Rotterdam, The Netherlands.
        Helping brands and agencies with their digital products and websites with my company JK Agency.
      </p>
      <p class="text-lg md:text-xl mb-5">
        My current tech stack is React (Next.js), Tailwind, React Native (for
        apps), Vue and TypeScript.
      </p>
      <Button
        title="Contact me"
        link="mailto:jonah@jkagency.nl"
        classes="bg-white text-black"
      />
    </div>
    <div class="w-full md:w-1/2 flex justify-end md:order-2">
      <NuxtImg
        height="800px"
        class="md:h-[70vh] md:min-h-[650px] w-full object-cover rounded-xl rounded-b-none md:rounded-b-xl md:rounded-l-none"
        src="/img/portrait.jpg"
        alt="Jonah Kalkman"
        placeholder
      />
    </div>
  </section>
</template>
