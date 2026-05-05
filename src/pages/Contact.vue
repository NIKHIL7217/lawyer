<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase font-bold tracking-widest text-sm text-[#d7bc7a] mb-4">{{ t('heroTag') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-6" :class="lineHeightTitle">{{ t('heroTitle') }}</h1>
        <p class="text-lg text-slate-200 leading-8" :class="lineHeightClass">{{ t('heroDesc') }}</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
      <!-- Left: Contact Form -->
      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <h3 class="text-2xl font-bold mb-6" :class="lineHeightClass">{{ t('formTitle') }}</h3>

        <form class="space-y-5" @submit.prevent="submitForm">
          <input
            v-model="form.name"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300"
            :placeholder="t('name')"
            required
            type="text"
          >

          <input
            v-model="form.email"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300"
            :placeholder="t('email')"
            required
            type="email"
          >

          <input
            v-model="form.subject"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300"
            :placeholder="t('subject')"
            required
            type="text"
          >

          <textarea
            v-model="form.message"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300 min-h-30 resize-y"
            :placeholder="t('message')"
            required
          />

          <button
            class="w-full bg-[#0d2a52] hover:bg-[#143a6b] text-white font-semibold py-4 rounded-2xl transition disabled:opacity-60"
            :disabled="loading"
            type="submit"
          >
            {{ loading ? t('sending') : t('book') }}
          </button>

          <div v-if="success" class="text-green-600 font-semibold text-center mt-2">{{ t('success') }}</div>
        </form>
      </div>
      <!-- Right: Office Hours & Map -->
      <div class="flex flex-col gap-6">
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 class="text-2xl font-bold mb-4" :class="lineHeightClass">{{ t('officeHours') }}</h3>
          <p class="text-slate-600" :class="lineHeightClass">{{ t('hours1') }}</p>
          <p class="text-slate-600" :class="lineHeightClass">{{ t('hours2') }}</p>
          <p class="text-slate-600" :class="lineHeightClass">{{ t('hours3') }}</p>
        </div>

        <iframe
          allowfullscreen=""
          class="bg-white rounded-3xl"
          height="320"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d354.67281325343356!2d75.742998668203!3d26.840348095589242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1777351159986!5m2!1sen!2sin"
          style="border:0;"
          width="460"
        />
      </div>
    </section>
  </div>
</template>

    <script setup>
  import { computed, ref } from 'vue'
  import { useLanguage } from '@/composables/language'
  import { translations } from '@/locales'
  const { lang } = useLanguage()
  const t = key => translations[lang.value].contact[key]
  // Set your own line height class here, or use a hardcoded value per page/language
  const lineHeightClass = computed(() => lang.value === 'hi' ? 'leading-10' : 'leading-7')
  const lineHeightTitle = computed(() => lang.value === 'hi' ? 'leading-14' : 'leading-10')

  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const loading = ref(false)
  const success = ref(false)

  async function submitForm () {
    loading.value = true
    success.value = false
    try {
      // Replace the Formspree endpoint below with your own or backend endpoint
      const res = await fetch('https://formspree.io/f/xqkrzqzv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.value.name,
          email: form.value.email,
          subject: form.value.subject,
          message: form.value.message,
        }),
      })
      if (res.ok) {
        success.value = true
        form.value = { name: '', email: '', subject: '', message: '' }
      }
    } catch {
      // Optionally handle error
    }
    loading.value = false
  }
    </script>
