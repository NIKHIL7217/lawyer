<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase font-bold tracking-widest text-sm text-[#d7bc7a] mb-4">{{ t('heroTag') }}</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6" :class="lineHeightTitle">{{ t('heroTitle') }}</h1>
        <p class="text-lg text-slate-200 leading-8" :class="lineHeightClass">{{ t('heroDesc') }}</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in testimonials" :key="item.name" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <p class="text-4xl text-[#b9923f] mb-3">“</p>
        <p class="text-slate-600 leading-8 mb-5" :class="lineHeightClass">{{ item.text }}</p>
        <h4 class="font-bold" :class="lineHeightClass">{{ item.name }}</h4>
        <p class="text-sm text-slate-500" :class="lineHeightClass">{{ item.role }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()
  const testimonialsPage = computed(() => translations[lang.value].testimonialsPage)
  const t = key => testimonialsPage.value[key]
  const testimonials = computed(() => translations[lang.value].testimonials.items)
  // Set your own line height class here, or use a hardcoded value per page/language
  const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-10' : 'leading-7')
  const lineHeightTitle = computed(() => lang.value === 'hi' ? 'leading-12' : 'leading-9')
</script>
