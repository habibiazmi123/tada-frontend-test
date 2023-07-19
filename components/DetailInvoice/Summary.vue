<template>
    <div class="w-full rounded-lg overflow-hidden">
      <div class="w-full flex flex-col justify-start items-center gap-6 p-6 bg-shadedContentLight text-xs font-bold tracking-heading4 leading-heading4 text-textLight dark:text-basicWhite dark:bg-shadedContentDark md:p-8 md:pb-10 md:text-med">
        <div class="hidden font-medium text-shadedTextLight text-xtraSm leading-body2 tracking-body2 w-full justify-between items-center dark:text-shadedTextDark mdTab:flex mdTab:text-end md:text-14">
          <h4 class="mdTab:text-left mdTab:flex-[1.5]">Item Name</h4>
          <h4 class="hidden mdTab:inline mdTab:flex-[1]">QTY.</h4>
          <h4 class="hidden mdTab:inline mdTab:flex-[1]">Price</h4>
          <h4 class="hidden mdTab:inline mdTab:flex-[1]">Total</h4>
        </div>
        <div
            v-for="(item, key) in items"
            :key="key"
            class="w-full flex justify-between items-center mdTab:text-end"
        >
            <div class="flex flex-col mdTab:text-left mdTab:flex-[1.5]">
                <h4>{{item?.name}}</h4>
                <p class="text-shadedTextLight dark:text-shadedTextDark mdTab:hidden">
                {{item?.quantity.toLocaleString()}} x
                {{Number(item.price).toLocaleString(undefined, {
                    style: "currency",
                    currency: "GBP",
                })}}
                </p>
            </div>
            <p class="text-shadedTextLight hidden dark:text-shadedTextDark mdTab:inline mdTab:flex-[1]">
                {{item?.quantity.toLocaleString()}}
            </p>
            <p class="text-shadedTextLight hidden dark:text-shadedTextDark mdTab:inline mdTab:flex-[1]">
                {{Number(item.price).toLocaleString(undefined, {
                style: "currency",
                currency: "GBP",
                })}}
            </p>
            <p class="mdTab:flex-[1]">
                {{item?.total.toLocaleString(undefined, {
                style: "currency",
                currency: "GBP",
                })}}
            </p>
        </div>
      </div>

      <div class="flex justify-between items-center p-6 bg-navbarLight text-basicWhite dark:bg-textLight md:p-8">
        <p class="text-xtraSm leading-body2 tracking-body2 md:text-14">
          Grand Total
        </p>
        <p class="text-xl leading-[32px] -tracking-[0.42px] md:text-2xl">
          {{total?.toLocaleString(undefined, {
            style: "currency",
            currency: "GBP",
          })}}
        </p>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
    items: Array,
    total: Number
})
</script>