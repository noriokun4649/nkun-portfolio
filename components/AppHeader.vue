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
</script>
<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-2xl font-header" href="/"> nkun.dev </a>
      </div>
      <ClientOnly>
        <Icon
        :name="isDark ? 'ic:baseline-light-mode' : 'ic:baseline-dark-mode'"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
        size="32px"/>
      </ClientOnly>
    </div>
  </header>
</template>
