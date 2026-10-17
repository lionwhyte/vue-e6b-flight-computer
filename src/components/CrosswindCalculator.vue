<script setup>
import { useCrosswind } from '../composables/useCrosswind'

const { runwayHeadingNumber, runwayDegrees, windDirection, windSpeed, results } = useCrosswind()
</script>

<template>
  <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl max-w-md mx-auto mt-6">
    <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
      ✈️ Wind & Runway Component Calculator
    </h2>

    <div class="space-y-4">
      <!-- Smjer piste -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Runway: <span class="text-cyan-400 font-bold">RWY {{ runwayHeadingNumber < 10 ? '0' + runwayHeadingNumber : runwayHeadingNumber }} ({{ runwayDegrees }}°)</span>
        </label>
        <input 
          type="range" min="1" max="36" v-model.number="runwayHeadingNumber"
          class="w-full accent-cyan-500 bg-slate-700 rounded-lg cursor-pointer"
        />
      </div>

      <!-- Smjer vjetra -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Wind Direction: <span class="text-cyan-400 font-bold">{{ windDirection }}°</span>
        </label>
        <input 
          type="number" min="0" max="360" v-model.number="windDirection"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Brzina vjetra -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Wind Speed: <span class="text-cyan-400 font-bold">{{ windSpeed }} kts</span>
        </label>
        <input 
          type="range" min="0" max="60" v-model.number="windSpeed"
          class="w-full accent-cyan-500 bg-slate-700 rounded-lg cursor-pointer"
        />
      </div>
    </div>

    <!-- Prikaz rezultata -->
    <div class="mt-6 bg-slate-900/80 border border-slate-700 rounded-lg p-4 space-y-3">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Crosswind:</span>
        <span class="text-lg font-bold text-amber-400">
          {{ results.crosswind }} kts 
          <span class="text-xs font-normal text-slate-400">({{ results.crosswindType }})</span>
        </span>
      </div>

      <div class="flex justify-between items-center">
        <span class="text-slate-400">Head/Tail Component:</span>
        <span 
          class="text-lg font-bold" 
          :class="results.headwindType === 'Headwind' ? 'text-emerald-400' : 'text-rose-400'"
        >
          {{ results.headwind }} kts 
          <span class="text-xs font-normal text-slate-400">({{ results.headwindType }})</span>
        </span>
      </div>
    </div>
  </div>
</template>