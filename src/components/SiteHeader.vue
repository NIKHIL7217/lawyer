<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-[#0d2a52] text-white flex items-center justify-center text-xl shadow-sm">⚖️</div>
        <div>
          <h1 class="font-bold text-lg tracking-wide">Ajay Singh Yaduvanshi</h1>
          <p class="text-xs text-slate-500">Trusted Legal Counsel</p>
        </div>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <router-link
          v-for="item in navItems"
          :key="item.label"
          active-class="text-[#b9923f] font-semibold"
          class="hover:text-[#b9923f] transition"
          :to="item.to"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Mobile Hamburger -->
      <div class="md:hidden flex items-center">
        <button @click="menuOpen = !menuOpen" aria-label="Open menu" class="p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#b9923f]">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Dropdown Menu -->
        <transition name="fade">
          <div v-if="menuOpen" class="absolute top-20 right-6 bg-white rounded-xl shadow-lg py-4 px-6 flex flex-col gap-4 z-50 min-w-[180px] border border-slate-200">
            <router-link
              v-for="item in navItems"
              :key="item.label"
              active-class="text-[#b9923f] font-semibold"
              class="hover:text-[#b9923f] transition"
              :to="item.to"
              @click="menuOpen = false"
            >
              {{ item.label }}
            </router-link>
            <router-link
              class="bg-[#b9923f] hover:bg-[#a88435] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition text-center"
              to="/contact"
              @click="menuOpen = false"
            >
              Book Consultation
            </router-link>
          </div>
        </transition>
      </div>

      <!-- Desktop Book Button -->
      <router-link
        class="hidden md:inline-block bg-[#b9923f] hover:bg-[#a88435] text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-sm transition"
        to="/contact"
      >
        Book Consultation
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Team', to: '/team' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
