<template>
  <div
    class="relative max-w-7xl px-4 sm:px-6 2xl:px-8 2xl:pt-8 dark:bg-gray-800 mx-auto mb-40"
  >
    <div class="dark:bg-gray-800 relative lg:flex">
      <div class="flex-col">
        <h2 class="text-2xl font-bold text-black dark:text-white">
          <span class="block"> Who are we </span>
          <NuxtImg
            src="/sunnyCandy/newLogo-v.svg"
            width="100%"
            class="py-4 w-3/4"
          />
          <span class="block text-lg">
            is your gateway to snack paradise!
          </span>
        </h2>
        <p class="text-md mt-4 text-gray-400 w-fit lg:w-[30rem] mx-2">
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
        class="flex-col p-2 2xl:p-8 2xl:w-4/5 text-gray-800 hidden 2xl:block"
      >
        <div class="w-full h-full">
          <div class="relative -z-0">
            <button
              class="absolute 2xl:top-[8.9rem] 2xl:right-[18.2rem] block hover:form-color-primary transition duration-500 ease-in-out focus:form-color-primary default:form-color-primary z-10"
              @click="showLocationDetails(1)"
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
              class="absolute 2xl:top-[6.6rem] 2xl:right-[14.5rem] block hover:form-color-primary transition duration-500 ease-in-out focus:form-color-primary"
              @click="showLocationDetails(2)"
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
              class="absolute top-[4.8rem] right-[11.6rem] block hover:form-color-primary transition duration-500 ease-in-out focus:form-color-primary"
              @click="showLocationDetails(3)"
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
          </div>
          <ShowlocationDetails :id="shopId" :show="show" :shopName="shopName" :shopImageUrl="shopImageUrl" :location="location" :locationDetails="locationDetails" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let shopId = ref(0);
let show = ref("hidden");
let shopName = ref();
let shopImageUrl = ref();
let location = ref();
let locationDetails = ref();

function showLocationDetails(id) {
  shopId.value = shopDetails[id - 1].id;
  show.value = "flex";
  shopName.value = shopDetails[id - 1].shopName;
  shopImageUrl.value = shopDetails[id - 1].shopImageUrl;
  location.value = shopDetails[id - 1].location;
  locationDetails.value = shopDetails[id - 1].locationDetails;
}

const shopDetails = [
  {
    id: 1,
    shopName: "Sunny Delights Kuching",
    shopImageUrl: "/sunnyCandy/whoAreWe/whoAreWe-1.jpg",
    location: "123 Delicious Street, Kuching",
    locationDetails:
      "Dive into a world of snack excellence at Sunny Candy Delights Kuching. Located in the heart of the city, we bring you a curated selection of premium snacks, each bite a journey into flavor. Visit us and treat your taste buds to a delightful experience.",
  },
  {
    id: 2,
    shopName: "Sibu Snack Haven, Sunny",
    shopImageUrl: "/sunnyCandy/whoAreWe/whoAreWe-2.jpg",
    location: "456 Tasty Avenue, Sibu",
    locationDetails:
      "Welcome to Sibu Snack Haven, your destination for irresistible snacks. Sunny Candy presents a treasure trove of flavors, carefully selected for your enjoyment. Come explore our diverse range of treats at our Sibu branch and embark on a snacking adventure like never before.",
  },
  {
    id: 3,
    shopName: "Sunny's Miri Munch Spot",
    shopImageUrl: "/sunnyCandy/whoAreWe/whoAreWe-3.jpg",
    location: "789 Yummy Boulevard, Miri",
    locationDetails:
      "Discover snack paradise at Sunny Candy's Miri Munch Spot. Nestled in Miri, our branch offers a delightful array of premium snacks. Immerse yourself in the world of taste as you explore our carefully curated selection. Miri Munch Spot is where snacking dreams come true.",
  },
];
</script>

<style lang="scss" scoped></style>
