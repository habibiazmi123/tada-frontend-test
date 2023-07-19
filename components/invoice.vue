<template>
    <div class="bg-basicWhite w-full grid text-xs font-bold rounded-lg grid-cols-invoiceMax grid-rows-invoiceContainerMobRows p-6 hover:outline hover:outline-1 hover:outline-primaryPurple dark:bg-contentBgDark tab:grid-cols-singleInvoiceContainer tab:grid-rows-none tab:items-center tabLg:grid-cols-singleInvoiceContainerLg mb-4">
      <p class="col-start-1 col-end-6 row-start-1 row-end-2 dark:text-basicWhite tab:row-auto tab:col-end-2 md:text-xs">
        <span class="text-toggleColorDark dark:text-shadedTextLight">
          #
        </span>
        {{ invoiceId }}
      </p>
      <p class="text-shadedTextLight font-medium col-start-1 col-end-6 row-start-3 row-end-4 dark:text-shadedTextDark tab:col-start-2 tab:col-end-3 tab:row-auto md:text-xs">
        Due {{ paymentDue && parseDateFormatting(paymentDue) }}
      </p>
      <p class="text-toggleColorDark font-medium col-start-4 col-end-13 row-start-1 row-end-2 justify-self-end dark:text-basicWhite tab:row-auto tab:col-start-3 tab:col-end-4 tab:justify-self-auto md:text-xs">
        {{ clientName }}
      </p>
      <div class="col-start-1 col-end-13 flex justify-between items-center row-start-3 row-end-4 tab:row-auto tab:col-start-4 tab:col-end-5 tab:justify-end tab:gap-10">
        <p class="text-base self-end tab:self-center dark:text-basicWhite">
            {{ total?.toLocaleString(undefined, { style: "currency", currency: "GBP" }) }}
        </p>
        <Status :status="status" />
      </div>
      <div class="hidden pl-5 tab:block">
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"></path></svg>
      </div>
    </div>
</template>
<script setup>
  const props = defineProps({
    invoiceId: Number,
    paymentDue: String,
    clientName: String,
    total: Number,
    status: String
  });
</script>