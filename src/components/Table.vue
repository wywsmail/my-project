<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="border-b border-gray-200">
          <th class="px-5 py-3 text-left"><input type="checkbox" /></th>
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-5 py-3 text-left text-sm text-gray-400 font-medium trackong-wider whitespace-nowrap"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in data" :key="record.id">
          <td class="pl-5 py-3"><input type="checkbox" /></td>
          <td
            class="px-5 py-3 text-gray-600 whitespace-nowrap"
            v-for="column in columns"
            :key="column.key"
          >
            <slot
              :name="`column-${column.key}`"
              :column="column"
              :record="record"
              :value="record[column.key]"
            ></slot>
            {{ record[column.key] }}
          </td>
          <!-- <td class="px-5 py-3 text-gray-600 whitespace-nowrap">
            <RouterLink to="/posts/1" class="link font-normal"
              >我的文章{{ i }}</RouterLink
            >
          </td> -->
          <!-- <td class="px-5 py-3 text-gray-600 font-normal whitespace-nowrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            vel?
          </td> -->
          <!-- <td class="px-5 py-3 text-gray-600 font-normal whitespace-nowrap">
            <heroicons-outline-eye class="inline-block w-4 h-4" />123次
          </td> -->
          <!-- <td class="px-5 py-3 text-gray-600 font-normal whitespace-nowrap">
            2024/03/13
          </td> -->
          <!-- <td class="px-5 py-3 text-gray-600 font-normal whitespace-nowrap">
            <span class="inline-flex space-x-2"
              ><span
                class="px-2 py-0.5 bg-violet-600 rounded-full text-white text-sm font-normal tracking-wide"
                >標籤一</span
              ><span
                class="px-2 py-0.5 bg-violet-600 rounded-full text-white text-sm font-normal tracking-wide"
                >標籤二</span
              ></span
            >
          </td> -->
          <td class="px-5 py-3 text-gray-600 font-normal whitespace-nowrap">
            <RouterLink
              to="/posts"
              class="inline-flex justify-center items-center w-8 h-8 text-gray-400 hover:text-red-600 transition-colors"
              ><heroicons-outline-pencil-alt class="" /></RouterLink
            ><button
              type="button"
              class="inline-flex justify-center items-center w-8 h-8 text-gray-400 hover:text-red-600 transition-colors"
            >
              <heroicons-outline-trash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: { type: Array, required: true },
  data: { type: Array, required: true },
});
</script>
