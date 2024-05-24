<template>
  <h1 class="text-6xl mb-10 leading-tight">
    A <span class="bg-blue-700 py-1 px-2 text-white">blog</span> about frontend development, design and technology.
  </h1>
  <ContentList path="/blog" v-slot="{ list }">
    <div class="grid grid-cols-2 grid-rows-3 gap-10 mb-10 min-h-[70vh]">
      <CardBlog
        v-for="article in list"
        :key="article._path"
        :article="article"
      />
    </div>
  </ContentList>
</template>
