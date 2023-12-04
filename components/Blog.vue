<template>
  <div class="relative m-2 p-2 rounded-2xl shadow-md border bg-white">
    <NuxtLink :to="link" class="">
      <NuxtImg
        placeholder="https://fakeimg.pl/600x400"
        alt="blog photo"
        :src="image"
        class="object-cover object-center w-full h-40 rounded-t-xl"
      />
    </NuxtLink>
    <div class="min-h-[20rem] p-4 bg-gray-50 dark:bg-gray-800">
      <p class="font-medium text-indigo-500 text-sm">{{ articleTag }}</p>
      <p class="mb-2 text-lg font-bold text-gray-800 dark:text-white">
        {{ title }}
      </p>
      <p class="font-light text-gray-400 dark:text-gray-300 text-sm">
        {{ description }}
      </p>
      <!-- <div class="flex absolute bottom-4 border-t border-t-gray-300 wf">
        
        asd
      </div> -->

      <div class="absolute bottom-4 px-4 pt-4 w-full left-0">
        <hr class="border-gray-300 mb-4" />
        <div class="flex space-x-4">
          <a href="#" class="">
            <NuxtImg
              alt="profile"
              placeholder="https://fakeimg.pl/120x120"
              :src="authorImage"
              class="object-cover w-10 h-10 rounded-full hover:border-blue-400 border-2 border-transparent transition-all duration-500 ease-in-out"
            />
          </a>
          <div class="flex flex-col text-sm">
            <a href="#">
              <p class="text-gray-800 dark:text-white hover:text-blue-400">
                {{ author }}
              </p>
            </a>
            <p class="text-gray-400 dark:text-gray-300">
              <span> {{ date }} - {{ readTime }} min read</span>
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="flex absolute bottom-4 pt-4 mx-auto space-x-4">
        <a href="#" class="">
          <NuxtImg
            alt="profile"
            placeholder="https://fakeimg.pl/120x120"
            :src="authorImage"
            class="object-cover w-10 h-10 rounded-full hover:border-blue-400 border-2 border-transparent transition-all duration-500 ease-in-out"
          />
        </a>
        <div class="flex-col text-sm">
          <a href="#">
            <p class="text-gray-800 dark:text-white hover:text-blue-400">
              {{ author }}
            </p>
          </a>
          <p class="text-gray-400 dark:text-gray-300">
            <span> {{ date }} - {{ readTime }} min read</span>
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const Props = defineProps({
  articleTag: String,
  title: String,
  description: String,
  image: String,
  date: String,
  author: String,
  authorImage: String,
  link: String,
  readTime: String,
});
</script>

<style lang="scss" scoped></style>
