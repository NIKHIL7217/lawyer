<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">Our Team</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Meet Our Legal Experts</h1>
        <p class="text-lg text-slate-200 leading-8">A team of experienced professionals committed to delivering excellence in every legal matter.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="member in team" :key="member.name" class="bg-white rounded-3xl p-6 text-center border border-slate-200 shadow-sm">
        <img class="w-28 h-28 rounded-full mx-auto object-cover mb-4" :src="member.image">
        <h3 class="font-bold text-xl">{{ member.name }}</h3>
        <p class="text-[#b9923f] font-medium mb-3">{{ member.role }}</p>
        <p class="text-slate-600 text-sm leading-7">{{ member.bio }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
  const team = [
    { name: 'Rajesh Sharma', role: 'Managing Partner', bio: 'Specialist in corporate law and strategic advisory.', image: 'https://i.pravatar.cc/240?img=12' },
    { name: 'Rohan Mehta', role: 'Senior Associate', bio: 'Focused on dispute resolution and civil litigation.', image: 'https://i.pravatar.cc/240?img=15' },
    { name: 'Neha Kapoor', role: 'Legal Consultant', bio: 'Expert in family law and private client matters.', image: 'https://i.pravatar.cc/240?img=20' },
    { name: 'Aman Verma', role: 'Associate Partner', bio: 'Experienced in criminal defense and trial strategy.', image: 'https://i.pravatar.cc/240?img=18' },
  ]
</script>
