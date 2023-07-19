<template>
    <main
      class="fixed top-[72px] overflow-y-scroll bg-basicWhite w-full h-[calc(100vh-72px)] pt-8 z-10 transition-all -translate-x-[200%] grid grid-cols-formPageMob max-w-[616px] dark:bg-bgColorDark mdTab:rounded-r-[20px] tab:grid-cols-formPageTab md:top-20 lg:top-0 lg:h-screen lg:max-w-[666px] lg:pl-[50px] lg:left-[50px] lg:z-[1]"
      :class="{'translate-x-0': open}"
    >
      <section
        class="text-textLight col-start-2 col-end-12 pb-6
        dark:text-basicWhite"
      >
        <BackBtn isOnInvoiceForm={true} />
        <h2 class="text-textLight text-2xl leading-heading1 -tracking-subheading font-bold mb-6 dark:text-basicWhite">
            <template v-if="isEditModeActive">
              Edit <span class="text-textReallyDark">#</span>
              {{invoiceFormValues?.invoiceId}}
            </template>
            <template v-else>
                New Invoice
            </template>
        </h2>
        <Form
          invoiceFormValues={invoiceFormValues}
          defaultTerms={defaultTerms}
        />
      </section>
      <div class="relative z-50 w-full col-start-1 col-end-13 tab:sticky tab:bottom-0 tab:left-0 pointer-events-none">
        <div class="w-full h-16 bg-gradient-to-t from-basicBlack to-basicBlack/10 opacity-10 dark:opacity-30"></div>
        <NewEditButton />
      </div>
    </main>
</template>
<script setup>
    const props = defineProps({
        isFormOpen: {
            type: Boolean,
            default: false,
        },
        isEditModeActive: {
            type: Boolean,
            default: false,
        }
    })

    const { open } = useModal();
</script>