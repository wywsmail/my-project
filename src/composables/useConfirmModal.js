const showModal = ref(false);
const confirmTitle = ref("");
const handleSuccess = () => {};
const handleCancel = () => {};

export function useConfirmModal() {
  return { showModal, confirmTitle, handleSuccess, handleCancel };
}

export function useConfirm() {
  return {};
}
