<template>
  <div
    class="flex h-[18rem] w-[26rem] mt-4 mx-auto p-2 rounded-xl shadow-xl ring-orange-300 ring ring-offset-2 ring-offset-white transition duration-300 ease-in-out"
  >
    <div class="w-[218px] rounded-lg overflow-hidden mx-auto">
      <NuxtImg
        placeholder="https://fakeimg.pl/600x400"
        :src="shopImageUrl"
        width="1200px"
        height="1700px"
        class="hover:scale-105 transition duration-500 ease-in-out bg-auto bg-no-repeat bg-center h-full w-full"
        alt="Kuching Sunny Candy Shop"
      />
    </div>
    <div class="ml-2 justify-start w-[15rem]">
      <span class="text-sm"
        ><b>{{ shopName }}</b
        ><br /><i> {{ location }}</i> <br
      /></span>
      <hr />
      <span class="text-0.5sm">{{ locationDetails }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: { String, default: "hidden" },
  id: { Number, default: 0 },
  shopName: { String, default: "" },
  shopImageUrl: { String, default: "/sunnyCandy/whoAreWe/default.png" },
  location: { String, default: "" },
  locationDetails: { String, default: "" },
});
console.log(props.shopImageUrl);
</script>

<style lang="scss" scoped></style>
