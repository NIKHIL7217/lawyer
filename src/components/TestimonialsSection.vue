<template>
  <section class="max-w-7xl mx-auto px-6 py-14">
    <h3 class="text-3xl font-bold text-center mb-10">{{ t('title') }}</h3>

    <div class="grid lg:grid-cols-3 gap-6">
      <div v-for="item in items" :key="item.name" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <p class="text-4xl text-[#b9923f] mb-3">“</p>
        <p class="text-slate-600 leading-7 mb-4">{{ item.text }}</p>
        <p class="font-semibold">{{ item.name }}</p>
        <p class="text-sm text-slate-500">{{ item.role }}</p>
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
    return translations[lang.value].testimonials[key]
  }
  const items = computed(() => translations[lang.value].testimonials.items)
</script>
