<template>
  <div v-if="works?.contents.length" class="flex justify-center">
    <div class="grid md:grid-cols-2 xl:grid-cols-4 wqhd:grid-cols-8 gap-10 m-10">
      <div v-for="work in works?.contents" :key="work.id">
        <CardItem :work="work" />
      </div>
    </div>
  </div>
  <NoContents v-else />
</template>

<script setup lang="ts">
import type { Work } from "../assets/ts/Types"

const { data: works } = await useMicroCMSGetList<Work>({
  endpoint: "work",
  queries: { limit: 30, orders: "system:default" },
})
</script>
