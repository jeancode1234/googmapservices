<template>
  <footer class="bg-[#0d0d0d] pt-12 pb-6">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-10 mb-10">

        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-full bg-[#e63946] flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white"
                   stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span class="font-montserrat font-black text-white text-base">
              GOOG-<span class="text-[#e63946]">MAPS</span>
            </span>
          </div>
          <p class="text-white/50 text-sm leading-relaxed">{{ t.footer_desc }}</p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-montserrat font-bold text-white text-xs uppercase tracking-widest mb-4">
            {{ t.footer_nav }}
          </h4>
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="item in navItems"
              :key="item.key"
              :to="item.to"
              class="text-white/50 text-sm no-underline transition-colors hover:text-[#e63946]"
            >{{ t[item.key] }}</RouterLink>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-montserrat font-bold text-white text-xs uppercase tracking-widest mb-4">
            {{ t.footer_contact }}
          </h4>
          <div class="flex flex-col gap-2 text-white/50 text-sm">
            <p>Calle Rocafort 89, Barcelona 08015</p>
            <p>+34 631 903 756</p>
            <p>info@goog-maps.com</p>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-4">
        <p class="text-white/35 text-xs">© 2024 GOOG-MAPS. {{ t.footer_rights }}</p>
        <div class="flex gap-4">
          <a
            v-for="s in socials" :key="s"
            href="#"
            class="text-white/40 text-xs no-underline transition-colors hover:text-[#e63946]"
          >{{ s }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const navItems = [
  { key: 'nav_home',     to: '/'         },
  { key: 'nav_services', to: '/services' },
  { key: 'nav_about',    to: '/#a-propos'},
  { key: 'nav_contact',  to: '/services#contact'},
]

const socials = ['Facebook', 'Twitter', 'Youtube', 'Pinterest']
</script>
