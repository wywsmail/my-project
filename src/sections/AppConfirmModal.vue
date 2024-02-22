<template>
  <div>
    <ConfirmModal v-model="showModal" :title="confirmTitle"></ConfirmModal>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useConfirmModal } from "@/composables/useConfirmModal";
// const { useConfirmModal, useConfirm } = useConfirmModal();
const { ...useConfirmModal } = useConfirmModal();
// const showModal = ref(true);
// const confirmTitle = ref("");
// const openModal = (value) => {
//   console.log(value);
//   showModal.value = value;
// };
</script>
