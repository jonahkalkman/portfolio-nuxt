<template>
  <div class="flex flex-col md:flex-row md:items-center justify-between mt-20 md:mt-40">
    <div class="mb-5">
      <h2 class="text-3xl md:text-5xl mb-2">Work</h2>
      <p class="md:mb-4 text-xl md:text-xl">
        Some of my recent projects for clients an brands as a freelance frontend
        developer.
      </p>
    </div>
    <Button
      title="View all work"
      link="/work"
      classes="bg-black text-white mb-5 md:mb-0 md:ml-5"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-5 md:gap-10 mb-20 md:mb-40">
    <a
      class="group hover:cursor-pointer w-full"
      href="https://shop.planetpod.energy/"
      target="_blank"
    >
      <NuxtImg
        width="100%"
        height="800px"
        src="/img/planetpod.png"
        alt="Planetpod desktop"
        class="object-cover group-hover:hidden transition-all duration-300 ease-in-out rounded-xl w-full"
      />
      <NuxtImg
        class="hidden object-cover group-hover:block rounded-xl w-full"
        width="100%"
        height="800px"
        src="/img/planetpod_mobile.png"
        alt="Planetpod mobile"
      />
    </a>
    <a
      class="group hover:cursor-pointer w-full"
      href="https://baralaska.nl/"
      target="_blank"
    >
      <NuxtImg
        width="100%"
        height="800px"
        src="/img/baralaska.png"
        alt="Bar Alaska desktop"
        class="object-cover group-hover:hidden transition-all duration-300 ease-in-out rounded-xl w-full"
      />
      <NuxtImg
        class="hidden object-cover group-hover:block rounded-xl w-full"
        width="100%"
        height="800px"
        src="/img/baralaska_mobile.png"
        alt="Bar Alaska mobile"
      />
    </a>
  </div>
</template>
