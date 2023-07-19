<template>
    <div class="grid grid-cols-6 pb-16">
      <h3 class="text-primaryPurple text-xs font-bold leading-body1 tracking-body1 mb-6 col-start-1 col-end-7">
        Bill To
      </h3>
      <BillToComponentClientsDesc />
      <BillToComponentInvoiceDesc />
    </div>
</template>
<script setup>
    const props = defineProps({
        clientAddress: String,
        clientName: String,
        clientEmail: String,
        description: String,
        createdAt: String,
        defaultTerms: String,
    })
</script>