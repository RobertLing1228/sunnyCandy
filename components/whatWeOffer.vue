<template>
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8"
    ref="whatweoffer_main"
  >
    <h2 class="text-2xl font-bold mb-4">What We Offer</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6">
      <service
        v-for="service in services"
        :key="service.id"
        :service="service"
        class="mb-4 transition duration-500 ease-in-out opacity-0 top-36"
      ></service>
    </div>
    <div class="text-center pb-8">
      <NuxtLink
        to="#"
        class="inline-flex items-center justify-center px-5 py-3 mt-8 text-white uppercase bg-orange-500 border-2 border-transparent rounded-lg text-md transition duration-500 ease-in-out font-bold hover:scale-105"
      >
        Let’s work together.
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="js">
const services = [
  {
    id: 1,
    title: "Product Sourcing & Procurement",
    description: "Sunny Candy specializes in sourcing high-quality snacks from various local and international suppliers. We carefully curate our snack collection, ensuring diverse and premium offerings to meet the unique tastes of our customers.",
    front: "/sunnyCandy/services/front-1.png",
    back: "/sunnyCandy/services/back-1.png",
  },
  {
    id: 2,
    title: "Wholesale Distribution",
    description: "Our core service involves distributing snacks on a wholesale scale to retailers, supermarkets, and other businesses across Malaysia. Sunny Candy takes pride in providing a reliable supply chain, ensuring that our partners receive their orders promptly and efficiently.",
    front: "/sunnyCandy/services/front-2.png",
    back: "/sunnyCandy/services/back-2.png",
  },
  {
    id: 3,
    title: "Customized Packaging & Branding",
    description: "We offer customized packaging solutions to meet the branding needs of our clients. Whether it's private labeling or creating unique packaging designs, Sunny Candy works closely with clients to enhance the visual appeal of their products.",
    front: "/sunnyCandy/services/front-3.png",
    back: "/sunnyCandy/services/back-3.png",
  },
  {
    id: 4,
    title: "Export and Import Services",
    description: "For international clients, Sunny Candy facilitates the export and import of snacks, ensuring a smooth cross-border trading experience.",
    front: "/sunnyCandy/services/front-4.png",
    back: "/sunnyCandy/services/back-4.png",
  },
  {
    id: 5,
    title: "Customized Product Development",
    description: "We collaborate with clients interested in unique snack offerings, providing assistance in the development of new products tailored to specific market demands.",
    front: "/sunnyCandy/services/front-5.png",
    back: "/sunnyCandy/services/back-5.png",
  },
  {
    id: 6,
    title: "Market Research & Trends Analysis",
    description: "Sunny Candy stays ahead of market trends and consumer preferences through continuous research and analysis. Clients benefit from our insights, helping them make informed decisions on product selection and marketing strategies.",
    front: "/sunnyCandy/services/front-6.png",
    back: "/sunnyCandy/services/back-6.png",
  },
];

const { $gsap, $ScrollTrigger } = useNuxtApp();
const whatweoffer_main = ref();
let ctx;    //Animation Context GSAP

onMounted(() => {
    ctx = $gsap.context((self) => {
    const cards = self.selector('.service-card');
    cards.forEach((card) => {
      $gsap.to(card, {
        opacity: 100,
        y: -144,
        scrollTrigger: {
          trigger: card,
          start: 'bottom bottom',
          end: 'top 80%',
          scrub: true,
        },
      });
    });
    // cards.forEach((card) => {
    //   $gsap.from(card, {
    //     opacity: 0,
    //     y: 50,
    //     stagger: 0.5,
    //     duration: 0.5,
    //     scrollTrigger: {
    //       trigger: card,
    //       start: 'bottom bottom',
    //         end: 'bottom center',
    //       scrub: true,
    //     },
    //   });
    // });
  }, whatweoffer_main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style scoped></style>
