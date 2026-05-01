<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-[#0d2a52] text-white flex items-center justify-center text-xl shadow-sm">⚖️</div>

        <div>
          <h1 class="font-bold text-lg tracking-wide">{{ t('header.name') }}</h1>
          <p class="text-xs text-slate-500">{{ t('header.tagline') }}</p>
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

      <!-- Language Switcher -->
      <button
        class="mr-3 px-3 py-1 rounded-lg border border-slate-300 text-xs font-semibold hover:bg-slate-100 transition hidden md:inline-block"
        @click="toggleLang"
      >
        {{ lang === 'en' ? 'हिंदी' : 'English' }}
      </button>

      <!-- Mobile Hamburger -->
      <div class="md:hidden flex items-center">
        <button aria-label="Open menu" class="p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#b9923f]" @click="menuOpen = !menuOpen">
          <svg
            v-if="!menuOpen"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>

          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </button>
        <!-- Dropdown Menu -->
        <button
          class="mb-2 px-3 py-1 rounded-lg border border-slate-300 text-xs font-semibold hover:bg-slate-100 transition w-full text-left"
          @click="toggleLang"
        >
          {{ lang === 'en' ? 'हिंदी' : 'English' }}
        </button>

        <transition name="fade">
          <div v-if="menuOpen" ref="menuRef" class="absolute top-20 right-6 bg-white rounded-xl shadow-lg py-4 px-6 flex flex-col gap-4 z-50 min-w-45 border border-slate-200">
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
              {{ t('header.book') }}
            </router-link>
          </div>
        </transition>
      </div>

      <!-- Desktop Book Button -->
      <router-link
        class="hidden md:inline-block bg-[#b9923f] hover:bg-[#a88435] text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-sm transition"
        to="/contact"
      >
        {{ t('header.book') }}
      </router-link>
    </div>
  </header>
</template>

<script setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const menuOpen = ref(false)
  const menuRef = ref(null)
  // Close menu when clicking outside
  function handleClickOutside (event) {
    if (menuOpen.value && menuRef.value && !menuRef.value.contains(event.target)) {
      menuOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
  const { lang, setLang } = useLanguage()
  const toggleLang = () => setLang(lang.value === 'en' ? 'hi' : 'en')
  function t (key) {
    const keys = key.split('.')
    let value = translations[lang.value]
    for (const k of keys) value = value[k]
    return value
  }
  const navItems = computed(() => t('header.nav'))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
