<template>
  <h1 class="text-6xl mb-10">
    An archive of recent and past
    <span class="bg-blue-700 text-white px-2 py-0 leading-tight">work</span> for
    clients and brands.
  </h1>
  <div class="grid grid-cols-3 grid-row-2 gap-10 mb-10">
    <ContentList path="/work" v-slot="{ list }">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :to="article._path"
        class="flex justify-start items-center w-full"
      >
        <NuxtImg
          :src="article.image"
          :alt="article.title"
          width="100%"
          height="500px"
          :class="imageClasses"
          placeholder
          loading="lazy"
        />
      </NuxtLink>
    </ContentList>
    <!-- <NuxtImg
      src="/img/planetpod.png"
      alt="Planetpod pre-order website"
      width="100%"
      height="500px"
      :class="imageClasses"
      placeholder
      loading="lazy"
    />
    <NuxtImg
      src="/img/baralaska.png"
      alt="Bar Alaska website"
      width="100%"
      height="500px"
      :class="imageClasses"
      placeholder
      loading="lazy"
    />
    <NuxtImg
      src="/img/eurobrouwers.png"
      alt="EuroBrouwers desktop"
      width="100%"
      height="500px"
      :class="imageClasses"
      placeholder
      loading="lazy"
    />
    <NuxtImg
      src="/img/cooperatiemuseum.png"
      alt="Nationaal Cooperatie Museum website"
      width="100%"
      height="500px"
      :class="imageClasses"
      placeholder
    />
    <NuxtImg
      src="/img/greenlabellogistics.png"
      alt="Green Label Logistics website"
      width="100%"
      height="500px"
      :class="imageClasses"
      placeholder
      loading="lazy"
    />
    <NuxtImg
      src="/img/wonderproductions.png"
      alt="Wonder Productions website"
      width="100%"
      height="500px"
      :class="imageClasses"
      placeholder
      loading="lazy"
    />
    <NuxtImg
      src="/img/urbankr8.png"
      alt="Urban Kr8 website"
      width="100%"
      height="500px"
      :class="imageClasses"
      placeholder
      loading="lazy"
    /> -->
  </div>
</template>

<script setup lang="ts">
const imageClasses = "w-full h-[500px] object-cover rounded-xl";
</script>
