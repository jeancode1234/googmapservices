<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div
        v-if="service"
        class="fixed inset-0 z-[600] bg-black/60 flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <div
          class="bg-white rounded-2xl w-full max-w-[490px] p-8 relative shadow-2xl modal-pop"
        >
          <!-- Close -->
          <button
            class="absolute top-4 right-4 bg-transparent border-0 cursor-pointer text-gray-300 text-xl leading-none transition-colors hover:text-[#e63946]"
            @click="$emit('close')"
            aria-label="Fermer"
          >
            ✕
          </button>

          <!-- Header -->
          <h2 class="font-montserrat font-extrabold text-lg text-gray-900 mb-1">
            Service Indisponible
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">
            Le système n'est pas disponible pour le moment. contactez-nous par ce numero <span class="text-red-600">+33 7 80 77 38 25</span> pour plus d'informations.
          </p>
          
          <!-- Message -->
          <div class="text-center">
            <p class="text-gray-600">Veuillez réessayer plus tard.</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({ service: { type: Object, required: true } });
defineEmits(["close"]);
</script>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.25s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>