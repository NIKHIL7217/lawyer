<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">Practice Areas</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Focused Legal Expertise</h1>
        <p class="text-lg text-slate-200 leading-8">Comprehensive legal services tailored to protect your interests and deliver strategic outcomes.</p>
      </div>
    </section>

    <PracticeAreas />
  </div>
</template>

<script setup>
  import PracticeAreas from '@/components/PracticeAreas.vue'
</script>
