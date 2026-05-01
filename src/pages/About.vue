<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <!-- Hero -->
    <section class="bg-[#0d2a52] text-white py-24">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">{{ t('heroTag') }}</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6" :class="lineHeightClass">{{ t('heroTitle') }}</h1>

        <p class="max-w-3xl mx-auto text-lg text-slate-200 leading-8" :class="lineHeightClass">
          {{ t('heroDesc') }}
        </p>
      </div>
    </section>

    <!-- About Intro -->
    <section class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('introTag') }}</p>
        <h2 class="text-4xl font-bold mb-6 leading-tight" :class="lineHeightClass">{{ t('introTitle') }}</h2>
        <p class="text-slate-600 leading-8 mb-5" :class="lineHeightClass">{{ t('introP1') }}</p>
        <p class="text-slate-600 leading-8" :class="lineHeightClass">{{ t('introP2') }}</p>
      </div>

      <div class="h-125 rounded-3xl bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
    </section>

    <!-- Mission Vision -->
    <section class="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('missionTag') }}</p>
        <h3 class="text-2xl font-bold mb-4" :class="lineHeightClass">{{ t('missionTitle') }}</h3>
        <p class="text-slate-600 leading-8" :class="lineHeightClass">{{ t('missionDesc') }}</p>
      </div>

      <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('visionTag') }}</p>
        <h3 class="text-2xl font-bold mb-4" :class="lineHeightClass">{{ t('visionTitle') }}</h3>
        <p class="text-slate-600 leading-8" :class="lineHeightClass">{{ t('visionDesc') }}</p>
      </div>
    </section>

    <!-- Values -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('valuesTag') }}</p>
        <h2 class="text-4xl font-bold" :class="lineHeightClass">{{ t('valuesTitle') }}</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in values" :key="item.title" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h4 class="font-bold text-xl mb-3" :class="lineHeightClass">{{ item.title }}</h4>
          <p class="text-slate-600 leading-7" :class="lineHeightClass">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Commitment -->
    <section class="bg-white py-20 border-y border-slate-200">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('commitmentTag') }}</p>
        <h2 class="text-4xl font-bold mb-6" :class="lineHeightClass">{{ t('commitmentTitle') }}</h2>
        <p class="text-slate-600 text-lg leading-8" :class="lineHeightClass">{{ t('commitmentDesc') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()

  const aboutPage = computed(() => translations[lang.value].aboutPage)
  const t = key => aboutPage.value[key]
  const values = computed(() => aboutPage.value.values)
  // Set your own line height class here, or use a hardcoded value per page/language
  const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-10' : 'leading-7')
</script>
