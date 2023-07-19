<template>
    <form id="invoiceForm" name="invoiceForm">
      <FormBillFrom
        street="Jl America"
        city="Bandung"
        postCode="40291"
        country="Indonesia"
      />
      <FormBillTo/>
      <!-- <ItemList
        items={invoiceFormValues?.items}
      /> -->
    </form>
</template>
<script setup>
    const props = defineProps({
        invoiceFormValues: Object,
        defaultTerms: Object  
    })
</script>