<template>
  <ConfirmModal
    v-model="showModal"
    :title="confirmTitle"
    @success="handleSuccess"
    @cancel="handleCancel"
  ></ConfirmModal>
</template>

<script setup>
import { useConfirmModal } from "@/composables/useConfirmModal";
// const { useConfirmModal, useConfirm } = useConfirmModal();
// const { ...useConfirmModal } = useConfirmModal();
const { showModal, confirmTitle, handleSuccess, handleCancel } =
  useConfirmModal();
// const showModal = ref(false);
// const confirmTitle = ref("");
// const openModal = (value) => {
//   console.log(value);
//   showModal.value = value;
// };
</script>
