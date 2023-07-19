<template>
    <div class="w-full bg-basicWhite p-6 rounded-lg mdTab:flex items-center justify-between dark:bg-contentBgDark md:p-8">
      <div class="flex justify-between items-center mdTab:justify-start mdTab:gap-4">
        <p class="text-xs text-toggleColorDark leading-body1 tracking-body1 dark:text-shadedTextDark md:text-med">
          Status
        </p>
        <Status :status="status" />
      </div>
      <DetailInvoiceActionButton :isOnLargerScreens="true" />
    </div>
</template>
<script setup>
    const props = defineProps({
        status: String
    })
</script>