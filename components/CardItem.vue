<template>
  <div class="card grid-item min-w-72 max-w-sm shadow-xl dark:shadow-gray-700">
    <figure v-if="work?.image">
      <NuxtImg
        provider="imgix"
        format="webp"
        sizes="md:300px wqhd:384px"
        height="191px"
        width="384px"
        fit="contain"
        :modifiers="{fill: 'blur' }"
        :src="work?.image.url"
        alt="artwork"
        loading="lazy"
      />
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
              v-if=work?.link
              :href="work?.link"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
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
