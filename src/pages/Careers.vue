<template>
  <div class="bg-[#f5f7fb] text-slate-900">
    <!-- Hero -->
    <section class="bg-[#0d2a52] text-white py-24 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="uppercase tracking-[0.3em] text-sm text-[#d7bc7a] mb-4">Careers</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Build Your Legal Career With Us</h1>

        <p class="text-lg text-slate-200 leading-8">
          Join a team driven by excellence, integrity, and meaningful legal impact. Grow with a firm that values talent,
          ambition, and professional development.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">Why Join Us</p>
        <h2 class="text-4xl font-bold mb-6 leading-tight">A Place Where Legal Talent Thrives</h2>

        <p class="text-slate-600 leading-8 mb-5">
          At Sharma & Associates, we believe exceptional legal work begins with exceptional people. We foster a culture
          of collaboration, learning, and professional excellence where legal professionals are empowered to grow,
          contribute, and lead.
        </p>

        <p class="text-slate-600 leading-8">
          Whether you're an experienced legal practitioner or an aspiring professional, we offer an environment that
          encourages innovation, mentorship, and long-term career development.
        </p>
      </div>

      <div class="h-125 rounded-3xl bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
    </section>

    <!-- Benefits -->
    <section class="max-w-7xl mx-auto px-6 py-10">
      <div class="text-center mb-12">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">What We Offer</p>
        <h2 class="text-4xl font-bold">Benefits & Opportunities</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h4 class="font-bold text-xl mb-3">Professional Growth</h4>
          <p class="text-slate-600 leading-7">Work on high-value cases with opportunities to build expertise and leadership.</p>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h4 class="font-bold text-xl mb-3">Mentorship</h4>
          <p class="text-slate-600 leading-7">Learn directly from experienced legal professionals and senior counsel.</p>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h4 class="font-bold text-xl mb-3">Collaborative Culture</h4>
          <p class="text-slate-600 leading-7">Be part of a supportive team that values excellence, respect, and teamwork.</p>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h4 class="font-bold text-xl mb-3">Meaningful Work</h4>
          <p class="text-slate-600 leading-7">Contribute to impactful legal matters that create real value for clients.</p>
        </div>
      </div>
    </section>

    <!-- Open Roles -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">Open Positions</p>
        <h2 class="text-4xl font-bold">Current Opportunities</h2>
      </div>

      <div class="space-y-6">
        <div v-for="job in jobs" :key="job.title" class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 class="text-2xl font-bold mb-2">{{ job.title }}</h3>
            <p class="text-slate-600">{{ job.type }} • {{ job.location }}</p>
          </div>

          <button class="bg-[#b9923f] text-white px-6 py-3 rounded-2xl font-semibold">Apply Now</button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white border-y border-slate-200 py-20">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-sm font-semibold text-[#b9923f] uppercase tracking-widest mb-3">Work With Us</p>
        <h2 class="text-4xl font-bold mb-6">Shape the Future of Legal Excellence</h2>

        <p class="text-slate-600 text-lg leading-8 mb-8">
          We’re always looking for driven legal professionals who are ready to make an impact. If you’re passionate
          about law, excellence, and growth, we’d love to hear from you.
        </p>

        <button class="bg-[#0d2a52] text-white px-8 py-4 rounded-2xl font-semibold">Send Your Application</button>
      </div>
    </section>
  </div>
</template>

<script setup>
  const jobs = [
    { title: 'Senior Associate – Corporate Law', type: 'Full Time', location: 'New Delhi' },
    { title: 'Legal Associate – Litigation', type: 'Full Time', location: 'Mumbai' },
    { title: 'Legal Intern', type: 'Internship', location: 'Remote / Hybrid' },
  ]
</script>
