<script setup>
import CrosswindCalculator from './components/CrosswindCalculator.vue'
import FuelCalculator from './components/FuelCalculator.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-extrabold tracking-wider text-white">E6B FLIGHT COMPUTER</h1>
      <p class="text-slate-400 text-sm mt-1">Vue 3 Composition API Avionics Suite</p>
    </header>

    <!-- Kontejner za kalkulatore -->
    <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <CrosswindCalculator />
      <FuelCalculator />
    </div>
  </main>
</template>