<template>
  <section class="max-w-7xl mx-auto px-6 py-10">
    <h3 class="text-3xl font-bold text-center mb-10">{{ t('practice.title') }}</h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="item in practiceAreas" :key="item.title" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
        <div class="text-4xl mb-4">{{ item.icon }}</div>
        <h4 class="font-bold text-xl mb-2">{{ item.title }}</h4>
        <p class="text-slate-600 text-sm leading-6">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()

  function t (key) {
    const keys = key.split('.')
    let value = translations[lang.value]
    for (const k of keys) value = value[k]
    return value
  }

  const practiceAreas = computed(() => t('practice.areas'))
</script>
