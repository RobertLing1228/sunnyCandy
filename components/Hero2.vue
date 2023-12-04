<template>
  <div
    class="relative bg-transparent md:h-[420px] lg:h-[420px] dark:bg-gray-800"
  >
    <div
      class="absolute translate-y-4 translate-x-4 2xl:translate-x-80 w-[20rem] md:translate-y-10 md:w-2/3 2xl:w-1/3 justify-start z-10 2xl:bg-transparent bg-white/50 py-4 px-2 rounded-lg"
    >
      <span class="text-0.5sm sm:text-xl 2xl:text-3xl font-semibold">
        Your one stop candy supplier from:
      </span>
      <h1
        class="flex flex-col 2xl:text-5xl font-black leading-none text-gray-800 uppercase text-4xl dark:text-white"
      >
        Start Up, Wholesale, Retail & Online Candy Store
      </h1>
      <p class="text-sm text-gray-700 sm:text-base dark:text-white mt-4">
        We are one of the coolest candy supplier in local Sarawak, Malaysia. Get
        your candy store setup in no time & make your day brighter with our
        great service.
      </p>
      <div class="flex mt-8">
        <a
          href="#"
          class="px-4 py-2 mr-4 text-white uppercase bg-orange-500 border-2 border-transparent rounded-lg text-md transition duration-500 ease-in-out font-bold hover:scale-105"
        >
          Start Candy Business Now!
        </a>
        <a
          href="#"
          class="px-4 py-2 text-orange-500 uppercase underline hover:no-underline bg-transparent border-transparent border-2 hover:border-orange-500 rounded-lg dark:text-white hover:text-orange-500 text-md transition duration-500 ease-in-out font-bold"
        >
          Learn more...
        </a>
      </div>
    </div>
    <div
      class="flex justify-center 2xl:justify-end 2xl:mx-80 mx-auto lg:scale-100 blur-sm md:blur-0 overflow-hidden"
    >
      <div
        class="absolute z-20 bottom-11 justify-center md:justify-start 2xl:w-[38rem] md:w-[30rem] h-[8rem] opacity-0 2xl:opacity-100"
      >
        <span class="text-2xl font-black text-gray-800">Our Partners</span>
        <div class="w-full h-20 space-x-12 flex" ref="partnerLogos">
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 3.png"
          /><NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 4.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 5.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 6.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 7.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 8.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 9.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 10.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 11.png"
          />
          <NuxtImg
            width="100%"
            height="100%"
            class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
            src="/partnerLogos/image 16.png"
          />
        </div>
      </div>
      <spline />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
