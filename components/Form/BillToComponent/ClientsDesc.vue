<template>
    <div class="w-full grid gap-6 grid-cols-6 pb-10 col-start-1 col-end-7">
      <div class="relative grid gap-2 col-start-1 col-end-7">
        <label
            class="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
            :class="{
                'text-deleteBtn': inputErrors?.clientName?.isError,
                'text-shadedTextLight dark:text-shadedTextDark': !inputErrors?.clientName?.isError
            }"
            htmlFor="clientName"
        >
          Client's Name
        </label>
        <p v-if="inputErrors?.clientName?.isError" class="text-xs text-deleteBtn absolute top-0 right-0">
        {{inputErrors?.clientName?.msg}}
        </p>
        <input
          id="clientName"
          name="clientName"
          class="w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark"
          :class="{
            'border-deleteBtn': inputErrors?.clientName?.isError,
            'border-shadedTextDark dark:border-none': !inputErrors?.clientName?.isError
          }"
          type="text"
          :value="clientName"
        />
      </div>
      <div class="relative grid gap-2 col-start-1 col-end-7">
        <label
            class="text-xs text-shadedTextLight font-medium leading-heading4 tracking-heading4"
            :class="{
                'text-deleteBtn': inputErrors?.clientEmail?.isError,
                'text-shadedTextLight dark:text-shadedTextDark': !inputErrors?.clientEmail?.isError
            }"
          htmlFor="clientEmail"
        >
          Clients's Email
        </label>
        <p v-if="inputErrors?.clientEmail?.isError" class="text-xs text-deleteBtn absolute top-0 right-0">
            {{inputErrors?.clientEmail?.msg}}
        </p>
        <input
          id="clientEmail"
          name="clientEmail"
          class="w-full rounded-md border-2 outline-none px-5 py-3 dark:bg-shadedContentDark"
          :class="{
            'border-deleteBtn': inputErrors?.clientEmail?.isError,
            'border-shadedTextDark dark:border-none': !inputErrors?.clientEmail?.isError
          }"
          type="text"
          :value="clientEmail"
        />
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
    inputErrors: Object
})
</script>