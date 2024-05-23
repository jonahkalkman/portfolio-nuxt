<template>
  <div
    class="card rounded-[2rem] border-[#E9E9E9] border-solid border-2 p-5 bg-white shadow-sm"
    :class="`
    
    ${backgroundImage ? `bg-${backgroundImage}` : ''}
    `"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  backgroundImage: String,
});
</script>
