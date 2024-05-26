<script setup></script>

<template>
  <footer class="footer footer-center p-5 bg-base-300 text-base-content rounded">
    <div class="footer">
      <nav class="text-left">
        <div class="avatar w-24">
          <NuxtImg
            class="rounded-full border"
            format="webp"
            height="100px"
            width="100px"
            src="../public/user-icon.jpg"
            alt="Profile icon"
            loading="lazy"
          />
        </div>
        <p class="text-xl font-header">nkun.dev</p>
      </nav>
      <nav>
        <header class="footer-title">Social</header>
        <div class="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com/noriokun_blog"
            aria-label="X link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UIcon class="size-12" name="i-simple-icons-x" />
          </a>
          <a
            href="https://github.com/noriokun4649"
            aria-label="GitHub link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UIcon class="size-12" name="i-simple-icons-github" size="48px" />
          </a>
          <a
            href="https://discord.com/invite/ZFydKhq4"
            aria-label="Discord link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UIcon class="size-12" name="i-simple-icons-discord" size="48px" />
          </a>
        </div>
      </nav>
    </div>
    <aside>
      <p>© 2024 noriokun4649</p>
    </aside>
  </footer>
</template>
