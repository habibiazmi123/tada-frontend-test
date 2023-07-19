<template>
    <div :class="`flex justify-center rounded-md items-center w-[104px] h-10 gap-2 ${handleStatusColorChanges()?.bg}`">
      <div :class="`w-2 h-2 rounded-full ${handleStatusColorChanges()?.dot}`"></div>
      <p :class="`capitalize md:text-xs ${handleStatusColorChanges()?.text}`">
          {{ status }}
      </p>
    </div>
</template>
<script setup>
const props = defineProps({
  status: String
})

const handleStatusColorChanges = () => {
  if (props.status === "paid") return {
    dot: "bg-paidStatus",
    bg: "bg-paidStatus/10",
    text: "text-paidStatus",
  };
  if (props.status === "draft") return {
    dot: "bg-navbarLight dark:bg-shadedTextDark",
    bg: "bg-navbarLight/10 dark:bg-shadedTextDark/10",
    text: "text-navbarLight dark:text-shadedTextDark",
  };
  if (props.status === "pending") return {
    dot: "bg-pendingStatus",
    bg: "bg-pendingStatus/10",
    text: "text-pendingStatus",
  };
}
</script>