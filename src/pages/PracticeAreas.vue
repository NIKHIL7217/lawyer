<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">{{ t('heroTag') }}</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6" :class="lineHeightClass">{{ t('heroTitle') }}</h1>
        <p class="text-lg text-slate-200 leading-8" :class="lineHeightClass">{{ t('heroDesc') }}</p>
      </div>
    </section>
    <PracticeAreas />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/language'
import { translations } from '@/locales'
import PracticeAreas from '@/components/PracticeAreas.vue'
const { lang } = useLanguage()
const practiceAreasPage = computed(() => translations[lang.value].practiceAreasPage)
const t = (key) => practiceAreasPage.value[key]
// Set your own line height class here, or use a hardcoded value per page/language
const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-10' : 'leading-7')
</script>
