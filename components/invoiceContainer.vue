<template>
    <section class="col-start-1 col-end-13 h-full flex flex-col justify-start items-center gap-4">
        <NuxtLink to="/invoice/123456" class="w-full">
            <Invoice :invoiceId="123456" :paymentDue="'20 Aug 2023'" :clientName="'testing 1'" :total="1000" :status="'paid'"/>
        </NuxtLink>
        <NuxtLink to="/invoice/123456" class="w-full">
            <Invoice :invoiceId="123456" :paymentDue="'20 Aug 2023'" :clientName="'testing 2'" :total="1000" :status="'paid'"/>
        </NuxtLink>
        <NuxtLink to="/invoice/123456" class="w-full">
            <Invoice :invoiceId="123456" :paymentDue="'20 Aug 2023'" :clientName="'testing 3'" :total="1000" :status="'paid'"/>
        </NuxtLink>
        <NuxtLink to="/invoice/123456" class="w-full">
            <Invoice :invoiceId="123456" :paymentDue="'20 Aug 2023'" :clientName="'testing 4'" :total="1000" :status="'paid'"/>
        </NuxtLink>
        <NuxtLink to="/invoice/123456" class="w-full">
            <Invoice :invoiceId="123456" :paymentDue="'20 Aug 2023'" :clientName="'testing 5'" :total="1000" :status="'paid'"/>
        </NuxtLink>
    </section>
</template>
<script>
    
</script>