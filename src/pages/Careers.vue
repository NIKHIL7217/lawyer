<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <!-- Hero -->
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase font-bold tracking-widest text-sm text-[#d7bc7a] mb-4">{{ t('heroTag') }}</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6" :class="lineHeightClass">{{ t('heroTitle') }}</h1>
        <p class="text-lg text-slate-200 leading-8" :class="lineHeightPara">{{ t('heroDesc') }}</p>
      </div>
    </section>

    <!-- Intro -->
    <section class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('introTag') }}</p>
        <h2 class="text-4xl font-bold mb-6 leading-tight" :class="lineHeightClass">{{ t('introTitle') }}</h2>
        <p class="text-slate-600 leading-8 mb-5" :class="lineHeightPara1">{{ t('introP1') }}</p>
        <p class="text-slate-600 leading-8" :class="lineHeightPara1">{{ t('introP2') }}</p>
      </div>

      <div class="h-160 rounded-3xl bg-[url('@/assets/photo/image4.png')] bg-cover bg-center shadow-xl" />
    </section>

    <!-- Benefits -->
    <section class="max-w-7xl mx-auto px-6 py-10">
      <div class="text-center mb-12">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('benefitsTag') }}</p>
        <h2 class="text-4xl font-bold" :class="lineHeightClass">{{ t('benefitsTitle') }}</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in benefits" :key="item.title" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h4 class="font-bold text-xl mb-3" :class="lineHeightPara">{{ item.title }}</h4>
          <p class="text-slate-600 leading-7" :class="lineHeightPara1">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Open Roles -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('openTag') }}</p>
        <h2 class="text-4xl font-bold" :class="lineHeightClass">{{ t('openTitle') }}</h2>
      </div>

      <div class="space-y-6">
        <div v-for="job in jobs" :key="job.title" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 class="text-2xl font-bold mb-2" :class="lineHeightClass">{{ job.title }}</h3>
            <p class="text-slate-600">{{ job.type }} • {{ job.location }}</p>
          </div>

          <button class="bg-[#b9923f] text-white px-6 py-3 rounded-2xl font-semibold">{{ t('applyNow') }}</button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white border-y border-slate-200 py-20">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">{{ t('ctaTag') }}</p>
        <h2 class="text-4xl font-bold mb-6" :class="lineHeightClass">{{ t('ctaTitle') }}</h2>
        <p class="text-slate-600 text-lg leading-8 mb-8" :class="lineHeightClass">{{ t('ctaDesc') }}</p>
        <button class="bg-[#0d2a52] text-white px-8 py-4 rounded-2xl font-semibold">{{ t('sendApplication') }}</button>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()

  const careersPage = computed(() => translations[lang.value].careersPage)
  const t = key => careersPage.value[key]
  const benefits = computed(() => careersPage.value.benefits)
  const jobs = computed(() => careersPage.value.jobs)
  // Set your own line height class here, or use a hardcoded value per page/language
  const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-19' : 'leading-18')
  const lineHeightPara = computed(() => lang.value === 'hi' ? 'leading-8' : 'leading-8')
  const lineHeightPara1 = computed(() => lang.value === 'hi' ? 'leading-7' : 'leading-7')
</script>
