<template>
  <div
    class="svc-card relative"
    :class="
      service.featured ? 'border-2 border-[#e63946]' : 'border border-gray-100'
    "
  >
    <!-- Featured badge -->
    <span
      v-if="service.featured"
      class="absolute top-0 right-0 z-10 bg-[#e63946] text-white font-montserrat font-black text-[.6rem] tracking-widest uppercase px-3 py-1 rounded-bl-lg"
      >POPULAIRE</span
    >

    <!-- Image -->
    <img
      :src="service.img"
      :alt="service.title"
      class="w-full h-44 object-cover"
      loading="lazy"
      @error="
        (e) => {
          e.target.style.background = '#f0f0f0';
          e.target.style.minHeight = '176px';
        }
      "
    />

    <!-- Body -->
    <div class="flex flex-col flex-1 p-6">
      <h3
        class="font-montserrat font-extrabold text-[.84rem] uppercase tracking-wide text-gray-900 mb-3 leading-snug"
      >
        {{ service.title }}
      </h3>

      <div class="flex items-baseline gap-1.5 mb-4">
        <span
          class="font-montserrat font-black text-[2rem] leading-none text-[#e63946]"
        >
          {{ service.price }}
        </span>
        <span
          class="font-montserrat font-semibold text-xs uppercase tracking-wide text-gray-400"
        >
          {{ service.period }}
        </span>
      </div>

      <ul class="flex-1 flex flex-col gap-2 mb-6">
        <li
          v-for="feature in service.features"
          :key="feature"
          class="flex items-start gap-2 text-[.84rem] text-gray-600 leading-snug"
        >
          <span
            class="flex-shrink-0 w-4 h-4 rounded-full bg-[#e63946] flex items-center justify-center mt-0.5"
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          {{ feature }}
        </li>
      </ul>

      <!-- Payment -->
      <div class="border-t border-gray-100 pt-4 flex flex-col gap-2.5">
        <p
          class="font-montserrat font-bold text-[.62rem] uppercase tracking-widest text-gray-300"
        >
          {{ t.pay_with }}
        </p>

        <!-- <a :href="service.stripeUrl" target="_blank" rel="noopener" class="btn-stripe">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          {{ t.pay_stripe }}
        </a> -->
        <a
         @click="$emit('openStripe', service)"
          rel="noopener"
          class="btn-stripe"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          Par Stripe
        </a>
        <button class="btn-virement">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          virement direct
        </button>
      </div>
    </div>
    <div  class="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity pointer-events-none rounded-lg">
      <!-- Hover effect layer -->
       <p>le système n'est pas disponible pour le moment.</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();

defineProps({ service: { type: Object, required: true } });
defineEmits(["openTransfer", "openStripe"]);
</script>
