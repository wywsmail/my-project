<template>
  <Modal v-model="isOpen" @cancel="handleCancel">
    <template #icon
      ><heroicons-outline-exclaimation-triangle
        class="mt-12 mx-auto w-12 h-12 text-red-600"
    /></template>
    <template #title
      ><DialogTitle
        as="h3"
        class="text-2xl text-center font-medium text-red-600 tracking-wider mt-2 mb-2"
        >{{ title }}
      </DialogTitle>
    </template>
    <template #footer>
      <div class="grid grid-cols-2 gap-4">
        <SecondaryButton class="w-full py-1.5" @click="handleCancel">
          取消
        </SecondaryButton>
        <DangerButton class="w-full py-1.5" @click="handleSuccess">
          確定
        </DangerButton>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { useVModel } from "@vueuse/core";

const emit = defineEmits(["update:model-value"], ["success"], ["cancel"]);

const props = defineProps({
  modelValue: Boolean,
  title: { type: String, default: "確定要刪除嗎？" },
});

const isOpen = useVModel(props);

const openModal = () => {
  // emit("update:model-value", true);
  isOpen.value = true;
};

const closeModal = () => {
  // emit("update:model-value", false);
  isOpen.value = false;
};

const handleSuccess = () => {
  emit("success");
  closeModal();
};
const handleCancel = () => {
  emit("cancel");
  closeModal();
};
</script>
