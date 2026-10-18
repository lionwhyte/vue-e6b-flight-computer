<script setup>
import { ref } from 'vue'

const icaoInput = ref('LDSP')
const weatherData = ref(null)
const loading = ref(false)
const error = ref(null)

const fetchMetar = async () => {
  if (!icaoInput.value) return
  loading.value = true
  error.value = null
  weatherData.value = null

  try {
    // STARI URL (koji je bacao CORS grešku):
    // const response = await fetch(`https://aviationweather.gov/api/data/metar?ids=${icaoInput.value.toUpperCase()}&format=json`)

    // NOVI URL (koji prolazi kroz naš Vite proxy):
    const response = await fetch(`/api/weather/api/data/metar?ids=${icaoInput.value.toUpperCase()}&format=json`)
    if (!response.ok) throw new Error('Network response was not ok')
    
    const data = await response.json()
    if (data && data.length > 0) {
      weatherData.value = data[0]
    } else {
      error.value = 'No METAR found for this ICAO code.'
    }
  } catch (err) {
    error.value = 'Failed to fetch weather data. Check ICAO code or connection.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-xl max-w-2xl w-full mx-auto">
    <h2 class="text-2xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
      📡 Live METAR Weather Report
    </h2>
    <p class="text-slate-400 text-sm mb-6">Enter an ICAO airport code (e.g., LDSP, LDZA, KJFK) to get real-time aviation weather.</p>

    <div class="flex gap-3 mb-6">
      <input 
        type="text" 
        v-model="icaoInput" 
        maxlength="4" 
        placeholder="ICAO Code"
        class="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white uppercase font-bold tracking-wider w-32 focus:outline-none focus:border-cyan-500"
      />
      <button 
        @click="fetchMetar"
        class="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-bold transition duration-200 shadow-lg shadow-cyan-900/30"
      >
        {{ loading ? 'Fetching...' : 'Get Weather' }}
      </button>
    </div>

    <!-- Error message -->
    <div v-if="error" class="bg-red-950/50 border border-red-800 text-red-300 p-4 rounded-lg mb-4">
      {{ error }}
    </div>

    <!-- Rezultati -->
    <div v-if="weatherData" class="space-y-4">
      <div class="bg-slate-950 border border-slate-800 rounded-lg p-4">
        <span class="text-xs uppercase text-slate-500 tracking-wider block mb-1">Raw METAR Report</span>
        <p class="font-mono text-emerald-400 text-sm bg-slate-900 p-3 rounded border border-slate-800/80">
          {{ weatherData.rawOb }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Airport Name</span>
          <span class="text-slate-200 font-semibold text-sm">{{ weatherData.name }}</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Flight Category</span>
          <span :class="{
            'text-emerald-400 font-bold': weatherData.fltCat === 'VFR',
            'text-amber-400 font-bold': weatherData.fltCat === 'MVFR',
            'text-red-400 font-bold': weatherData.fltCat === 'IFR'
          }">{{ weatherData.fltCat }}</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Temperature</span>
          <span class="text-slate-200 font-semibold">{{ weatherData.temp }} °C (Dewp: {{ weatherData.dewp }} °C)</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Wind</span>
          <span class="text-slate-200 font-semibold">{{ weatherData.wdir }}° @ {{ weatherData.wspd }} kts</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Altimeter (Pressure)</span>
          <span class="text-slate-200 font-semibold">{{ weatherData.altim }} mb/hPa</span>
        </div>
        <div class="bg-slate-950 border border-slate-800 p-3 rounded-lg">
          <span class="text-slate-500 text-xs block">Visibility</span>
          <span class="text-slate-200 font-semibold">{{ weatherData.visib }} SM</span>
        </div>
      </div>
    </div>
  </div>
</template>