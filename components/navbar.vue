<template>
  <nav class="bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <NuxtImg
                width="100%"
                height="100%"
                class="h-16 w-26 hover:scale-105 transition duration-500 ease-in-out"
                src="/sunnyCandy/newLogo-v.svg"
                alt="Logo"
              />
            </NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink
                to="#WhoAreWe"
                class="text-gray-600 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out"
                >Who Are We</NuxtLink
              >
              <NuxtLink
                to="#Blogs"
                class="text-gray-600 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out"
                >Blogs</NuxtLink
              >
              <NuxtLink
                to="#WhatWeOffer"
                class="text-gray-600 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out"
                >What We Offer</NuxtLink
              >
              <NuxtLink
                to="#Partners"
                class="text-gray-600 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out"
                >Partners</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="p-2 border-spacing-x-8 border border-gray-400 text-gray-600 rounded-lg hover:outline-none hover:text-white hover:bg-gray-600 transition duration-500 ease-in-out"
              aria-label="Inquiry Us"
            >
              <NuxtLink to="#contactUs">
                <span>Inquiry Now</span>
              </NuxtLink>
            </button>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-600 transition duration-500 ease-in-out"
            @click="toggleMobileMenu"
            aria-label="Main menu"
            :aria-expanded="isMobileMenuOpen.toString()"
          >
            <svg
              class="block h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              class="hidden h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="md:hidden transition duration-500 ease-in-out"
      :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink
          href="/"
          class="text-gray-600 hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Home</NuxtLink
        >
        <NuxtLink
          href="#WhoAreWe"
          class="text-gray-600 hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Who Are We</NuxtLink
        >
        <NuxtLink
          href="#Blogs"
          class="text-gray-600 hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Blogs</NuxtLink
        >
        <NuxtLink
          href="#WhatWeOffer"
          class="text-gray-600 hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >What We Offer</NuxtLink
        >
        <NuxtLink
          href="#Partners"
          class="text-gray-600 hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Partners</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="js">
let isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
