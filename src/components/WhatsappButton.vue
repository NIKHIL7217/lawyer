<!-- <template>
  <a
    aria-label="Chat on WhatsApp"
    class="fixed z-50 bottom-6 right-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe57] transition"
    :href="whatsappUrl"
    rel="noopener noreferrer"
    target="_blank"
  >
    <svg
      fill="white"
      height="28"
      viewBox="0 0 32 32"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.646.866 5.093 2.357 7.11L4 29l7.13-2.33A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.13 0-4.21-.573-6.02-1.658l-.43-.256-4.24 1.385 1.39-4.13-.28-.44A10.93 10.93 0 0 1 5.083 15c0-6.025 4.892-10.917 10.917-10.917S26.917 8.975 26.917 15 22.025 25.917 16 25.917zm5.36-7.13c-.294-.147-1.74-.857-2.01-.954-.27-.099-.466-.147-.662.148-.197.294-.76.954-.93 1.15-.17.197-.343.221-.637.074-.294-.148-1.24-.457-2.36-1.457-.872-.779-1.46-1.74-1.632-2.034-.17-.294-.018-.453.13-.6.134-.133.294-.346.44-.52.148-.173.197-.296.296-.49.099-.197.05-.37-.025-.52-.074-.148-.662-1.6-.91-2.2-.24-.577-.484-.5-.662-.51l-.564-.01c-.197 0-.52.074-.792.37-.272.296-1.04 1.016-1.04 2.48 0 1.462 1.065 2.875 1.213 3.074.148.197 2.1 3.21 5.08 4.377.71.244 1.263.39 1.697.5.713.182 1.36.156 1.872.095.571-.067 1.74-.712 1.988-1.4.246-.687.246-1.276.172-1.4-.073-.123-.267-.197-.56-.344z" />
    </svg>
  </a>
</template>

<script setup>
  const phone = '919928824112' // Change to your WhatsApp number
  const message = encodeURIComponent('Hello! I would like to inquire about your legal services.')
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`
</script> -->

<template>
  <a
    aria-label="Chat on WhatsApp"
    class="whatsapp-fab"
    href="https://wa.me/919928824112"
    rel="noopener noreferrer"
    target="_blank"
  >
    <span aria-hidden="true" class="whatsapp-fab__pulse" />
    <v-icon icon="mdi-whatsapp" :size="iconSize" />
  </a>
</template>

<script setup>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'

  const { smAndDown } = useDisplay()
  const iconSize = computed(() => (smAndDown.value ? 26 : 30))
</script>

<style scoped>
/* ── Design Tokens ── */
.whatsapp-fab {
  --fab-size: 60px;
  --fab-bg: #25d366;
  --fab-offset: 22px;
}

/* ── FAB ── */
.whatsapp-fab {
  position: fixed;
  right: var(--fab-offset);
  bottom: var(--fab-offset);
  width: var(--fab-size);
  height: var(--fab-size);
  border-radius: 50%;
  background: var(--fab-bg);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 9999;
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.whatsapp-fab:hover {
  transform: translateY(-3px) scale(1.06);
  box-shadow: 0 10px 32px rgba(37, 211, 102, 0.45);
}

.whatsapp-fab:active {
  transform: translateY(0) scale(1);
}

/* ── Pulse Ring ── */
.whatsapp-fab__pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--fab-bg);
  animation: fabPulse 2.5s ease-out infinite;
}

@keyframes fabPulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

/* ── Responsive — Tablet ── */
@media (min-width: 600px) and (max-width: 959.98px) {
  .whatsapp-fab {
    --fab-size: 56px;
    --fab-offset: 20px;
  }
}

/* ── Responsive — Mobile ── */
@media (max-width: 599.98px) {
  .whatsapp-fab {
    --fab-size: 50px;
    --fab-offset: 14px;
  }
}

/* ── Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  .whatsapp-fab {
    transition: none;
  }

  .whatsapp-fab__pulse {
    animation: none;
    display: none;
  }
}
</style>
