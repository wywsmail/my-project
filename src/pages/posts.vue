<template>
  <Layout>
    <!-- <div class="flex justify-between items-center">
      <h1 class="text-3xl font-semibold tracking-wider text-gray-900">文章</h1>
      <div>
        <PrimaryButton to="/posts">新增</PrimaryButton>
      </div>
    </div> -->
    <PageHeader>
      <template #title>文章</template>
      <template #action>
        <PrimaryButton to="/posts">新增</PrimaryButton>
      </template>
    </PageHeader>
    <Card class="mt-6" stretch>
      <Table :columns="columns" :data="data">
        <template #column-title="{ record, value }">
          <RouterLink :to="`/posts/${record.id}`" class="link font-normal">{{
            value
          }}</RouterLink>
        </template>
        <template #column-visits="{ value }"
          ><heroicons-outline-eye class="inline-block w-4 h-4" />{{
            value
          }}次</template
        >
        <template #column-tags="{ value }"
          ><span class="inline-flex space-x-2"
            ><span
              v-for="tag in value"
              :key="tag"
              class="px-2 py-0.5 bg-violet-600 rounded-full text-white text-sm font-normal tracking-wide"
              >{{ tag }}</span
            ></span
          ></template
        >
      </Table>
    </Card>
  </Layout>
</template>

<script setup>
import { ref } from "vue";
const columns = ref([
  { label: "標題", key: "title" },
  { label: "簡介", key: "description" },
  { label: "瀏覽次數", key: "visits" },
  { label: "建立日期", key: "created_at" },
  { label: "標籤", key: "tags" },
]);
const data = ref([
  {
    id: 1,
    title: "我的文章1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel?",
    visits: 123,
    created_at: "2024/03/13",
    tags: ["標籤一", "標籤二"],
  },
  {
    id: 2,
    title: "我的文章2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel?",
    visits: 123,
    created_at: "2024/03/13",
    tags: ["標籤一", "標籤二"],
  },
  {
    id: 3,
    title: "我的文章3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel?",
    visits: 123,
    created_at: "2024/03/13",
    tags: ["標籤一", "標籤二"],
  },
  {
    id: 4,
    title: "我的文章4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel?",
    visits: 123,
    created_at: "2024/03/13",
    tags: ["標籤一", "標籤二"],
  },
]);
</script>
