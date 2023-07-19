<template>
    <main class="relative w-full h-full py-8 col-start-2 col-end-12 row-start-2 grid grid-cols-invoiceMax grid-rows-firstRowMinContent gap-y-8 max-w-[400px] tab:max-w-[730px] lg:pt-[72px] mx-auto lg:col-start-3 lg:col-end-[14] lg:row-start-1">
        <InvoiceBar/>
        
        <InvoiceContainer/>
    </main>
</template>
<script setup>
    useHead({
        title: "Invoice"
    })
</script>