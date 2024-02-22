<template>
  <component
    :is="tag"
    :type="buttonType"
    :to="to"
    class="btn text-white bg-red-500 hover:bg-red-600 focus:ring-red-500"
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
