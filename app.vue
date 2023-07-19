<template>
  <div :class="{'dark': enabled}">
    <div class="App bg-bgColorLight font-spartan min-h-screen w-full grid grid-cols-mainMob grid-rows-firstRowMinContent dark:bg-bgColorDark md:grid-cols-invoiceTab lg:grid-cols-mainDesk lg:grid-rows-[auto] lg:gap-x-[30px]">
      <Navbar/>
      
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <AddEditForm />
    </div>
  </div>
</template>
<script setup>
const { enabled } = useTheme() 
</script>