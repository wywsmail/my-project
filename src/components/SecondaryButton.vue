<template>
  <component
    :is="tag"
    :type="buttonType"
    :to="to"
    class="btn border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:ring-violet-500"
  >
    <slot></slot>
  </component>
</template>
<script setup>
import useButton from "@/composables/useButton";
const props = defineProps({
  is: String,
  type: String,
  to: String,
});

const { tag, buttonType } = useButton(props);
</script>
