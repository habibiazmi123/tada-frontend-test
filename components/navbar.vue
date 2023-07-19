<template>
    <nav class="w-full bg-navbarLight h-[72px] sticky top-0 z-[5] flex justify-between items-center col-start-1 col-end-13 dark:bg-contentBgDark md:h-20 lg:col-start-1 lg:col-end-2 lg:h-full lg:flex-col lg:rounded-r-[20px] lg:fixed lg:w-[80px]">
      <div class="h-full bg-primaryPurple w-[72px] relative rounded-r-[20px] overflow-hidden md:w-20 lg:w-full lg:h-[80px]">
        <div class="w-full h-1/2"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="@/assets/logo.svg" alt="Logo" />
        </div>
        <div class="w-full h-1/2 bg-shadedPurple rounded-tl-[20px]"></div>
      </div>

      <div class="h-full flex lg:flex-col lg:w-full lg:h-auto">
          <div v-if="enabled" @click="toggleTheme" class="h-full px-6 grid place-items-center md:px-8 lg:px-0 lg:py-8 cursor-pointer">
            <img src="@/assets/icon-sun.svg" class="rounded-full" />
          </div>
          <div v-else @click="toggleTheme" class="h-full px-6 grid place-items-center md:px-8 lg:px-0 lg:py-8 cursor-pointer">
            <img src="@/assets/icon-moon.svg" class="rounded-full" />
          </div>
        <div class="h-full px-6 grid place-items-center border-l border-avatarBorderColor md:pr-6 md:pl-8 lg:px-0 lg:py-6 lg:border-l-0 lg:border-t">
          <div class="relative w-8 h-8 rounded-full hover:cursor-pointer">
            <img src="@/assets/image-avatar.jpg" class="rounded-full" alt="profile-avatar" />
          </div>
        </div>
      </div>
    </nav>
</template>
<script setup>
useHead({
     script: [ {children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`} ]
})

const { enabled, toggleTheme } = useTheme() 
</script>