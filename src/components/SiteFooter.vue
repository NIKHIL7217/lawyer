<script setup>
  import { computed } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()
  function t (key) {
    const keys = key.split('.')
    let value = translations[lang.value]
    for (const k of keys) value = value[k]
    return value
  }
  const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-8' : 'leading-7')
  const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="bg-[#0d2a52] text-white mt-16">
    <div class="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
      <div>
        <h4 class="font-bold text-lg mb-4">{{ t('footer.contactInfo') }}</h4>
        <p :class="['text-sm text-slate-300', lineHeightClass]">123 Legal Tower, New Delhi<br>+91 90000 00000<br>hello@sharmafirm.com</p>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-4">{{ t('footer.quickLinks') }}</h4>

        <ul class="space-y-2 text-sm text-slate-300">
          <li><router-link class="hover:text-[#b9923f]" to="/">{{ t('footer.home') }}</router-link></li>
          <li><router-link class="hover:text-[#b9923f]" to="/about">{{ t('footer.about') }}</router-link></li>
          <li><router-link class="hover:text-[#b9923f]" to="/practice-areas">{{ t('footer.practiceAreas') }}</router-link></li>
          <li><router-link class="hover:text-[#b9923f]" to="/careers">{{ t('footer.careers') }}</router-link></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-4">{{ t('footer.followUs') }}</h4>

        <div class="flex gap-3 text-xl">
          <a
            aria-label="Facebook"
            class="hover:text-[#b9923f]"
            href="https://facebook.com"
            rel="noopener"
            target="_blank"
          >
            <svg
              fill="currentColor"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>

          <a
            aria-label="Instagram"
            class="hover:text-[#b9923f]"
            href="https://instagram.com"
            rel="noopener"
            target="_blank"
          >
            <svg
              fill="currentColor"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.449.425 20.276.131 19 .072 17.72.013 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>

          <a
            aria-label="LinkedIn"
            class="hover:text-[#b9923f]"
            href="https://linkedin.com"
            rel="noopener"
            target="_blank"
          >
            <svg
              fill="currentColor"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- <div>
        <h4 class="font-bold text-lg mb-4">Newsletter Signup</h4>
        <input class="w-full px-4 py-3 rounded-xl text-slate-900 mb-3 bg-[#ffffff] text-center" placeholder="Enter your email">
        <button class="w-full bg-[#0b1639] py-3 rounded-xl font-semibold">Subscribe</button>
      </div> -->
    </div>

    <div class="border-t border-white/10 py-5 text-center text-sm text-slate-400">© {{ currentYear }} Ajay Singh Yaduvanshi. All rights reserved.</div>
  </footer>
</template>
