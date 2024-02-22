<template>
  <Layout>
    <div class="p-4">
      <DangerButton #click="deletePost">刪除</DangerButton>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from "vue";

const deletePost = () => {
  // useConfirm("確定要刪除嗎？").then(result => {
  //   if (result) {
  //     console.log("刪除");
  //   }
  // })
};

// const showModal = ref(false);
// const openModal = (value) => {
//   console.log(value);
//   showModal.value = value;
// };
</script>
