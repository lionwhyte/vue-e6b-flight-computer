<script setup>
import { useTASCalculator } from '../composables/useTASCalculator'

const { indicatedAirspeed, pressureAltitude, temperature, calculations } = useTASCalculator()
</script>

<template>
  <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl max-w-md w-full mx-auto mt-6">
    <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
      ✈️ True Airspeed (TAS) Calculator
    </h2>

    <div class="space-y-4">
      <!-- Indicated Airspeed (IAS) -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Indicated Airspeed (IAS): <span class="text-cyan-400 font-bold">{{ indicatedAirspeed }} kts</span>
        </label>
        <input 
          type="number" min="1" max="500" v-model.number="indicatedAirspeed"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Pressure Altitude -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Pressure Altitude: <span class="text-cyan-400 font-bold">{{ pressureAltitude }} ft</span>
        </label>
        <input 
          type="number" min="0" max="45000" step="500" v-model.number="pressureAltitude"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Outside Air Temp (OAT) -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Outside Air Temp (OAT): <span class="text-cyan-400 font-bold">{{ temperature }} °C</span>
        </label>
        <input 
          type="number" min="-60" max="50" v-model.number="temperature"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>
    </div>

    <!-- Rezultati -->
    <div class="mt-6 bg-slate-900/80 border border-slate-700 rounded-lg p-4 space-y-3">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Rule of Thumb TAS (+2%/1000ft):</span>
        <span class="text-lg font-bold text-slate-300">
          {{ calculations.ruleOfThumbTAS }} kts
        </span>
      </div>

      <div class="flex justify-between items-center">
        <span class="text-slate-400">Calculated True Airspeed (TAS):</span>
        <span class="text-2xl font-extrabold text-emerald-400">
          {{ calculations.tas }} kts
        </span>
      </div>
    </div>
  </div>
</template>