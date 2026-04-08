<template>
  <main class="pt-[68px]">

    <!-- PAGE HERO -->
    <section class="relative bg-[#0d0d0d] overflow-hidden" style="padding: 8rem 0 4.5rem;">
      <div
        class="absolute inset-0 bg-cover bg-center opacity-20"
        style="background-image: url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80')"
      />
      <div class="absolute inset-0"
           style="background: linear-gradient(135deg, rgba(8,8,8,.93) 40%, rgba(170,15,25,.55) 100%)"/>
      <div class="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <span class="inline-block bg-[#e63946] text-white font-montserrat font-bold text-xs
                     tracking-widest uppercase px-4 py-1.5 rounded mb-5">
          {{ t.page_services_badge }}
        </span>
        <h1 class="font-montserrat font-black text-white leading-tight mb-4"
            style="font-size: clamp(2rem, 5vw, 3rem)">
          {{ t.page_services_title1 }}
          <span class="text-[#e63946]">{{ t.page_services_title2 }}</span>
        </h1>
        <p class="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-6">
          {{ t.page_services_desc }}
        </p>
        <div class="flex items-center justify-center gap-2 text-sm text-white/40">
          <RouterLink to="/" class="text-white/40 no-underline hover:text-[#e63946] transition-colors">
            {{ t.page_breadcrumb_home }}
          </RouterLink>
          <span>›</span>
          <span class="text-[#e63946] font-semibold">{{ t.nav_services }}</span>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center fade-up">
        <span class="red-line block mx-auto"></span>
        <h2 class="section-title mb-4">
          {{ t.why_services_title1 }}
          <span class="text-[#e63946]">{{ t.why_services_title2 }}</span>
        </h2>
        <p class="text-gray-500 leading-relaxed text-base max-w-3xl mx-auto">
          {{ t.why_services_desc }}
        </p>
      </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="pb-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-7">
          <ServiceCard
            v-for="service in store.services"
            :key="service.id"
            :service="service"
            class="fade-up"
            @open-transfer="openModal"
            @open-stripe="openStripeModal"
          />
        </div>
      </div>
    </section>

    <!-- PBX FEATURES -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-14 fade-up">
          <span class="red-line block mx-auto"></span>
          <h2 class="section-title">
            {{ t.pbx_title1 }} <span class="text-[#e63946]">{{ t.pbx_title2 }}</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-x-16 fade-up">
          <div
            v-for="feat in store.pbxFeatures"
            :key="feat"
            class="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0"
          >
            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#e63946] flex items-center justify-center mt-0.5">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white"
                   stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span class="text-gray-600 text-sm leading-relaxed">{{ feat }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-[#0d0d0d]">
      <div class="max-w-4xl mx-auto px-4 text-center fade-up">
        <h2 class="font-montserrat font-black text-white mb-4"
            style="font-size: clamp(1.6rem, 4vw, 2.4rem)">
          {{ t.cta_global_title1 }}
          <span class="text-[#e63946]">{{ t.cta_global_title2 }}</span>
        </h2>
        <p class="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
          {{ t.cta_global_desc }}
        </p>
        <RouterLink to="/services#contact" class="btn-red">{{ t.cta_btn }}</RouterLink>
      </div>
    </section>

    <!-- CERTIFICATIONS -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-14 fade-up">
          <span class="red-line block mx-auto"></span>
          <h2 class="section-title">
            {{ t.cert_title1 }} <span class="text-[#e63946]">{{ t.cert_title2 }}</span>
          </h2>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-5 fade-up">
          <div
            v-for="cert in store.certifications"
            :key="cert.label"
            class="w-24 h-24 bg-gray-50 rounded-xl border border-gray-100 p-3
                   flex items-center justify-center hover:shadow-md transition-shadow"
            :title="cert.label"
          >
            <img
              :src="cert.img" :alt="cert.label"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
              @error="e => e.target.style.opacity = '0.15'"
            />
          </div>
        </div>
        <div class="text-center mt-14 fade-up">
          <p class="font-montserrat font-extrabold text-lg text-gray-900 mb-2">
            <span class="text-[#e63946]">GOOG-MAPS</span> {{ t.cert_claim }}
          </p>
          <p class="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm">
            {{ t.cert_claim_desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="bg-[#e63946] py-7">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-12 md:gap-24">
          <div v-for="stat in stats" :key="stat.labelKey" class="text-center text-white">
            <div class="font-montserrat font-black text-3xl">{{ stat.value }}</div>
            <div class="text-[.75rem] opacity-85 font-semibold uppercase tracking-widest mt-0.5">
              {{ t[stat.labelKey] }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <ContactForm />

    <!-- MODAL -->
    <TransferModal :service="selectedService" @close="selectedService = null" />
    <StripeModal :service="selectedStripeService" @close="selectedStripeService = null" />

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useServicesStore } from '@/stores/services'
import { useI18n }          from '@/composables/useI18n'
import ServiceCard           from '@/components/ServiceCard.vue'
import TransferModal         from '@/components/TransferModal.vue'
import StripeModal           from '@/components/StripeModal.vue'
import ContactForm           from '@/components/ContactForm.vue'

const store           = useServicesStore()
const { t }           = useI18n()
const selectedService = ref(null)
const selectedStripeService = ref(null)

function openModal(service) { selectedService.value = service }
function openStripeModal(service) { selectedStripeService.value = service }

const stats = [
  { value: '500+',   labelKey: 'stat_clients' },
  { value: '200',    labelKey: 'stat_google'  },
  { value: '200+',   labelKey: 'stat_visibility' },
  { value: '10 ans', labelKey: 'stat_exp'     },
]

function onScroll() {
  document.querySelectorAll('.fade-up').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible')
  })
}
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
