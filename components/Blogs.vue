<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8">
    <div class="title">
      <p id="Blogs" class="mb-4 text-4xl font-bold text-gray-800">
        Blogs & news from us
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <Blog
        v-for="blog in blog_data"
        :key="blog.title"
        :article-tag="blog.articleTag"
        :title="blog.title"
        :description="blog.description"
        :image="blog.image"
        :author-image="blog.authorImage"
        :author="blog.author"
        :date="blog.date"
        :read-time="blog.readTime"
        :link="blog.link"
        class="mb-4 hover:shadow-xl transition hover:scale-105 duration-500 ease-in-out"
      ></Blog>
    </div>
    <div class="text-center pb-8">
      <NuxtLink
        to="#"
        
        class="inline-flex items-center justify-center px-5 py-3 mt-8 text-orange-500 uppercase underline hover:no-underline bg-transparent border-transparent border-2 hover:border-orange-500 rounded-lg dark:text-white hover:text-orange-500 text-md transition duration-500 ease-in-out font-bold"
      >
        Read More From Us
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const blog_data = [
  {
    articleTag: "Article",
    title: "Sunny Candy's Flavorful Journey",
    description:
      "Discover the vibrant journey behind Sunny Candy's snacks. From sourcing local ingredients to crafting unique flavors, dive into the heart of our culinary adventure.",
    image: "https://source.unsplash.com/random",
    readTime: "5",
    date: "November 16, 2023",
    authorImage: "https://source.unsplash.com/random",
    author: "Culinary Explorer",
    link: "#",
  },
  {
    articleTag: "Eco News",
    title: "Sustainable Snacking with Sunny Candy",
    description:
      "Explore how Sunny Candy is championing eco-friendly snacking. Learn about our commitment to sustainable packaging and reducing the environmental impact of delicious treats.",
    image: "https://picsum.photos/seed/picsum/200/300",
    readTime: "3",
    date: "November 18, 2023",
    authorImage: "https://source.unsplash.com/random",
    author: "Green Snacker",
    link: "#",
  },
  {
    articleTag: "Article",
    title: "Snack Trends 2023: Sunny Candy Unveils Exciting Flavors",
    description:
      "Get a sneak peek into the snack trends of 2023 with Sunny Candy. From exotic chip flavors to innovative nut blends, find out what's tantalizing taste buds this year.",
    image: "https://source.unsplash.com/random",
    readTime: "7",
    date: "November 20, 2023",
    authorImage: "https://source.unsplash.com/random",
    author: "Trend Taster",
    link: "#",
  },
];
</script>

<style lang="scss" scoped></style>
