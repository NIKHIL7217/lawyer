<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">Testimonials</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">What Our Clients Say</h1>
        <p class="text-lg text-slate-200 leading-8">Trusted by clients for professionalism, clarity, and exceptional legal outcomes.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in testimonials" :key="item.name" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <p class="text-4xl text-[#b9923f] mb-3">“</p>
        <p class="text-slate-600 leading-8 mb-5">{{ item.text }}</p>
        <h4 class="font-bold">{{ item.name }}</h4>
        <p class="text-sm text-slate-500">{{ item.role }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const testimonials = [
  { name: 'Amit Khanna', role: 'Business Owner', text: 'Their legal expertise and business understanding helped us navigate a complex corporate matter with confidence.' },
  { name: 'Priya Malhotra', role: 'Private Client', text: 'Professional, responsive, and highly supportive throughout a sensitive family legal matter.' },
  { name: 'Rohit Sethi', role: 'Entrepreneur', text: 'A dependable legal team that delivers strategic advice and strong representation.' },
]
</script>
