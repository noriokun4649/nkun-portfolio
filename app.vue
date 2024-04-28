<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
      <div class="h-screen w-screen flex justify-center items-center flex-grow">
        <div class="flex items-center gap-x-6">
          <img class="h-48 w-48 rounded-full border" :src="profile.imageUrl" alt="" />
          <div>
            <h3 class="text-xl font-semibold leading-7 tracking-tight">{{ profile.name }}</h3>
            <p class="text-base font-semibold leading-6 text-indigo-600">{{ profile.role }}</p>
          </div>
        </div>
      </div>
    <AppFooter />
  </div>
</template>

<script setup>
const profile = {
    name: 'noriokun4649',
    role: '肉の塊が食べたい今日この頃',
    imageUrl:
      'https://avatars.githubusercontent.com/u/17977166',
  }
</script>