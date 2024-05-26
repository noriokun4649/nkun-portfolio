<template>
  <div class="flex h-screen w-screen justify-center items-center flex-grow">
    <div class="flex items-center gap-x-6">
      <NuxtImg
        class="rounded-full border"
        height="200px"                  
        width="200px"
        :src="profile.imageUrl"
        format="webp"
        alt="Profile icon"
      />
      <div>
        <h3 class="text-xl font-semibold leading-7 tracking-tight">{{ profile.name }}</h3>
        <p class="text-base font-semibold leading-6 text-indigo-600">{{ profile.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const profile = {
  name: "noriokun4649",
  role: "肉の塊が食べたい今日この頃",
  imageUrl: "../public/user-icon.jpg",
}
</script>
