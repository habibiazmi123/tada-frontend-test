<template>
    <main class="relative w-full max-w-[730px] mx-auto col-start-2 col-end-12 row-start-2 lg:col-start-3 lg:col-end-[14] pt-8 mdTab:pt-12 mdTab:pb-[135px] lg:pt-16 lg:pb-[54px] lg:row-start-1">
        <!-- <DeleteModal invoiceId={activeSingleInvoice?.invoiceId} /> -->

        <BackButton />

        <section class="w-full grid gap-4">
            <DetailInvoiceStatusAndActionBar status="paid" />

            <div class="w-full p-6 bg-basicWhite rounded-lg dark:bg-contentBgDark md:p-8 lg:p-12">
            <div class="w-full grid gap-8 pb-10">
                
                <DetailInvoiceTitleRefAddress :invoiceId="123123" :description="'lorem lorem lorem lorem'" :senderAddress="{street: 'Antapani Street', city: 'Bandung', postCode: 40291, country: 'Indonesia'}" />
                
                <DetailInvoiceDatesClientsDesc :createdAt="'20 Aug 2020'" :paymentDue="'20 May 2023'" clientName="Azmi" clientEmail="m.habibiazmi@gmail.com" :clientAddress="{street: 'American Street', city: 'Bandung', postCode: 40291, country: 'Indonesia'}" />
            </div>

            <DetailInvoiceSummary :items="[{name: 'Item 1', quantity: 1, price: 1000, total: 1000},{name: 'Item 2', quantity: 10, price: 10, total: 100},{name: 'Item 3', quantity: 5, price: 1000, total: 5000}]" :total="5100" />
            </div>
        </section>
    </main>

    <div class="col-start-1 col-end-13 w-full p-6 mt-14 bg-basicWhite mdTab:hidden dark:bg-contentBgDark">
    <!-- <ActionBtns /> -->
    </div>
</template>