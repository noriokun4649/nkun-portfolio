<template>
  <div v-if="contacts?.contents.length" class="flex justify-center items-center flex-grow">
    <div class="gap-10 m-10">
      <div v-for="contact in contacts?.contents" :key="contact.id">
        <ContactCardItem :contact="contact" />
      </div>
    </div>
  </div>
  <NoContents v-else />
</template>

<script setup lang="ts">
import type { Contact } from "../assets/ts/Types"

const { data: contacts } = await useMicroCMSGetList<Contact>({
  endpoint: "contact",
  queries: { limit: 30, orders: "system:default" },
})
</script>
