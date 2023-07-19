<template>
    <div class="grid grid-cols-datesAddressMob grid-rows-datesAddressMob mdTab:grid-cols-datesAddressTab mdTab:grid-rows-datesAddressTab md:grid-cols-datesAddressDesk">
      <div class="grid gap-8 col-start-1 col-end-2 md:row-start-1 md:row-end-2">
        <div class="grid gap-3">
          <h4 class="text-xs tracking-heading4 leading-heading4 text-shadedTextLight dark:text-shadedTextDark md:text-med">
            Invoice Date
          </h4>
          <p class="text-med font-bold leading-subheading tracking-subheading text-textLight dark:text-basicWhite md:text-lg">
            {{createdAt && parseDateFormatting(createdAt)}}
          </p>
        </div>
        <div class="grid gap-3">
          <h4 class="text-xs tracking-heading4 leading-heading4 text-shadedTextLight dark:text-shadedTextDark md:text-med">
            Payment Due
          </h4>
          <p class="text-med font-bold leading-subheading tracking-subheading text-textLight dark:text-basicWhite md:text-lg">
            {{paymentDue && parseDateFormatting(paymentDue)}}
          </p>
        </div>
      </div>
      <div class="text-xtraSm text-shadedTextLight tracking-body2 leading-body2 grid gap-3 col-start-3 col-end-4 dark:text-shadedTextDark md:text-14 md:row-start-1 md:row-end-3">
        <h4 class="text-xs tracking-heading4 leading-heading4 dark:text-shadedTextDark md:text-med">
          Bill To
        </h4>
        <div>
          <h2 class="text-med font-bold leading-subheading tracking-subheading text-textLight mb-2 dark:text-basicWhite md:text-lg">
            {{clientName}}
          </h2>
          <p>{{clientAddress?.street}}</p>
          <p>{{clientAddress?.city}}</p>
          <p>{{clientAddress?.postCode}}</p>
          <p>{{clientAddress?.country}}</p>
        </div>
      </div>
      <div class="col-start-1 col-end-5 row-start-3 row-end-4 mdTab:row-start-1 mdTab:row-end-2 mdTab:col-start-5 mdTab:col-end-6">
        <h4 class="text-xs text-shadedTextLight tracking-heading4 leading-heading4 dark:text-shadedTextDark md:text-med">
          Sent to
        </h4>
        <p class="text-med font-bold leading-subheading tracking-subheading text-textLight break-all dark:text-basicWhite md:text-lg">
          {{clientEmail}}
        </p>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
    createdAt: String,
    paymentDue: String,
    clientName: String,
    clientEmail: String,
    clientAddress: Object
})
</script>