<template>
  <section class="max-w-7xl mx-auto px-6 py-14">
    <h3 class="text-3xl font-bold text-center mb-10">Client Testimonials</h3>

    <div class="grid lg:grid-cols-3 gap-6">
      <div v-for="n in testimonials" :key="n" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <p class="text-4xl text-[#b9923f] mb-3">“</p>
        <p class="text-slate-600 leading-7 mb-4">Professional, responsive, and highly effective. Their strategic legal advice helped us resolve a complex matter with confidence.</p>
        <p class="font-semibold">Satisfied Client</p>
      </div>
    </div>
  </section>
</template>

<script setup>
  const testimonials = [1, 2, 3]
</script>
