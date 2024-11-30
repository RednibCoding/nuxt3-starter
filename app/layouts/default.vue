<script setup lang="ts">
  useHead({
    title: "My Nuxt Project",
    meta: [
      { name: "description", content: "This is the decription of the page." },
      { name: "keywords", content: "html, css" },
      { property: "og:title", content: "My Nuxt Project" },
      {
        property: "og:description",
        content: "This is the decription of the page.",
      },
      { property: "og:type", content: "website" },
    ],
  });
</script>

<template>
  <main class="themeLight">
    <Header />
    <div class="bg-theme-page">
      <slot />
    </div>
  </main>
</template>

<style>
  @import "~/styles/theme.css";
</style>
