<template>
    <template v-if="isEditModeActive">
        <div class="w-full px-6 py-5 flex  justify-end items-center gap-[7px] bg-basicWhite pointer-events-auto dark:bg-bgColorDark tab:px-14 tab:py-8">
          <button
            @click="toggleModal"
            class="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight dark:bg-shadedContentDark tab:w-24"
          >
            Cancel
          </button>
          <button
            @click="toggleModal"
            class="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite tab:w-[128px]"
          >
            Save Changes
          </button>
        </div>
    </template>
    <template v-else>
        <div class="w-full px-6 py-5 flex flex-wrap justify-center items-center gap-[7px] bg-basicWhite pointer-events-auto dark:bg-bgColorDark tab:px-14 tab:py-8">
          <button
            @click="toggleModal"
            class="w-[84px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight tab:w-24 tab:mr-auto"
          >
            Discard
          </button>
          <button
            @click="toggleModal"
            class="w-[117px] h-12 rounded-3xl bg-navbarLight text-textReallyDark hover:bg-textLight active:bg-navbarLight dark:text-shadedTextDark dark:hover:bg-contentBgDark tab:w-[113px]"
          >
            Save as Draft
          </button>
          <button
            @click="toggleModal"
            class="w-[112px] h-12 rounded-3xl bg-primaryPurple text-basicWhite hover:bg-shadedPurple active:bg-primaryPurple tab:w-[128px]"
          >
            Save & Send
          </button>
        </div>
    </template>
</template>
<script setup>
    const props = defineProps({
        isEditModeActive: {
            type: Boolean,
            default: true
        }
    })

    const { toggleModal } = useModal();
</script>