<template>
  <div class="grid grid-cols-3">
    <div v-for="index in 12" :key="index" class="aspect-w-1 aspect-h-1">
      <PuSkeleton height="100%" />
    </div>
  </div>
</template>
