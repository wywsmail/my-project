<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="handleCancel" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-700/20" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
            >
              <div class="px-6 py-4">
                <slot name="icon"></slot>
                <slot name="title"> </slot>

                <slot name="content"></slot>
              </div>

              <div class="p-6">
                <slot name="footer"
                  ><PrimaryButton
                    class="w-full py-1.5"
                    @click="handleSuccess"
                  ></PrimaryButton
                ></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { useVModel } from "@vueuse/core";

const emit = defineEmits(["update:model-value"], ["success"], ["cancel"]);

const props = defineProps({
  modelValue: Boolean,
  title: String,
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
