<script setup>
import CrosswindCalculator from './components/CrosswindCalculator.vue'
import FuelCalculator from './components/FuelCalculator.vue'
import DensityAltitudeCalculator from './components/DensityAltitudeCalculator.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-extrabold tracking-wider text-white">E6B FLIGHT COMPUTER</h1>
      <p class="text-slate-400 text-sm mt-1">Vue 3 Composition API Avionics Suite</p>
    </header>

    <!-- Kontejner za kalkulatore (3 stupca na velikim ekranima) -->
    <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CrosswindCalculator />
      <FuelCalculator />
      <DensityAltitudeCalculator />
    </div>
  </main>
</template>