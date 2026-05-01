<template>
  <section class="max-w-7xl mx-auto px-6 py-14">
    <h3 class="text-3xl font-bold text-center mb-10">{{ t('title') }}</h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="member in members" :key="member.name" class="bg-white rounded-3xl p-6 text-center border border-slate-200 shadow-sm">
        <img class="w-28 h-28 rounded-full mx-auto object-cover mb-4" :src="member.image">
        <h4 class="font-bold text-lg">{{ member.name }}</h4>
        <p class="text-sm text-[#b9923f] font-medium mb-3">{{ member.role }}</p>
        <p class="text-slate-600 text-sm leading-7">{{ member.bio }}</p>
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
    return translations[lang.value].team[key]
  }
  const members = computed(() => translations[lang.value].team.members)
</script>
