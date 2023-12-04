<template>
  <div class="max-w-7xl mx-auto px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-16">
    <div class="max-w-screen-md mx-auto">
      <h2 class="text-2xl lg:text-4xl text-center font-bold text-gray-500 pb-8">
        Don't be shy to reach us,<br />let us know what's your thought
      </h2>
      <Vueform
        class="p-4 bg-white/80 rounded-lg shadow-lg dark:bg-gray-800 form-color-primary"
        size="lg"
        endpoint="/form/submit"
        method="post"
      >
        <GroupElement name="personal_information" label="Person's Information*">
          <TextElement
            name="name"
            placeholder="Name"
            rules="required"
            :columns="12"
          />
          <TextElement
            name="email"
            placeholder="Email address"
            rules="required|email|max:255"
            :columns="6"
            :debounce="300"
          />
          <TextElement
            name="contact"
            placeholder="Mobile number"
            rules="required|numeric|digits_between:10,11"
            :columns="6"
            :debounce="300"
          />
        </GroupElement>
        <GroupElement name="contact_information" label="Information*">
          <TextElement
            name="company"
            placeholder="Company name"
            :columns="12"
          />
          <RadiogroupElement
            name="message_type"
            label="Interested in*"
            required="true"
            view="tabs"
            :items="['Sales', 'Wholesales', 'Careers', 'Others']"
            :columns="12"
          ></RadiogroupElement>
        </GroupElement>
        <!-- <GroupElement name="contact_information" label="Contacts*">
        </GroupElement> -->
        <TextareaElement name="message" rules="required" placeholder="Message" />

        <!-- <div class="">
          <button
            class=""
          >
            Submit
          </button>
        </div> 
        px-8 py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-500 ease-in-out cursor-pointer
    -->

        <ButtonElement name="submit" add-class="mx-auto " submits>
          Submit My Message
        </ButtonElement>
      </Vueform>
    </div>
    <!-- <Vueform>
      <TextElement name="hello_world" label="Hello" placeholder="World" />
    </Vueform> -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.vueform-element {
  width: 100%;
}
.vueform-element__label {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  color: #374151;
}
</style>
