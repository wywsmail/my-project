<template>
  <component
    :is="tag"
    :type="buttonType"
    :to="to"
    class="btn text-white bg-violet-500 hover:bg-violet-600 focus:ring-violet-500"
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
