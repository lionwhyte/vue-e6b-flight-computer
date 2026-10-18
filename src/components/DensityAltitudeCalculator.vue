<script setup>
import { useDensityAltitude } from '../composables/useDensityAltitude'

const { elevation, altimeter, temperature, calculations } = useDensityAltitude()
</script>

<template>
  <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl max-w-md w-full mx-auto mt-6">
    <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
      🌡️ Density Altitude Calculator
    </h2>

    <div class="space-y-4">
      <!-- Field Elevation -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Field Elevation: <span class="text-cyan-400 font-bold">{{ elevation }} ft</span>
        </label>
        <input 
          type="number" min="-1000" max="15000" v-model.number="elevation"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Altimeter Setting -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Altimeter Setting: <span class="text-cyan-400 font-bold">{{ altimeter }} inHg</span>
        </label>
        <input 
          type="number" step="0.01" min="20.00" max="32.00" v-model.number="altimeter"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Temperature -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Temperature: <span class="text-cyan-400 font-bold">{{ temperature }} °C</span>
        </label>
        <input 
          type="number" min="-50" max="60" v-model.number="temperature"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>
    </div>

    <!-- Rezultati -->
    <div class="mt-6 bg-slate-900/80 border border-slate-700 rounded-lg p-4 space-y-3">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Pressure Altitude:</span>
        <span class="text-lg font-bold text-slate-200">
          {{ calculations.pressureAltitude }} ft
        </span>
      </div>

      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Standard Temp:</span>
        <span class="text-lg font-bold text-slate-400">
          {{ calculations.standardTemp }} °C
        </span>
      </div>

      <div class="flex justify-between items-center">
        <span class="text-slate-400">Density Altitude (DA):</span>
        <span class="text-lg font-bold text-amber-400">
          {{ calculations.densityAltitude }} ft
        </span>
      </div>
    </div>
  </div>
</template>