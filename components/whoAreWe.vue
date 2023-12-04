<template>
  <div class="max-w-7xl px-4 sm:px-6 2xl:px-8 2xl:pt-8">
    <div class="bg-transparent dark:bg-gray-800 relative lg:flex">
      <div class="w-full min-w-min py-12 px-4 sm:px-6 lg:px-8 z-20">
        <h2 class="text-2xl font-bold text-black dark:text-white">
          <span class="block"> Who are we </span>
          <NuxtImg
            src="/sunnyCandy/newLogo-v.svg"
            width="100%"
            class="py-4 w-3/4"
          />
          <span class="block"> is your gateway to snack paradise! </span>
        </h2>
        <p class="text-md mt-4 text-gray-400 w-[30rem]">
          As a trading company based in Malaysia, Sunny Candy is more than just
          snacks – we're flavor architects on a mission. We specialize in
          sourcing the finest local ingredients, curating a collection that
          spans from crispy chips to wholesome nuts and sweet dried fruits. Join
          our community of snack aficionados and let Sunny Candy elevate your
          snacking experience. Indulge in extraordinary flavors, savor the joy –
          because at Sunny Candy, every snack is a celebration!
        </p>
        <p class="text-md font-bold mt-4 text-gray-600">
          #Sunny CandyFlavors #SnackWithJoy #TasteTheMagic
        </p>
      </div>
      <div
        class="flex flex-col p-2 2xl:p-8 2xl:w-4/5 w-full rounded-lg text-gray-800"
      >
        <div class="relative w-full h-full 2xl:pt-40">
          <button
            class="absolute top-[15.5rem] right-[13.2rem] block hover:form-color-primary transition duration-500 ease-in-out focus:form-color-primary default:form-color-primary"
          >
            <span class="text-0.5xs">Kuching</span>
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </button>
          <button
            class="absolute top-[14.2rem] right-[10rem] block hover:form-color-primary transition duration-500 ease-in-out focus:form-color-primary"
          >
            <span class="text-0.5xs">Sibu</span>
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </button>
          <button
            class="absolute top-[12.8rem] right-[8.6rem] block hover:form-color-primary transition duration-500 ease-in-out focus:form-color-primary"
          >
            <span class="text-0.5xs">Miri</span>
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </button>
          <NuxtImg
            placeholder="https://fakeimg.pl/600x400"
            src="/sunnyCandy/whoAreWe/malaysiaMapVector.svg"
            width="100%"
            height="100%"
            class=""
            alt="Our Sunny Candy Shops"
          />
          <div
            class="flex bg-white h-[16rem] w-[26rem] mt-4 mx-auto p-2 rounded-xl shadow-xl ring-orange-300 ring ring-offset-2 ring-offset-white"
          >
            <div class="w-[218px] rounded-lg overflow-hidden mx-auto">
              <NuxtImg
                placeholder="https://fakeimg.pl/600x400"
                src="/sunnyCandy/whoAreWe/whoAreWe-1.jpg"
                width="1200px"
                height="1700px"
                class="hover:scale-105 transition duration-500 ease-in-out bg-auto bg-no-repeat bg-center h-full w-full"
                alt="Kuching Sunny Candy Shop"
              />
            </div>
            <div class="ml-2 justify-start w-[15rem]">
              <span class="text-sm"
                ><b> Sunny Delights Kuching</b><br /><i>
                  123 Delicious Street, Kuching</i
                >
                <br
              /></span>
              <hr />
              <span class="text-0.5sm"
                >Dive into a world of snack excellence at Henwan Delights
                Kuching. Located in the heart of the city, we bring you a
                curated selection of premium snacks, each bite a journey into
                flavor. Visit us and treat your taste buds to a delightful
                experience.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
