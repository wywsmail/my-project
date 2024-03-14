<template>
  <Layout>
    <div class="p-4">
      <PrimaryButton @click="open">顯示</PrimaryButton>
    </div>
  </Layout>
</template>

<script setup>
import {
  notify,
  successNotify,
  warningNotify,
  errorNotify,
} from "@/composables/useNotification";
// import { notify } from "@kyvg/vue3-notification";

const open = () => {
  warningNotify("更新成功", "已經更新成功了");
  // console.log("open");
  // notify({
  //   // type: "success",
  //   title: "更新",
  //   text: "已經更新成功了",
  //   duration: 10000000,
  // });
};
</script>
