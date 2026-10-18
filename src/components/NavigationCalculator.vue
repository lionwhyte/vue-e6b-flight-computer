<script setup>
import { useNavigationCalculator } from '../composables/useNavigationCalculator'

const { trueHeading, trueAirspeed, windDirection, windSpeed, calculations } = useNavigationCalculator()
</script>

<template>
  <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl max-w-md mx-auto mt-6">
    <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
      🧭 WCA, GS & Heading Calculator
    </h2>

    <div class="space-y-4">
      <!-- True Course / Heading -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          True Course (CRS): <span class="text-cyan-400 font-bold">{{ trueHeading }}°</span>
        </label>
        <input 
          type="number" min="0" max="360" v-model.number="trueHeading"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- True Airspeed (TAS) -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          True Airspeed (TAS): <span class="text-cyan-400 font-bold">{{ trueAirspeed }} kts</span>
        </label>
        <input 
          type="number" min="1" max="500" v-model.number="trueAirspeed"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Wind Direction -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Wind Direction (DIR): <span class="text-cyan-400 font-bold">{{ windDirection }}°</span>
        </label>
        <input 
          type="number" min="0" max="360" v-model.number="windDirection"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Wind Speed -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Wind Speed (KTS): <span class="text-cyan-400 font-bold">{{ windSpeed }} kts</span>
        </label>
        <input 
          type="number" min="0" max="100" v-model.number="windSpeed"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>
    </div>

    <!-- Rezultati -->
    <div class="mt-6 bg-slate-900/80 border border-slate-700 rounded-lg p-4 space-y-3">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Wind Correction Angle (WCA):</span>
        <span class="text-lg font-bold text-amber-400">
          {{ calculations.wca > 0 ? '+' + calculations.wca : calculations.wca }}°
        </span>
      </div>

      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Ground Speed (GS):</span>
        <span class="text-lg font-bold text-cyan-400">
          {{ calculations.groundSpeed }} kts
        </span>
      </div>

      <div class="flex justify-between items-center">
        <span class="text-slate-400">Heading to Steer (HDG):</span>
        <span class="text-lg font-bold text-emerald-400">
          {{ calculations.heading }}°
        </span>
      </div>
    </div>
  </div>
</template>