<template>
  <div class="card grid-item min-w-72 max-w-sm shadow-xl dark:shadow-gray-700">
    <figure v-if="work?.image">
      <img :src="work?.image.url + '?q=50&fit=fill&fill=blur&w=672&h=378'" alt="artwork" />
    </figure>
    <div class="card-body">
      <div class="flex flex-row gap-4">
        <NuxtLink
          v-for="genre in work?.genre"
          :key="genre"
          class="btn btn-outline btn-xs rounded-full"
          :to="'?tag=' + genre"
        >
          {{ genre }}
        </NuxtLink>
      </div>
      <h2 class="card-title">{{ work?.title }}</h2>
      <p class="whitespace-pre-wrap">
        {{ work?.description }}
    </p>
      <div>
        <div class="card-actions justify-between align-top mt-1 items-end">
          <div class="flex flex-row gap-4">
            <a
              :href="work?.link"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-sm"
              >{{ work?.linkname }}</a
            >
          </div>
          <label v-if="work?.date">{{
            new Date(work?.date).toLocaleDateString("ja-JP").split("/").join(".")
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Work } from "~/assets/ts/Types"

defineProps<{
  work?: Work
}>()
</script>
