<template>
    <div class="grid gap-6 grid-cols-6 pb-10">
      <h3 class="text-primaryPurple text-xs font-bold leading-body1 tracking-body1 col-start-1 col-end-7">
        Bill From
      </h3>

      <div class="relative grid gap-2 col-start-1 col-end-7">
        <label
        class="text-xs font-medium leading-heading4 tracking-heading4"
        :class="{
            'text-deleteBtn': inputErrors?.senderStreet?.isError,
            'text-shadedTextLight dark:text-shadedTextDark': !inputErrors?.senderStreet?.isError
        }"
        htmlFor="senderStreet"
        >
          Street Address
        </label>
        <p v-if="inputErrors?.senderStreet?.isError" class="text-xs text-deleteBtn absolute top-0 right-0">
        {{inputErrors?.senderStreet?.msg}}
        </p>
        <input
          id="senderStreet"
          name="street"
          class="w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark"
          :class="{
            'border-deleteBtn': inputErrors?.senderStreet?.isError,
            'border-shadedTextDark dark:border-none': !inputErrors?.senderStreet?.isError
          }"
          type="text"
          :value="street"
        />
      </div>
      <div class="relative grid gap-2 col-start-1 col-end-4 tab:col-start-1 tab:col-end-3">
        <label
        class="text-xs font-medium leading-heading4 tracking-heading4"
        :class="{
            'text-deleteBtn': inputErrors?.senderCity?.isError,
            'text-shadedTextLight dark:text-shadedTextDark': !inputErrors?.senderCity?.isError
        }"
        htmlFor="senderCity"
        >
          City
        </label>
        <p v-if="inputErrors?.senderCity?.isError" class="text-xs text-deleteBtn absolute top-0 right-0">
        {{inputErrors?.senderCity?.msg}}
        </p>
        <input
          id="senderCity"
          name="city"
          class="w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark"
          :class="{
            'border-deleteBtn': inputErrors?.senderCity?.isError,
            'border-shadedTextDark dark:border-none': !inputErrors?.senderCity?.isError
          }"
          type="text"
          :value="city"
        />
      </div>

      <div class="relative grid gap-2 col-start-4 col-end-7 tab:col-start-3 tab:col-end-5">
        <label
            class="text-xs font-medium leading-heading4 tracking-heading4"
            :class="{
                'text-deleteBtn': inputErrors?.senderPostCode?.isError,
                'text-shadedTextLight dark:text-shadedTextDark': !inputErrors?.senderPostCode?.isError
            }"
            htmlFor="senderPostcode"
        >
          Post Code
        </label>
        <p v-if="inputErrors?.senderPostCode?.isError" class="text-xs text-deleteBtn absolute top-0 right-0">
        {{inputErrors?.senderPostCode?.msg}}
        </p>
        <input
          id="senderPostcode"
          name="postCode"
          class="w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark"
          :class="{
            'border-deleteBtn': inputErrors?.senderPostCode?.isError,
            'border-shadedTextDark dark:border-none': !inputErrors?.senderPostCode?.isError
          }"
          type="text"
          :value="postCode"
        />
      </div>

      <div class="relative grid gap-2 col-start-1 col-end-7 tab:col-start-5 tab:col-end-7">
        <label
          class="text-xs font-medium leading-heading4 tracking-heading4"
            :class="{
                'text-deleteBtn': inputErrors?.senderCountry?.isError,
                'text-shadedTextLight dark:text-shadedTextDark': !inputErrors?.senderCountry?.isError
            }"
          htmlFor="senderCountry"
        >
          Country
        </label>
        <p v-if="inputErrors?.senderCountry?.isError" class="text-xs text-deleteBtn absolute top-0 right-0">
        {{inputErrors?.senderCountry?.msg}}
        </p>
        <input
          id="senderCountry"
          name="country"
          class="w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark"
          :class="{
            'border-deleteBtn': inputErrors?.senderCountry?.isError,
            'border-shadedTextDark dark:border-none': !inputErrors?.senderCountry?.isError
          }"
          type="text"
          :value="country"
        />
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
    inputErrors: Object,
    street: String,
    city: String,
    postCode: String,
    country: String,
})
</script>