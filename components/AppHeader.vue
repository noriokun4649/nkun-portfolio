<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === "dark"
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
  },
})
const links = [
  {
    text: "Work",
    icon: "i-heroicons-sparkles-solid",
    link: "/work",
  },
  {
    text: "Link",
    icon: "i-heroicons-link-solid",
    link: "/link",
  },
  {
    text: "Contact",
    icon: "i-heroicons-envelope-open-solid",
    link: "/contact",
  },
]
</script>
<template>
  <header>
    <div class="navbar border-b-2">
      <div class="flex-1">
        <a class="btn btn-ghost text-2xl font-header" href="/">nkun.dev</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 text-lg">
          <li>
            <a href="/"><UIcon class="size-8" name="i-heroicons-home-solid" />Home</a>
          </li>
          <li v-for="item in links" class="hidden md:inline-block">
            <a :href="item.link"><UIcon class="size-8" :name="item.icon" />{{ item.text }}</a>
          </li>
          <li class="md:hidden inline-block">
            <details class="dropdown dropdown-end">
              <summary>
                <UIcon class="size-8" name="i-heroicons-ellipsis-horizontal-solid" />
              </summary>
              <ul class="p-2 shadow dropdown-content z-[1] bg-base-100 rounded-box">
                <li v-for="item in links">
                  <a :href="item.link"><UIcon class="size-8" :name="item.icon" />{{ item.text }}</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div class="w-8">
        <ClientOnly>
          <UIcon
            class="size-8"
            :name="isDark ? 'i-heroicons-sun-solid' : 'i-heroicons-moon-solid'"
            variant="ghost"
            aria-details="Theme"
            @click="isDark = !isDark"
          />
        </ClientOnly>
      </div>
    </div>
  </header>
</template>
