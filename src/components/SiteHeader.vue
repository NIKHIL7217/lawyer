<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-[#0d2a52] text-white flex items-center justify-center text-xl shadow-sm">⚖️</div>

        <div>
          <h1 class="font-bold text-lg tracking-wide">Sharma & Associates</h1>
          <p class="text-xs text-slate-500">Trusted Legal Counsel</p>
        </div>
      </div>

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

      <button class="bg-[#b9923f] hover:bg-[#a88435] text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-sm transition">
        Book Consultation
      </button>
    </div>
  </header>
</template>

<script setup>
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Practice Areas', to: '/practice-areas' },
    { label: 'Team', to: '/team' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
  ]
</script>
