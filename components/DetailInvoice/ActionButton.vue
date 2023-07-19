<template>
    <div
    class="flex flex-wrap justify-center items-center gap-2"
    :class="{'hidden flex-nowrap mdTab:flex bg-none': isOnLargerScreens}"
    >
      <button
        @click="toggleModal"
        class="w-[73px] h-12 rounded-3xl bg-shadedContentLight text-shadedTextLight hover:bg-shadedTextDark active:text-shadedTextLight active:bg-shadedContentLight dark:bg-shadedContentDark dark:text-shadedTextDark dark:hover:text-shadedTextLight dark:hover:bg-basicWhite active:dark:bg-shadedContentDark active:dark:text-shadedTextDark"
      >
        Edit
      </button>
      <button
        class="w-[89px] h-12 rounded-3xl bg-deleteBtn text-basicWhite hover:bg-deleteBtnShaded active:bg-deleteBtn" 
      >
        Delete
      </button>
      <button
        class="w-[149px] h-12 rounded-3xl bg-primaryPurple text-basicWhite mdTab:w-[131px] hover:bg-shadedPurple active:bg-primaryPurple"
      >
        Mark as Paid
      </button>
    </div>
</template>
<script setup>
    const props = defineProps({
        isOnLargerScreens: {
            type: Boolean,
            default: false
        }
    })

    const { toggleModal } = useModal();
</script>