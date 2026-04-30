<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">Contact Us</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Get in Touch With Our Legal Team</h1>
        <p class="text-lg text-slate-200 leading-8">Schedule a consultation or speak with our team for trusted legal guidance.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <h3 class="text-2xl font-bold mb-6">Send Us a Message</h3>

        <form class="space-y-5" @submit.prevent="submitForm">
          <input
            v-model="form.name"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300"
            placeholder="Your Name"
            required
            type="text"
          >

          <input
            v-model="form.email"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300"
            placeholder="Email Address"
            required
            type="email"
          >

          <input
            v-model="form.subject"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300"
            placeholder="Subject"
            required
            type="text"
          >

          <textarea
            v-model="form.message"
            class="w-full px-5 py-4 rounded-2xl border border-slate-300"
            placeholder="Your Message"
            required
            rows="5"
          />

          <button class="bg-[#b9923f] text-white px-6 py-4 rounded-2xl font-semibold" :disabled="loading">
            <span v-if="!loading">Book Consultation</span>
            <span v-else>Sending...</span>
          </button>
        </form>

        <div v-if="success" class="mt-6 text-green-600 font-semibold">Thank you! Your request has been sent. We will contact you soon.</div>
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 class="text-2xl font-bold mb-4">Contact Information</h3>
          <p class="text-slate-600 leading-8">123 Legal Tower, Connaught Place, New Delhi, India</p>
          <p class="text-slate-600">+91 90000 00000</p>
          <p class="text-slate-600">hello@sharmafirm.com</p>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 class="text-2xl font-bold mb-4">Office Hours</h3>
          <p class="text-slate-600">Monday - Friday: 9:00 AM – 7:00 PM</p>
          <p class="text-slate-600">Saturday: 10:00 AM – 4:00 PM</p>
          <p class="text-slate-600">Sunday: Closed</p>
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
  import { ref } from 'vue'

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
