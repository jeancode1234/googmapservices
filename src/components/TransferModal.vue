<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div
        v-if="service"
        class="fixed inset-0 z-[600] bg-black/60 flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <div class="bg-white rounded-2xl w-full max-w-[490px] p-8 relative shadow-2xl modal-pop">
          <!-- Close -->
          <button
            class="absolute top-4 right-4 bg-transparent border-0 cursor-pointer text-gray-300
                   text-xl leading-none transition-colors hover:text-[#e63946]"
            @click="$emit('close')"
            aria-label="Fermer"
          >✕</button>

          <!-- Header -->
          <h2 class="font-montserrat font-extrabold text-lg text-gray-900 mb-1">
            {{ t.modal_title }}
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">
            {{ t.modal_service }}&nbsp;:
            <strong class="text-gray-800">{{ service.title }}</strong><br/>
            {{ t.modal_amount }}&nbsp;:
            <strong class="text-[#e63946] text-base">{{ service.price }}</strong>
            <span class="text-xs text-gray-400"> {{ service.period }}</span>
          </p>

          <!-- IBAN Box -->
          <div class="bg-gray-50 rounded-xl p-5 border-l-4 border-[#e63946] mb-5 flex flex-col gap-4">

            <div>
              <span class="block text-[.65rem] font-bold uppercase tracking-widest text-gray-400 mb-1">
                {{ t.modal_bene }}
              </span>
              <span class="font-bold text-gray-900 text-sm font-mono">GOOG-MAPS SL</span>
            </div>

            <div class="flex justify-between items-center gap-3">
              <div class="min-w-0">
                <span class="block text-[.65rem] font-bold uppercase tracking-widest text-gray-400 mb-1">IBAN</span>
                <span class="font-bold text-gray-900 text-sm font-mono break-all">ES91 2100 0418 4502 0005 1332</span>
              </div>
              <button class="copy-btn flex-shrink-0" @click="copy('ES91 2100 0418 4502 0005 1332', 'iban')">
                {{ copied === 'iban' ? t.modal_copied : t.modal_copy }}
              </button>
            </div>

            <div class="flex justify-between items-center gap-3">
              <div>
                <span class="block text-[.65rem] font-bold uppercase tracking-widest text-gray-400 mb-1">BIC / SWIFT</span>
                <span class="font-bold text-gray-900 text-sm font-mono">CAIXESBBXXX</span>
              </div>
              <button class="copy-btn flex-shrink-0" @click="copy('CAIXESBBXXX', 'bic')">
                {{ copied === 'bic' ? t.modal_copied : t.modal_copy }}
              </button>
            </div>

            <div>
              <span class="block text-[.65rem] font-bold uppercase tracking-widest text-gray-400 mb-1">
                {{ t.modal_bank }}
              </span>
              <span class="font-bold text-gray-900 text-sm font-mono">CaixaBank – Barcelone</span>
            </div>

            <div class="border-t border-dashed border-gray-200 pt-4 flex justify-between items-center gap-3">
              <div>
                <span class="block text-[.65rem] font-bold uppercase tracking-widest text-gray-400 mb-1">
                  {{ t.modal_ref }}
                  <span class="text-[#e63946]">{{ t.modal_ref_req }}</span>
                </span>
                <span class="font-bold text-[#e63946] text-sm font-mono">{{ service.ref }}</span>
              </div>
              <button class="copy-btn flex-shrink-0" @click="copy(service.ref, 'ref')">
                {{ copied === 'ref' ? t.modal_copied : t.modal_copy }}
              </button>
            </div>
          </div>

          <!-- Warning -->
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
            ⚠️ <strong>{{ t.modal_warn }}
            <span class="text-[#e63946] font-mono">{{ service.ref }}</span>
            {{ t.modal_warn2 }} <strong>info@goog-maps.com</strong>.
            {{ t.modal_warn3 }} <strong>{{ t.modal_warn4 }}</strong>.</strong>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const props = defineProps({ service: { type: Object, default: null } })
defineEmits(['close'])

const copied = ref('')
watch(() => props.service, () => { copied.value = '' })

function copy(text, key) {
  navigator.clipboard.writeText(text).catch(() => {})
  copied.value = key
  setTimeout(() => { if (copied.value === key) copied.value = '' }, 2200)
}
</script>

<style scoped>
.copy-btn {
  background: #e63946;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.65rem;
  font-size: 0.68rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}
.copy-btn:hover { background: #c0392b; }

.backdrop-enter-active,
.backdrop-leave-active { transition: opacity 0.25s ease; }
.backdrop-enter-from,
.backdrop-leave-to    { opacity: 0; }
</style>
