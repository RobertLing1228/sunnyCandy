<template>
  <!-- <GsapDemo></GsapDemo> -->
  <!-- <GsapDemo2></GsapDemo2> -->
  <main>
    <section class="relative pb-32 2xl:pb-[26rem]">
      <Hero2 class="my-auto"></Hero2>
      <div
        class="absolute bottom-4 left-1/3 2xl:left-1/2 text-sm font-mono text-center animate-bounce"
      >
        <NuxtLink to="#Blogs">
          <span>Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        </NuxtLink>
      </div>
    </section>
    <section
      id="Blogs"
      class="bg-gradient-to-t from-amber-500/20 to-pink-500/20 shadow-xl"
    >
      <Blogs></Blogs>
    </section>
    <section id="WhoAreWe" class="">
      <WhoAreWe2></WhoAreWe2>
    </section>
    <section
      id="WhatWeOffer"
      class="bg-gradient-to-b from-amber-500/20 to-pink-500/20"
    >
      <WhatWeOffer></WhatWeOffer>
    </section>
    <section id="Partners" class="">
      <Partners></Partners>
    </section>
    <section id="contactUs" class="">
      <hr class="2xl:mt-28" />
      <ContactUs></ContactUs>
    </section>
    <!-- Other floating button -->
    <BackTop></BackTop>
  </main>
</template>

<script setup lang="js"></script>
