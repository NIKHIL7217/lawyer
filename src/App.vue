<template>
  <div class="min-h-screen bg-[#f5f7fb] text-slate-900 font-sans">
    <SiteHeader />
    <router-view />
    <SiteFooter />
    <WhatsappButton />
  </div>
</template>

<script setup>
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import WhatsappButton from '@/components/WhatsappButton.vue'
import { provideLanguage } from '@/composables/language'

provideLanguage()
</script>
