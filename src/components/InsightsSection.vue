<template>
  <section class="max-w-7xl mx-auto px-6 py-14">
    <h3 class="text-3xl font-bold text-center mb-10">Recent Articles & Insights</h3>
    <div class="grid md:grid-cols-3 gap-6">
      <article v-for="n in insights" :key="n" class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
        <div class="h-52 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div class="p-5">
          <h4 class="font-bold text-lg leading-7">Legal Blog Posts & Insights to Guide Better Decisions</h4>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const insights = [1, 2, 3]
</script>
