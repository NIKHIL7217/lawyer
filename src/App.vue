<template>
  <div class="min-h-screen bg-[#f5f7fb] text-slate-900 font-sans">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup>
  import SiteFooter from '@/components/SiteFooter.vue'
  import SiteHeader from '@/components/SiteHeader.vue'
</script>
