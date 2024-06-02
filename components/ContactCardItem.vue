<template>
  <div class="flex items-center mt-3">
    <figure v-if="contact?.image">
      <NuxtImg
        class="rounded-full"
        provider="imgix"
        format="webp"
        sizes="30px"
        height="30px"
        width="30px"
        fit="contain"
        :modifiers="{ fill: 'blur' }"
        :src="contact?.image.url"
        alt="artwork"
        loading="lazy"
      />
    </figure>
    <UIcon v-else :name="contact?.icon" class="size-8 object-center" dynamic/>
    <div class="ms-3">
      <a
      v-if="contact?.link"
      :href="contact?.link"
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
      >{{ contact?.title }}</a>
      <p v-else>{{ contact?.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from "~/assets/ts/Types"

defineProps<{
  contact?: Contact
}>()
</script>
