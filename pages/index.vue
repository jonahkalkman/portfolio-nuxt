<template>
  <Hero />
  <div class="flex items-center mt-20">
    <div>
      <h2 class="text-4xl mb-2">Recent work</h2>
      <p class="mb-4 w-2/3">
        Some of my recent projects for clients an brands as a freelance frontend
        developer.
      </p>
    </div>
    <NuxtLink
      to="/work"
      class="ml-auto flex items-center justify-end gap-2 bg-blue-700 text-white py-2 px-5 rounded-full group shadow-lg"
    >
      <p
        class="text-base group-hover:opacity-80 transition-all duration-300 ease-in-out"
      >
        View more work
      </p>
      <svg
        class="group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
        />
      </svg>
    </NuxtLink>
  </div>
  <div class="grid grid-cols-2 grid-rows-1 gap-10 mb-20">
    <a
      class="group hover:cursor-pointer"
      href="https://shop.planetpod.energy/"
      target="_blank"
    >
      <NuxtImg
        width="100%"
        height="500px"
        src="/img/planetpod.png"
        alt="Planetpod desktop"
        class="object-cover group-hover:hidden transition-all duration-300 ease-in-out rounded-xl"
      />
      <NuxtImg
        class="hidden object-cover group-hover:block rounded-xl"
        width="100%"
        height="500px"
        src="/img/planetpod_mobile.png"
        alt="Planetpod mobile"
      />
      <p class="mt-2 text-sm italic">
        Pre-order website for Planetpod - Next.js, Tailwind & Stripe
      </p>
    </a>
    <a
      class="group hover:cursor-pointer"
      href="https://baralaska.nl/"
      target="_blank"
    >
      <NuxtImg
        width="100%"
        height="500px"
        src="/img/baralaska.png"
        alt="Bar Alaska desktop"
        class="object-cover group-hover:hidden transition-all duration-300 ease-in-out rounded-xl"
      />
      <NuxtImg
        class="hidden object-cover group-hover:block rounded-xl"
        width="100%"
        height="500px"
        src="/img/baralaska_mobile.png"
        alt="Bar Alaska mobile"
      />
      <p class="mt-2 text-sm italic">Website for Bar Alaska - Tailwind</p>
    </a>
  </div>
  <div class="grid grid-cols-2 grid-rows-1 gap-10 mb-20">
    <div class="bg-blue-700 text-white py-10 px-8 rounded-xl w-full mr-5">
      <h2 class="text-4xl mb-2">Let's work together</h2>
      <p class="mb-4">
        Looking for a experienced frontend developer to help you with your next
        project? Let's get in touch!
      </p>
      <a
        href="mailto:jonah@jkagency.nl"
        class="bg-black text-white py-2 px-5 rounded-full flex items-center gap-2 w-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
          />
        </svg>
        E-mail
      </a>
    </div>
    <div class="text-black py-10 rounded-xl w-full mr-5">
      <h2 class="text-4xl mb-4">Find me on...</h2>
      <div class="flex gap-4">
        <a
          href="mailto:jonah@jkagency.nl"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </a>
        <a
          href="mailto:jonah@jkagency.nl"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
        </a>
        <a
          href="mailto:jonah@jkagency.nl"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 14 14"
          >
            <g fill="none">
              <g clip-path="url(#primeTwitter0)">
                <path
                  fill="currentColor"
                  d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                />
              </g>
              <defs>
                <clipPath id="primeTwitter0">
                  <path fill="#fff" d="M0 0h14v14H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
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
