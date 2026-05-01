<script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()
  const router = useRouter()

  function t (key) {
    const keys = key.split('.')
    let value = translations[lang.value].hero
    for (const k of keys) value = value[k]
    return value
  }
  // Set your own line height class here, or use a hardcoded value per language
  const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-17' : 'leading-17')
  const lineHeightDesc = computed(() => lang.value === 'hi' ? 'leading-7' : 'leading-6')

  function goToServices () {
    router.push('/practice-areas')
  }
  function goToTeam () {
    router.push('/team')
  }
</script>
<template>
  <section class="max-w-7xl mx-auto px-6 pt-8 pb-16">
    <div class="grid lg:grid-cols-2 gap-8 items-center bg-linear-to-r from-[#0d2a52] to-[#163b6e] rounded-3xl overflow-hidden shadow-xl">
      <div class="p-10 lg:p-14 text-white">
        <p class="uppercase tracking-widest text-xs text-[#d7bc7a] mb-4">{{ t('tagline') }}</p>
        <h2 :class="['text-4xl lg:text-6xl font-bold mb-5', lineHeightClass]">{{ t('headline') }}</h2>
        <p class="text-slate-200 text-lg mb-8 max-w-xl" :class="lineHeightDesc">{{ t('desc') }}</p>

        <div class="flex gap-4">
          <button class="bg-[#b9923f] px-6 py-3 rounded-2xl font-semibold" @click="goToServices">{{ t('services') }}</button>
          <button class="border border-white/30 px-6 py-3 rounded-2xl font-semibold" @click="goToTeam">{{ t('team') }}</button>
        </div>
      </div>

      <div class="flex justify-center items-center h-full w-full p-4">
        <img
          alt="Lawyer hero section image"
          class="w-full max-w-xl h-auto rounded-2xl shadow-lg object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
          src="/src/assets/photo/image.png"
        >
      </div>
    </div>
  </section>
</template>
