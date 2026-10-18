<script setup>
import { useWeatherStore } from '../stores/useWeatherStore'

const weatherStore = useWeatherStore()
</script>

<template>
  <div class="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-xl max-w-2xl w-full mx-auto">
    <h2 class="text-2xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
      📡 Live METAR Weather Report (Pinia State)
    </h2>
    <p class="text-slate-400 text-sm mb-6">Enter an ICAO airport code. Your data will persist even if you switch tabs!</p>

    <div class="flex gap-3 mb-6">
      <input 
        type="text" 
        v-model="weatherStore.icaoInput" 
        maxlength="4" 
        placeholder="ICAO Code"
        class="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white uppercase font-bold tracking-wider w-32 focus:outline-none focus:border-cyan-500"
      />
      <button 
        @click="weatherStore.fetchMetar()"
        class="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-bold transition duration-200 shadow-lg shadow-cyan-900/30"
      >
        {{ weatherStore.loading ? 'Fetching...' : 'Get Weather' }}
      </button>
    </div>

    <!-- Error message -->
    <div v-if="weatherStore.error" class="bg-red-950/50 border border-red-800 text-red-300 p-4 rounded-lg mb-4">
      {{ weatherStore.error }}
    </div>

    <!-- Rezultati -->
    <div v-if="weatherStore.weatherData" class="space-y-4">
      <div class="bg-slate-950 border border-slate-800 rounded-lg p-4">
        <span class="text-xs uppercase text-slate-500 tracking-wider block mb-1">Raw METAR Report</span>
        <p class="font-mono text-emerald-400 text-sm bg-slate-900 p-3 rounded border border-slate-800/80">
          {{ weatherStore.weatherData.rawOb }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Airport Name</span>
          <span class="text-slate-200 font-semibold text-sm">{{ weatherStore.weatherData.name }}</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Flight Category</span>
          <span :class="{
            'text-emerald-400 font-bold': weatherStore.weatherData.fltCat === 'VFR',
            'text-amber-400 font-bold': weatherStore.weatherData.fltCat === 'MVFR',
            'text-red-400 font-bold': weatherStore.weatherData.fltCat === 'IFR'
          }">{{ weatherStore.weatherData.fltCat }}</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Temperature</span>
          <span class="text-slate-200 font-semibold">{{ weatherStore.weatherData.temp }} °C (Dewp: {{ weatherStore.weatherData.dewp }} °C)</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Wind</span>
          <span class="text-slate-200 font-semibold">{{ weatherStore.weatherData.wdir }}° @ {{ weatherStore.weatherData.wspd }} kts</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Altimeter (Pressure)</span>
          <span class="text-slate-200 font-semibold">{{ weatherStore.weatherData.altim }} mb/hPa</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Visibility</span>
          <span class="text-slate-200 font-semibold">{{ weatherStore.weatherData.visib }} SM</span>
        </div>
      </div>
    </div>
  </div>
</template>