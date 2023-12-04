<template>
  <div
    class="w-full text-center bg-gradient-to-t from-sky-400/50 via-transparent -z-10 h-8"
  ></div>
  <footer
    class="px-3 py-8 text-white transition-colors duration-200 bg-[color:#1B75BB] dark:bg-gray-800 text-2 dark:text-gray-200"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="h-px mx-auto rounded-full md:hidden mt-7 bg-white w-11">
        <!-- hr -->
      </div>
      <div class="flex flex-col mt-4 md:mt-0 md:flex-row">
        <div
          class="grid grid-cols-2 md:grid-cols-3 w-[30rem] lg:w-auto mx-auto"
        >
          <div
            class="col-span-2 w-auto mx-auto md:mx-0 text-center md:text-start md:mb-6 md:pb-4"
          >
            <span class="font-bold text-xl md:text-2xl">Follow Us</span>
            <div class="flex gap-1 mt-1 text-[color:#1B75BB]">
              <NuxtLink
                to="#"
                class="bg-white rounded-full p-2 scale-75 hover:scale-105 transition-transform duration-200 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[color:#1B75BB] hover:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="bg-white rounded-full p-2 scale-75 hover:scale-105 transition-transform duration-200 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[color:#1B75BB] hover:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="bg-white rounded-full p-2 scale-75 hover:scale-105 transition-transform duration-200 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[color:#1B75BB] hover:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="bg-white rounded-full p-2 scale-75 hover:scale-105 transition-transform duration-200 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[color:#1B75BB] hover:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"
                  />
                </svg>
              </NuxtLink>
            </div>
            <div
              class="h-px mx-auto rounded-full md:hidden mt-7 bg-white w-11 mb-8"
            >
              <!-- hr -->
            </div>
          </div>
          <div
            class="col-span-2 row-start-7 md:col-span-1 md:row-span-4 w-[12rem] mx-auto md:mx-0 text-center md:text-start"
          >
            <div class="flex flex-col mt-1 gap-y-3">
              <span class="text-lg font-bold">Company Address</span>
              <span class="text-sm"
                >1234 Street Name,<br />Kuala Lumpur,<br />Malaysia</span
              >
              <div class="flex flex-col mt-2 md:mt-6 gap-y-3 mb-3">
                <span class="text-lg font-bold">Contact</span>
                <span class="text-sm"
                  ><b>Phone: </b>(123) 456-7890 <br /><b>Email:</b>
                  abc@sunycandy.com</span
                >
              </div>
            </div>
          </div>
          <div
            class="col-span-1 md:col-span-1 w-auto md:w-[10rem] mx-auto md:mx-0 h-auto text-center md:text-start"
          >
            <nav class="md:items-center md:pr-5">
              <ul class="text-sm">
                <li><span class="font-bold text-lg">Policies</span></li>
                <li>
                  <NuxtLink
                    aria-current="Privacy Policy"
                    to="#"
                    class="hover:underline underline-offset-4 dark:hover:text-white"
                  >
                    Privacy Policy
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    aria-current="Terms of Use"
                    to="#"
                    class="hover:underline underline-offset-4 dark:hover:text-white"
                  >
                    Terms of Use
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    aria-current="Cookie Policy"
                    to="#"
                    class="hover:underline underline-offset-4 dark:hover:text-white"
                  >
                    Cookie Policy
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
          <div
            class="col-span-1 md:col-span-1 w-auto md:w-[10rem] mb-8 md:mb-0 text-center md:text-start"
          >
            <nav class="items-center md:pr-5">
              <ul class="text-sm">
                <li><span class="font-bold text-lg">Website</span></li>
                <li>
                  <NuxtLink
                    aria-current="Who Are We"
                    to="#WhoAreWe"
                    class="hover:underline underline-offset-4 dark:hover:text-white"
                  >
                    Who Are We
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    aria-current="Blogs"
                    to="#Blogs"
                    class="hover:underline underline-offset-4 dark:hover:text-white"
                  >
                    Blogs
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    aria-current="What We Offer"
                    to="#whatWeOffer"
                    class="hover:underline underline-offset-4 dark:hover:text-white"
                  >
                    What We Offer
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    aria-current="Partners"
                    to="#Partners"
                    class="hover:underline underline-offset-4 dark:hover:text-white"
                  >
                    Partners
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="flex justify-center">
          <div
            class="flex flex-col md:ml-12 mt-2 text-center md:text-start w-[30rem]"
          >
            <div
              class="h-px mx-auto rounded-full md:hidden mt-7 bg-white w-11 mb-8"
            >
              <!-- hr -->
            </div>
            <span class="font-bold text-lg">Company Awards</span>
            <div
              class="flex gap-x-4 align-middle items-center justify-center md:justify-start"
            >
              <NuxtImg
                src="/sunnyCandy/awards/award1.png"
                width="94"
                height="128"
              ></NuxtImg>
              <NuxtImg
                src="/sunnyCandy/awards/award2.png"
                width="94"
                height="128"
              ></NuxtImg>
              <NuxtImg
                src="/sunnyCandy/awards/award3.png"
                width="171"
                height="112"
              ></NuxtImg>
            </div>
            <div
              class="h-px mx-auto mt-4 rounded-full bg-white md:hidden w-11"
            ></div>
          </div>
        </div>

        <div
          class="w-[25rem] mx-auto md:mx-0 pl-0 md:pl-4 mt-2 items-center justify-center"
        >
          <div class="grid grid-cols-1 text-center md:text-start">
            <div class="col-span-1">
              <span class="text-lg font-bold mb-4"
                >Sign Up For More Updates</span
              ><br />
              <span class="text-sm"
                >Subscribe to our newsletter to receive news, special offers and
                information about Sunny Candy Co.</span
              >
            </div>
            <div class="col-span-1 relative mt-4">
              <span
                class="text-md font-bold absolute -translate-x-16 md:-translate-x-0"
                >Email Address</span
              >
              <form action="" class="mt-3">
                <input
                  type="email"
                  class="w-[14rem] px-2 py-1 mt-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[color:#1B75BB] focus:ring-white bg-transparent"
                />
                <button
                  type="submit"
                  class="px-4 py-2 ml-2 mt-2 text-white uppercase bg-orange-500/75 hover:bg-orange-500 border-2 border-transparent rounded-lg text-sm transition duration-500 ease-in-out font-bold hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          class="h-px mx-auto mt-4 rounded-full bg-white md:hidden w-11 mb-4"
        ></div>
      </div>
      <div class="flex items-center justify-center mt-7 flex-wrap">
        <span class="">Copyright by Sunny Candy Co. 2015-2023 ©</span>
        <span class="ml-0 mt-2 md:mt-0 md:ml-48">
          Created by
          <NuxtLink
            class="underline hover:text-orange-500 transition-colors duration-200"
            to="https://www.nxthink.dev/"
          >
            NxThink studio 2023
          </NuxtLink>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
