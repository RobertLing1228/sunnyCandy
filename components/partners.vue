<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8"
    ref="partner_main"
  >
    <h2 class="text-2xl font-bold mb-4">Who did we partner with?</h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 mt-24 gap-y-20"
    >
      <Partner v-for="partner in partners" :key="partner.id" :partner="partner">
      </Partner>
    </div>
    <h2 class="text-2xl font-bold my-4">Product Partners:</h2>
    <div class="mb-8">
      <div
        class="w-full h-20 space-x-12 flex overflow-hidden"
        ref="productPartnerLogos"
      >
        <NuxtImg
          width="100%"
          height="100%"
          class="flex flex-col scale-75 hover:scale-100 transition duration-500 ease-in-out"
          src="/partnerLogos/productPartners/mamee.png"
        />
        <NuxtImg
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
  </div>
</template>

<script setup lang="js">
const partners = [
      {
          id: 1,
          companyTitle: "Tropical Delights Distributors",
          area: "Food & Beverage",
          logo: "partnerLogos/MainPartners/partner-1.png",
          desc: "Tropical Delights Distributors is a leading distributor of snacks and beverages in Malaysia. They are the exclusive distributor of many popular brands, including Calbee, Mamee, and Pokka.",
          socials: {
              facebook: "https://www.facebook.com/TropicalDelightsDistributors/",
              twitter: "https://twitter.com/TropicalDelightsDistributors",
              instagram: "https://www.instagram.com/tropicaldelightsdistributors/",
              linkedin: "https://www.linkedin.com/company/tropical-delights-distributors-sdn-bhd/",
              website: "https://www.tropicaldelights.com.my/",
          },
          datePartnered: "2021-01-01",
      },
      {
          id: 2,
          companyTitle: "Eco-Pack Solutions",
          area: "Packaging",
          logo: "partnerLogos/MainPartners/partner-2.png",
          desc: "Eco-Pack Solutions is a leading packaging supplier in Malaysia. They specialize in providing eco-friendly packaging solutions to businesses across the country.",
          socials: {
              facebook: "https://www.facebook.com/ecopacksolutions/",
              twitter: "https://twitter.com/ecopacksolution",
              instagram: "https://www.instagram.com/ecopacksolutions/",
              linkedin: "https://www.linkedin.com/company/eco-pack-solutions/",
              website: "https://www.ecopacksolutions.com.my/",
          },
          datePartnered: "2021-03-11",
      },
      {
          id: 3,
          companyTitle: "Global Flavor Trends Consultancy",
          area: "Food & Beverage",
          logo: "partnerLogos/MainPartners/partner-3.png",
          desc: "Global Flavor Trends Consultancy is a leading food and beverage consultancy in Malaysia. They specialize in providing flavor solutions to businesses across the country.",
          socials: {
              facebook: "https://www.facebook.com/globalflavortrendsconsultancy/",
              twitter: "https://twitter.com/GlobalFlavorTrendsConsultancy",
              instagram: "https://www.instagram.com/globalflavortrendsconsultancy/",
              linkedin: "https://www.linkedin.com/company/global-flavor-trends-consultancy/",
              website: "https://www.globalflavortrendsconsultancy.com/",
          },
          datePartnered: "2021-02-08",
      },

      // Add more partners as needed
  ];

  onMounted(() => {
      // Animate the partners using GSAP
      // gsap.from(".partner", {
      //   opacity: 0,
      //   y: 50,
      //   stagger: 0.2,
      //   duration: 1,
      // });
  });
</script>

<style scoped></style>
