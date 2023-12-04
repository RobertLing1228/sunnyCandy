<template>
  <div class="fixed bottom-32 right-0 mb-4 mr-4 z-10">
    <div class="flex flex-col space-y-4">
      <button
        class="bg-blue-500/50 hover:bg-blue-700   py-2 px-4 w-12 h-12 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 justify-center items-center flex gap-4"
        @click="scrollTo('#top')"
      >
        <!-- heroicon for scroll to top -->
        <span class="h-6 w-6 text-white -translate-x-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
//Scroll to top
function scrollTo(target: string) {
  const el = document.querySelector(target);
  el?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped></style>
