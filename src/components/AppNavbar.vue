<template>
  <nav class="app-navbar" :class="{ 'is-scrolled': scrolled }">
    <div class="max-w-6xl mx-auto px-4 flex items-center justify-between" style="height:68px;">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 no-underline">
        <div class="w-9 h-9 rounded-full bg-[#e63946] flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
               stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <span class="navbar-logo-text">
          D<span class="text-[#e63946]">SOLUTION</span>
        </span>
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-5">
        <RouterLink
          v-for="item in navItems"
          :key="item.key"
          :to="item.to"
          class="navbar-link"
        >
          {{ t[item.key] }}
        </RouterLink>

        <RouterLink to="#contact" class="btn-red" style="font-size:.76rem;padding:.5rem 1.2rem;">
          {{ t.nav_cta }}
        </RouterLink>

        <!-- Lang switcher -->
        <div class="navbar-lang-wrap">
          <button
            v-for="lang in langs"
            :key="lang.code"
            class="navbar-lang-btn"
            :class="{ 'is-active': currentLang === lang.code }"
            @click="setLang(lang.code)"
          >
            <span style="margin-right:2px;">{{ lang.flag }}</span>{{ lang.code.toUpperCase() }}
          </button>
        </div>
      </div>

      <!-- Mobile right side -->
      <div class="md:hidden flex items-center gap-3">
        <!-- Mobile lang -->
        <div class="navbar-lang-wrap" style="padding:2px;">
          <button
            v-for="lang in langs"
            :key="lang.code"
            class="navbar-lang-btn"
            :class="{ 'is-active': currentLang === lang.code }"
            style="padding:3px 7px;font-size:.62rem;"
            @click="setLang(lang.code)"
          >{{ lang.flag }}</button>
        </div>

        <!-- Hamburger -->
        <button
          class="bg-transparent border-0 cursor-pointer p-1"
          @click="mobileOpen = !mobileOpen"
          aria-label="Menu"
        >
          <svg width="22" height="22" fill="none" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6"  x2="19" y2="6"  class="hamburger-line" stroke="#111"/>
            <line x1="3" y1="11" x2="19" y2="11" class="hamburger-line" stroke="#111"/>
            <line x1="3" y1="16" x2="19" y2="16" class="hamburger-line" stroke="#111"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="navbar-mobile-menu" :class="{ 'is-open': mobileOpen }">
      <RouterLink
        v-for="item in navItems"
        :key="item.key"
        :to="item.to"
        class="navbar-mobile-link"
        @click="mobileOpen = false"
      >
        {{ t[item.key] }}
      </RouterLink>
      <div class="px-6 py-3">
        <RouterLink
          to="/services#contact"
          class="btn-red"
          style="font-size:.8rem;padding:.55rem 1.4rem;"
          @click="mobileOpen = false"
        >
          {{ t.nav_cta }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t, currentLang, langs, setLang } = useI18n()

const scrolled   = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { key: 'nav_home',     to: '/'        },
  { key: 'nav_services', to: '/services'},
  { key: 'nav_about',    to: '/#a-propos'},
  { key: 'nav_contact',  to: '/services#contact'},
]

function onScroll() {
  scrolled.value = window.scrollY > 60
  // close mobile menu on scroll
  if (window.scrollY > 10) mobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
