<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import HeroiconsOutlineHome from "~icons/heroicons-outline/home";
import HeroiconsOutlineDocumentText from "~icons/heroicons-outline/document-text";
import HeroiconsOutlineUser from "~icons/heroicons-outline/user";

const route = useRoute();
const router = useRouter();
const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
const menuItems = [
  { to: "/", text: "首頁", icon: HeroiconsOutlineHome },
  { to: "/posts", text: "文章", icon: HeroiconsOutlineDocumentText },
  { to: "/setting", text: "個人資料", icon: HeroiconsOutlineUser },
];
const userMenuItems = [
  { tag: "RouterLink", to: "/setting", text: "個人資料" },
  {
    tag: "button",
    text: "登出",
    mobile: true,
    onClick: () => {
      router.push("/login");
    },
  },
];

const activeItem = computed(() =>
  [...menuItems].reverse().find((item) => route.path.startsWith(item.to))
);
const isActive = (to) => to === activeItem.value.to;
</script>

<template>
  <div class="flex flex-col sm:flex-row min-h-screen">
    <!-- 左側選單 -->
    <div
      class="flex flex-col justify-between flex-shrink-0 w-full sm:w-64 bg-violet-600 text-white"
    >
      <!-- Logo -->
      <div
        class="h-16 flex justify-between items-center px-4 sm:justify-center"
      >
        <div class="flex justify-center items-center">
          <heroicons-outline-book-open class="w-10 h-10" />
          <span class="text-xl font-medium mr-2">AlecPress</span>
        </div>
        <button
          type="button"
          class="sm:hidden w-8 h-8 flex justify-center items-center"
          @click="toggleMenu"
        >
          <heroicons-outline-menu class="w-5 h-5" />
        </button>
      </div>

      <div
        class="flex-grow sm:flex sm:flex-col sm:justify-between"
        :class="showMenu ? '' : 'hidden'"
      >
        <!-- 主要選單 -->
        <ul>
          <li v-for="item in menuItems" :key="item.to">
            <RouterLink
              :to="item.to"
              class="flex items-center px-4 sm:px-5 py-3"
              :class="
                isActive(item.to) ? '' : 'text-violet-400 hover:text-white'
              "
            >
              <!-- <heroicons-outline-home
                v-if="item.icon === 'heroicons-outline-home'"
                class="w-4 h-4 mr-2"
              />
              <heroicons-outline-document-text
                v-if="item.icon === 'heroicons-outline-document-text'"
                class="w-4 h-4 mr-2"
              />
              <heroicons-outline-user
                v-if="item.icon === 'heroicons-outline-user'"
                class="w-4 h-4 mr-2"
              /> -->
              <component :is="item.icon" class="w-4 h-4 mr-2" />
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>

        <!-- 用戶名稱區塊-手機-->
        <div class="mt-2 py-1 sm:hidden border-t border-violet-400">
          <div class="flex items-center px-4 py-3">
            <img
              class="w-8 h-8 rounded-full mr-2"
              src="@/assets/179683942.jpg"
              alt=""
            />
            <div class="font-medium tracking-wide">Alec彥文</div>
          </div>
        </div>

        <!-- 用戶名稱區塊-電腦-->
        <div
          class="hidden sm:flex sm:justify-between sm:items-center px-5 py-4 border-t border-violet-400"
        >
          <div class="flex items-center">
            <img
              class="w-8 h-8 rounded-full mr-2"
              src="@/assets/179683942.jpg"
              alt=""
            />
            <div class="font-medium tracking-wide">Alec彥文</div>
          </div>

          <Menu as="div" class="relative">
            <!-- <MenuButton as="button">More</MenuButton> -->
            <MenuButton
              as="button"
              class="flex justify-center items-center w-7 h-7 hover:bg-violet-500 rounded transition-colors duration-10000"
              type="button"
            >
              <heroicons-outline-dots-vertical class="w-4 h-4" />
            </MenuButton>
            <MenuItems
              class="absolute left-full bottom-0 ml-2 bg-white rounded-md shadow-lg text-violet-600"
            >
              <MenuItem
                v-slot="{ active }"
                v-for="item in userMenuItems"
                :key="item.text"
              >
                <!-- <a :class="{ 'bg-blue-500': active }" href="/account-settings">
                  Account settings
                </a> -->
                <RouterLink to="/setting">個人資料</RouterLink>
                <!-- <component
                  :is="item.tag"
                  :to="item.to"
                  class="px-3 py-2 text-gray-700 text-left text-base font-normal"
                  :class="active ? 'bg-gray-100' : ''"
                  @click="item.onClick"
                ></component> -->
              </MenuItem>
              <!-- <MenuItem v-slot="{ active }">
                <a :class="{ 'bg-blue-500': active }" href="/account-settings">
                  Documentation
                </a>
              </MenuItem> -->
              <!-- <MenuItem disabled>
                <span class="opacity-75">Invite a friend (coming soon!)</span>
              </MenuItem> -->
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
    <!-- 右側內容 -->
    <div class="flex-grow min-w-0">
      <div class="overflow-x-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
