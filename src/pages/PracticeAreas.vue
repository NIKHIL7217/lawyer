<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">Practice Areas</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Focused Legal Expertise</h1>
        <p class="text-lg text-slate-200 leading-8">Comprehensive legal services tailored to protect your interests and deliver strategic outcomes.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="area in areas" :key="area.title" class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div class="text-4xl mb-4">{{ area.icon }}</div>
        <h3 class="text-xl font-bold mb-3">{{ area.title }}</h3>
        <p class="text-slate-600 leading-7">{{ area.text }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
  const areas = [
    { title: 'Corporate Law', icon: '⚖️', text: 'Business structuring, contracts, compliance, mergers, and strategic corporate advisory.' },
    { title: 'Criminal Defense', icon: '🏛️', text: 'Strong legal defense with precision, discretion, and courtroom excellence.' },
    { title: 'Family Law', icon: '👨‍👩‍👧', text: 'Sensitive and strategic representation in family, custody, and matrimonial matters.' },
    { title: 'Real Estate Law', icon: '🏠', text: 'Property transactions, title disputes, leasing, and real estate compliance.' },
  ]
</script>
