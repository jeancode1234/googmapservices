<template>
  <main class="pt-[68px]">

    <!-- HERO SLIDESHOW -->
    <section class="relative flex items-center overflow-hidden" style="min-height:100vh;">
      <div
        v-for="(slide, i) in slides" :key="i"
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url(${slide})`,
          opacity: currentSlide === i ? 1 : 0,
          transform: currentSlide === i ? 'scale(1.10)' : 'scale(1)',
          transition: 'opacity 1.5s ease, transform 8s ease',
        }"
      />
      <div class="absolute inset-0 z-[1]"
           style="background: linear-gradient(135deg, rgba(8,8,8,.85) 40%, rgba(170,15,25,.55) 100%)"/>

      <div class="relative z-[5] w-full max-w-6xl mx-auto px-4 py-36">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block bg-[#e63946] text-white font-montserrat font-bold text-xs
                         tracking-widest uppercase px-4 py-1.5 rounded mb-5">
              {{ t.hero_badge }}
            </span>
            <h1 class="font-montserrat font-black text-white leading-tight mb-6"
                style="font-size: clamp(2rem, 5vw, 3.2rem)">
              {{ t.hero_title1 }}<br/>
              <span class="text-[#e63946]">{{ t.hero_title2 }}</span>
            </h1>
            <p class="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">{{ t.hero_desc }}</p>
            <div class="flex flex-wrap gap-4">
              <RouterLink to="/services" class="btn-red">{{ t.hero_btn1 }}</RouterLink>
              <a
                href="#"
                class="inline-flex items-center gap-2 border-2 border-white text-white
                       font-montserrat font-bold text-sm tracking-widest uppercase
                       px-8 py-3 rounded no-underline transition-all duration-200
                       hover:bg-white hover:text-gray-900"
              >{{ t.hero_btn2 }}</a>
            </div>
          </div>

          <!-- Floating badge -->
          <div class="hidden md:flex justify-center">
            <div class="relative" style="animation: bounceSlow 2.5s ease-in-out infinite;">
              <div class="w-56 h-56 rounded-full flex items-center justify-center"
                   style="background:rgba(255,255,255,.08); border:2px solid rgba(255,255,255,.15);">
                <div class="w-40 h-40 rounded-full flex items-center justify-center"
                     style="background:rgba(230,57,70,.15); border:2px solid rgba(230,57,70,.35);">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#e63946"
                       stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
              </div>
              <div class="absolute -top-2 -right-6 bg-white rounded-lg px-3 py-2 shadow-xl">
                <div class="font-montserrat font-black text-[#e63946] text-xl">+300%</div>
                <div class="text-[.7rem] text-gray-500 font-semibold">{{ t.hero_badge_visibility }}</div>
              </div>
              <div class="absolute -bottom-2 -left-6 rounded-lg px-3 py-2 shadow-xl"
                   style="background:#e63946;">
                <div class="font-montserrat font-black text-white text-lg">#1</div>
                <div class="text-[.7rem] font-semibold" style="color:rgba(255,255,255,.8);">Google Maps</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full
               flex items-center justify-center cursor-pointer transition-colors border-0"
        style="background:rgba(255,255,255,.15); backdrop-filter:blur(6px);"
        @click="prevSlide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full
               flex items-center justify-center cursor-pointer transition-colors border-0"
        style="background:rgba(255,255,255,.15); backdrop-filter:blur(6px);"
        @click="nextSlide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <!-- Dots -->
      <div class="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        <button
          v-for="(_, i) in slides" :key="i"
          class="w-2.5 h-2.5 rounded-full border-0 cursor-pointer transition-all duration-300"
          :style="{ background: currentSlide === i ? '#e63946' : 'rgba(255,255,255,.35)',
                    transform: currentSlide === i ? 'scale(1.4)' : 'scale(1)' }"
          @click="goToSlide(i)"
        />
      </div>
    </section>

    <!-- STATS STRIP -->
    <section class="bg-[#e63946] py-6">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-10 md:gap-20">
          <div v-for="stat in stats" :key="stat.labelKey" class="text-center text-white">
            <div class="font-montserrat font-black text-2xl">{{ stat.value }}</div>
            <div class="text-[.75rem] opacity-85 font-semibold uppercase tracking-widest">{{ t[stat.labelKey] }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES PREVIEW -->
    <section id="services" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-14 fade-up">
          <span class="red-line block mx-auto"></span>
          <h2 class="section-title">
            {{ t.services_title }} <span class="text-[#e63946]">{{ t.services_title_hl }}</span>
          </h2>
          <p class="text-gray-500 mt-4 max-w-lg mx-auto leading-relaxed">{{ t.services_subtitle }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(sv, i) in serviceItems" :key="i"
            class="fade-up bg-white rounded-xl p-8 border border-gray-100 shadow-sm
                   transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                 style="background:#fff5f5;" v-html="sv.icon" />
            <h3 class="font-montserrat font-bold text-base text-gray-900 mb-2">{{ t[sv.titleKey] }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ t[sv.descKey] }}</p>
          </div>
        </div>
        <div class="text-center mt-12 fade-up">
          <RouterLink to="/services" class="btn-red">{{ t.services_see_all }}</RouterLink>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section id="temoignages" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-14 fade-up">
          <span class="red-line block mx-auto"></span>
          <h2 class="section-title">
            {{ t.testimonials_title }} <span class="text-[#e63946]">{{ t.testimonials_title_hl }}</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="tm in testimonialItems" :key="tm.name"
            class="fade-up bg-white rounded-xl p-7 border-l-4 border-[#e63946]
                   shadow-md transition-transform hover:-translate-y-1"
          >
            <div class="flex gap-1 mb-4">
              <span v-for="s in 5" :key="s" class="text-[#e63946] text-base">★</span>
            </div>
            <p class="text-gray-500 leading-relaxed text-sm italic mb-5">"{{ t[tm.textKey] }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#e63946] flex items-center justify-center
                          text-white font-bold font-montserrat">{{ tm.initial }}</div>
              <div>
                <div class="font-montserrat font-bold text-sm text-gray-900">{{ tm.name }}</div>
                <div class="text-xs text-gray-400">{{ t[tm.roleKey] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- THEMES -->
    <section id="a-propos" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-14 fade-up">
          <span class="red-line block mx-auto"></span>
          <h2 class="section-title">
            {{ t.themes_title }} <span class="text-[#e63946]">{{ t.themes_title_hl }}</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="th in themeItems" :key="th.num"
            class="fade-up relative bg-gray-50 rounded-xl p-8 border border-gray-100 overflow-hidden
                   transition-all hover:-translate-y-1.5 hover:shadow-lg"
          >
            <span class="absolute top-2 right-4 font-montserrat font-black text-5xl leading-none"
                  style="color:rgba(230,57,70,.10);">{{ th.num }}</span>
            <h3 class="font-montserrat font-extrabold text-sm uppercase tracking-widest text-[#e63946] mb-3">
              {{ t[th.titleKey] }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ t[th.descKey] }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-[#0d0d0d] py-20">
      <div class="max-w-4xl mx-auto px-4 text-center fade-up">
        <h2 class="font-montserrat font-black text-white mb-4"
            style="font-size: clamp(1.6rem, 4vw, 2.5rem)">
          {{ t.cta_title1 }}
          <span class="text-[#e63946]">{{ t.cta_title2 }}</span>
        </h2>
        <p class="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">{{ t.cta_desc }}</p>
        <RouterLink to="/services#contact" class="btn-red">{{ t.cta_btn }}</RouterLink>
      </div>
    </section>

    <!-- WHY US -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-14 items-center">
          <div class="fade-up">
            <span class="red-line block"></span>
            <h2 class="section-title mb-5">
              {{ t.why_title }} <span class="text-[#e63946]">{{ t.why_title_hl }}</span>
            </h2>
            <p class="text-gray-500 leading-relaxed mb-6">{{ t.why_desc }}</p>
            <ul class="flex flex-col gap-3">
              <li v-for="ptKey in whyPointKeys" :key="ptKey" class="flex items-start gap-3">
                <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#e63946] flex items-center justify-center mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                       stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span class="text-gray-600 text-sm leading-relaxed">{{ t[ptKey] }}</span>
              </li>
            </ul>
          </div>
          <div class="fade-up bg-gray-50 rounded-xl p-10 border-l-4 border-[#e63946]">
            <div class="flex items-start gap-4 mb-6">
              <span class="text-5xl leading-none font-serif" style="color:rgba(230,57,70,.35);">"</span>
              <p class="text-gray-500 leading-relaxed italic text-sm pt-2">{{ t.why_quote }}</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-full bg-[#e63946] flex items-center justify-center
                          text-white font-bold font-montserrat">D</div>
              <div>
                <div class="font-montserrat font-bold text-sm text-gray-900">Daniel Johnson</div>
                <div class="text-xs text-gray-400">{{ t.why_quote_role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <ContactForm />

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n }   from '@/composables/useI18n'
import ContactForm   from '@/components/ContactForm.vue'

const { t } = useI18n()

// Slideshow
const slides = [
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=85',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=85',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=85',
]
const currentSlide = ref(0)
let timer = null
function goToSlide(i)  { currentSlide.value = i; clearInterval(timer); timer = setInterval(nextSlide, 6000) }
function nextSlide()   { goToSlide((currentSlide.value + 1) % slides.length) }
function prevSlide()   { goToSlide((currentSlide.value - 1 + slides.length) % slides.length) }

const stats = [
  { value: '500+',   labelKey: 'stat_clients'    },
  { value: '#1',     labelKey: 'stat_google'     },
  { value: '+300%',  labelKey: 'stat_visibility' },
  { value: '10 ans', labelKey: 'stat_exp'        },
]

const serviceItems = [
  { titleKey:'svc1_title', descKey:'svc1_desc', icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  { titleKey:'svc2_title', descKey:'svc2_desc', icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
  { titleKey:'svc3_title', descKey:'svc3_desc', icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { titleKey:'svc4_title', descKey:'svc4_desc', icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>' },
  { titleKey:'svc5_title', descKey:'svc5_desc', icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
  { titleKey:'svc6_title', descKey:'svc6_desc', icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' },
]

const testimonialItems = [
  { name: 'Daniel Johnson', initial: 'D', textKey: 'tm1_text', roleKey: 'tm1_role' },
  { name: 'Julia Michele',  initial: 'J', textKey: 'tm2_text', roleKey: 'tm2_role' },
  { name: 'Robert Green',   initial: 'R', textKey: 'tm3_text', roleKey: 'tm3_role' },
  { name: 'Oliver Goodman', initial: 'O', textKey: 'tm4_text', roleKey: 'tm4_role' },
]

const themeItems = [
  { num: '01', titleKey: 'th1_title', descKey: 'th1_desc' },
  { num: '02', titleKey: 'th2_title', descKey: 'th2_desc' },
  { num: '03', titleKey: 'th3_title', descKey: 'th3_desc' },
  { num: '05', titleKey: 'th4_title', descKey: 'th4_desc' },
  { num: '06', titleKey: 'th5_title', descKey: 'th5_desc' },
  { num: '07', titleKey: 'th6_title', descKey: 'th6_desc' },
]

const whyPointKeys = ['why_pt1', 'why_pt2', 'why_pt3', 'why_pt4', 'why_pt5']

function onScroll() {
  document.querySelectorAll('.fade-up').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible')
  })
}

onMounted(() => {
  timer = setInterval(nextSlide, 6000)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
@keyframes bounceSlow {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
}
</style>
