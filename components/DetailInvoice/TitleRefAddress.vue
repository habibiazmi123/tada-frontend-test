<template>
    <div class="w-full flex justify-between items-start flex-col gap-8 mdTab:flex-row">
      <div class="text-xs font-bold tracking-heading4 leading-heading4 md:text-med">
        <h4 class=" text-textLight dark:text-basicWhite">
          <span class="text-shadedTextLight dark:text-textReallyDark">
            #
          </span>
          {{invoiceId}}
        </h4>
        <p class="font-medium text-shadedTextLight dark:text-shadedTextDark">
          {{description}}
        </p>
      </div>
      <div class="text-xtraSm text-shadedTextLight tracking-body2 leading-body2 dark:text-shadedTextDark md:text-14">
        <p>{{senderAddress?.street}}</p>
        <p>{{senderAddress?.city}}</p>
        <p>{{senderAddress?.postCode}}</p>
        <p>{{senderAddress?.country}}</p>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
    invoiceId: Number,
    description: String,
    senderAddress: Object
})
</script>