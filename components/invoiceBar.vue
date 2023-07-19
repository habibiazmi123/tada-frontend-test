<template>
    <div class="flex justify-between items-center col-start-1 col-end-13 md:py-1">
      <div>
        <h1 class="text-xl font-bold tracking-heading2 dark:text-basicWhite md:text-lrgHeading md:tracking-heading1">
          Invoices
        </h1>
        <!-- <InvoiceCount /> -->
      </div>
      <div class="flex justify-center items-center gap-[18px] md:gap-10">
        <div class="relative">
          <div
            id="filter-dropdown"
            class="flex justify-center items-center gap-3 hover:cursor-pointer"
          >

            <h4 class="text-xs text-textLight leading-heading4 -tracking-heading4 font-bold dark:text-basicWhite md:text-med">
              Filter <span class="hidden md:inline">by status</span>
            </h4>
            <!-- <ArrowDown /> -->
          </div>
          <!-- <FilterDropdown
            setIsFilterDropdownOpen={setIsFilterDropdownOpen}
            isFilterDropdownOpen={isFilterDropdownOpen}
          /> -->
        </div>
        <button
          @click="toggleModal"
          class="w-[90px] flex justify-start items-center p-[6px] bg-primaryPurple rounded-3xl gap-2 md:w-[150px] md:h-12 md:gap-4 md:p-2 hover:bg-shadedPurple active:bg-primaryPurple"
        >
          <span class="h-8 w-8 rounded-full bg-basicWhite grid place-items-center">
            <img src="@/assets/icon-plus.svg" />
          </span>
          <p class="text-xs font-bold text-basicWhite tracking-body1 leading-heading4 md:text-med">
            New <span class="hidden md:inline">Invoice</span>
          </p>
        </button>
      </div>
    </div>
</template>
<script setup>
const { toggleModal } = useModal();
</script>