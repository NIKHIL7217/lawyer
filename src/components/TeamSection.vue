<template>
  <section class="max-w-7xl mx-auto px-6 py-14">
    <h3 class="text-3xl font-bold text-center mb-10">Our Team</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="n in team" :key="n" class="bg-white rounded-3xl p-6 text-center border border-slate-200 shadow-sm">
        <img :src="'https://i.pravatar.cc/240?img=' + (n + 10)" class="w-28 h-28 rounded-full mx-auto object-cover mb-4" />
        <h4 class="font-bold text-lg">Rajesh Sharma</h4>
        <p class="text-sm text-slate-500">Managing Partner</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [1, 2, 3, 4]
</script>
