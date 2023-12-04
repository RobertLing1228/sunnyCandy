<template>
  <div class="service-card relative z-0">
    <h3 class=" text-lg font-semibold">{{ service.title }}</h3>
    <hr class="border-t-2 border-gray-300 mt-2 mb-4 rounded-full" />
    <NuxtImg
      placeholder="https://fakeimg.pl/600x400"
      :alt="service.title"
      :src="service.back"
      class="object-cover w-full min-h-fit max-h-64 rounded-xl mb-2"
    />
    <div class="text-center absolute top-24 px-6 z-10">
      <span class="text-md font-bold text-white">{{
        service.description
      }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
