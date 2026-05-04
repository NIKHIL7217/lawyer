<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase font-bold tracking-widest text-sm text-[#d7bc7a] mb-4">{{ t('heroTag') }}</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6" :class="lineHeightTitle">{{ t('heroTitle') }}</h1>
        <p class="text-lg text-slate-200 leading-8" :class="lineHeightClass">{{ t('heroDesc') }}</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="member in members" :key="member.name" class="bg-white rounded-3xl p-6 text-center border border-slate-200 shadow-sm">
        <img class="w-28 h-28 rounded-full mx-auto object-cover mb-4" :src="member.image">
        <h3 class="font-bold text-xl" :class="lineHeightClass">{{ member.name }}</h3>
        <p class="text-[#b9923f] font-medium mb-3" :class="lineHeightClass">{{ member.role }}</p>
        <p class="text-slate-600 text-sm leading-7" :class="lineHeightClass">{{ member.bio }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()
  const teamPage = computed(() => translations[lang.value].teamPage)
  const t = key => teamPage.value[key]
  const members = computed(() => translations[lang.value].team.members)
  // Set your own line height class here, or use a hardcoded value per page/language
  const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-9' : 'leading-7')
  const lineHeightTitle = computed(() => lang.value === 'hi' ? 'leading-14' : 'leading-9')
</script>
