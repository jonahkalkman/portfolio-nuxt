<template>
  <h1 class="text-4xl md:text-6xl mb-10 leading-tight">
    A <span class="bg-blue-700 py-1 px-2 text-white">blog</span> about frontend, design and technology.
  </h1>
  <ContentList path="/blog" v-slot="{ list }">
    <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-5 md:gap-10 mb-10 md:min-h-[70vh]">
      <CardBlog
        v-for="article in list"
        :key="article._path"
        :article="article"
      />
    </div>
  </ContentList>
</template>
