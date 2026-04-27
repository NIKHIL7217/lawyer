<template>
  <div class="min-h-screen bg-[#f5f7fb] text-slate-900 font-sans">
    <SiteHeader />

    <main>
      <HeroSection />
      <PracticeAreas />
      <TeamSection />
      <TestimonialsSection />
      <InsightsSection />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
  import HeroSection from '@/components/HeroSection.vue'
  import InsightsSection from '@/components/InsightsSection.vue'
  import PracticeAreas from '@/components/PracticeAreas.vue'
  import SiteFooter from '@/components/SiteFooter.vue'
  import SiteHeader from '@/components/SiteHeader.vue'
  import TeamSection from '@/components/TeamSection.vue'
  import TestimonialsSection from '@/components/TestimonialsSection.vue'
</script>
