<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-14">

        <!-- Info -->
        <div class="fade-up">
          <span class="red-line block"></span>
          <h2 class="section-title mb-6">
            {{ t.contact_title }}<span class="text-[#e63946]">{{ t.contact_title_hl }}</span>
          </h2>
          <p class="text-gray-500 leading-relaxed mb-8">{{ t.contact_desc }}</p>

          <div class="flex flex-col gap-5">
            <div v-for="info in contactInfos" :key="info.key" class="flex items-center gap-4">
              <div
                class="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                v-html="info.icon"
              />
              <div>
                <p class="text-[.7rem] uppercase tracking-widest text-gray-400 font-bold mb-0.5">
                  {{ t[info.labelKey] }}
                </p>
                <p class="font-semibold text-gray-900">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <div class="flex gap-3 mt-8">
            <a
              v-for="s in socials" :key="s"
              href="#"
              class="w-9 h-9 rounded-full bg-[#e63946] flex items-center justify-center
                     text-white text-xs font-bold font-montserrat no-underline
                     transition-colors hover:bg-[#c0392b]"
            >{{ s[0] }}</a>
          </div>
          <div class="w-full pt-4 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999441419698!2d-0.5573806845936598!3d47.46848677917595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e5c9b9c8a7b7%3A0x6c8a7e5e5e5e5e5e!2s4%20Rue%20Papiau%20de%20la%20Verrie%2C%2049009%20Angers%2C%20France!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
           </div>
           
        </div>

        <!-- Form -->
        <div class="fade-up bg-white rounded-xl p-8 shadow-lg">
          <h3 class="font-montserrat font-bold text-lg text-gray-900 mb-6">{{ t.form_title }}</h3>
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[.78rem] font-semibold text-gray-500 mb-1.5">
                  {{ t.form_firstname }} *
                </label>
                <input
                  v-model="form.firstName"
                  type="text"
                  :placeholder="t.form_firstname_ph"
                  class="w-full border border-gray-200 rounded px-4 py-2.5 font-lato text-sm
                         outline-none transition-colors focus:border-[#e63946]"
                />
              </div>
              <div>
                <label class="block text-[.78rem] font-semibold text-gray-500 mb-1.5">
                  {{ t.form_lastname }} *
                </label>
                <input
                  v-model="form.lastName"
                  type="text"
                  :placeholder="t.form_lastname_ph"
                  class="w-full border border-gray-200 rounded px-4 py-2.5 font-lato text-sm
                         outline-none transition-colors focus:border-[#e63946]"
                />
              </div>
            </div>
             
            <div>
              <label class="block text-[.78rem] font-semibold text-gray-500 mb-1.5">
                {{ t.form_business }} *
              </label>
              <input
                v-model="form.business"
                type="text"
                :placeholder="t.form_business_ph"
                class="w-full border border-gray-200 rounded px-4 py-2.5 font-lato text-sm
                       outline-none transition-colors focus:border-[#e63946]"
              />
            </div>
            <div>
              <label class="block text-[.78rem] font-semibold text-gray-500 mb-1.5">
                {{ t.form_phone }} *
              </label>
              <input
                v-model="form.phone"
                type="tel"
                :placeholder="t.form_phone_ph"
                class="w-full border border-gray-200 rounded px-4 py-2.5 font-lato text-sm
                       outline-none transition-colors focus:border-[#e63946]"
              />
            </div>
            <div>
              <label class="block text-[.78rem] font-semibold text-gray-500 mb-1.5">
                {{ t.form_email }} *
              </label>
              <input
                v-model="form.email"
                type="email"
                :placeholder="t.form_email_ph"
                class="w-full border border-gray-200 rounded px-4 py-2.5 font-lato text-sm
                       outline-none transition-colors focus:border-[#e63946]"
              />
            </div>
            <!-- <select id="service" name="service">
                <option value="">-- Choisissez un service --</option>
                <option>Mise à jour du profil professionnel (220€)</option>
                <option>Liste des produits (290€)</option>
                <option>GMB Référencement local (460€)</option>
                <option>Service VIP (500€)</option>
                <option>Meta Optimisation (297€)</option>
                <option>Meta Ads Référencement (370€/an)</option>
                <option>Site Web Pro (1 500€)</option>
                <option>Site Web Réservation + Paiement (2 500€)</option>
                <option>PBX Online (25€/mois)</option>
              </select> -->
            <div>
              <label class="block text-[.78rem] font-semibold text-gray-500 mb-1.5">
                {{ t.form_message }}
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                :placeholder="t.form_message_ph"
                class="w-full border border-gray-200 rounded px-4 py-2.5 font-lato text-sm
                       outline-none transition-colors focus:border-[#e63946] resize-y"
              ></textarea>
            </div>
            <button class="btn-red w-full justify-center text-sm" @click="submit">
              <span v-if="!sent">{{ t.form_send }}</span>
              <span v-else>✓ {{ t.form_sent }}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const form = ref({ firstName: '', lastName: '', business: '', phone: '', email: '', message: '' })
const sent = ref(false)

const contactInfos = [
  {
    key: 'addr',
    labelKey: 'contact_addr',
    value: '4 Rue Papiau de la Verrie, 49009 Angers',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    key: 'phone',
    labelKey: 'contact_phone',
    value: '+33780773825',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    key: 'email',
    labelKey: 'contact_email',
    value: 'info.contact@disolutio.ltd',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  },
]

const socials = ['Facebook', 'Twitter', 'Youtube', 'Pinterest']

function submit() {
  const recipient = 'info.contact@disolutio.ltd'
  const subject = `Demande de contact - ${form.value.business || 'Sans entreprise'}`
  const body = [
    `Prénom: ${form.value.firstName}`,
    `Nom: ${form.value.lastName}`,
    `Entreprise: ${form.value.business}`,
    `Téléphone: ${form.value.phone}`,
    `Email: ${form.value.email}`,
    `Message: ${form.value.message}`,
  ].join('\n')

  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailto

  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.value = { firstName: '', lastName: '', business: '', phone: '', email: '', message: '' }
  }, 3000)
}
</script>
<style>

</style>