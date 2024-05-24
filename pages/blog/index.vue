<template>
  <ContentList path="/blog" v-slot="{ list }">
    <div class="grid grid-cols-2 grid-rows-3 gap-10 mb-10 min-h-screen">
      <CardBlog
        v-for="article in list"
        :key="article._path"
        :article="article"
      />
    </div>
  </ContentList>
</template>
