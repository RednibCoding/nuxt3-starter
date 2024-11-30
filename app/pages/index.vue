<script setup lang="ts">
  const { setLocale } = useI18n();
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800"
  >
    <!-- Language Selector -->
    <div class="mb-6 flex gap-4">
      <button
        @click="setLocale('en')"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        English
      </button>
      <button
        @click="setLocale('de')"
        class="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
      >
        Deutsch
      </button>
    </div>

    <!-- Translated Text -->
    <p class="text-lg font-semibold">
      {{ $t("welcome") }}
    </p>
  </div>
</template>
