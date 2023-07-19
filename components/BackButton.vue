<template>
    <NuxtLink
      :to="isOnInvoiceForm || '/'"
      class="w-fit mb-8 flex justify-start items-baseline gap-6 text-xs tracking-body1 leading-body1 font-bold hover:text-shadedTextLight dark:text-basicWhite dark:hover:text-textReallyDark md:text-med"
      :class="{'tab:hidden': isOnInvoiceForm}"
    >
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"></path></svg>
      <p>Go back</p>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    isOnInvoiceForm: {
        type: Boolean,
        default: false
    }
})
</script>