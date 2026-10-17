<script setup>
import { useFuelCalculator } from '../composables/useFuelCalculator'

const { groundSpeed, distance, fuelFlow, reserveMinutes, calculations } = useFuelCalculator()
</script>

<template>
  <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl max-w-md mx-auto mt-6">
    <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
      ⛽ Fuel, Time & Distance Calculator
    </h2>

    <div class="space-y-4">
      <!-- Ground Speed -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Ground Speed (GS): <span class="text-cyan-400 font-bold">{{ groundSpeed }} kts</span>
        </label>
        <input 
          type="number" min="1" max="500" v-model.number="groundSpeed"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Distance -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Distance (DIST): <span class="text-cyan-400 font-bold">{{ distance }} NM</span>
        </label>
        <input 
          type="number" min="1" max="5000" v-model.number="distance"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Fuel Flow -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Fuel Flow (GPH / LPH): <span class="text-cyan-400 font-bold">{{ fuelFlow }} units/hr</span>
        </label>
        <input 
          type="number" min="1" max="500" v-model.number="fuelFlow"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>

      <!-- Reserve Fuel Time -->
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">
          Reserve Time: <span class="text-cyan-400 font-bold">{{ reserveMinutes }} mins</span>
        </label>
        <input 
          type="number" min="0" max="180" v-model.number="reserveMinutes"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>
    </div>

    <!-- Kartica s rezultatima -->
    <div class="mt-6 bg-slate-900/80 border border-slate-700 rounded-lg p-4 space-y-3">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Time Enroute (ETE):</span>
        <span class="text-lg font-bold text-cyan-400">
          {{ calculations.hours }}h {{ calculations.minutes }}m
        </span>
      </div>

      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Trip Fuel:</span>
        <span class="text-lg font-bold text-amber-400">
          {{ calculations.tripFuel }} units
        </span>
      </div>

      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-slate-400">Reserve Fuel:</span>
        <span class="text-lg font-bold text-slate-300">
          {{ calculations.reserveFuel }} units
        </span>
      </div>

      <div class="flex justify-between items-center">
        <span class="text-slate-400">Total Fuel Required:</span>
        <span class="text-lg font-bold text-emerald-400">
          {{ calculations.totalFuel }} units
        </span>
      </div>
    </div>
  </div>
</template>