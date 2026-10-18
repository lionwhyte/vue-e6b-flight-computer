<script setup>
import { ref, computed } from 'vue'

const value = ref(100)
const conversionType = ref('nmToKm')

const result = computed(() => {
  const val = Number(value.value) || 0
  switch (conversionType.value) {
    case 'nmToKm': return (val * 1.852).toFixed(2) + ' km'
    case 'kmToNm': return (val / 1.852).toFixed(2) + ' NM'
    case 'ktsToKmh': return (val * 1.852).toFixed(2) + ' km/h'
    case 'kmhToKts': return (val / 1.852).toFixed(2) + ' kts'
    case 'galToLit': return (val * 3.78541).toFixed(2) + ' Liters'
    case 'litToGal': return (val / 3.78541).toFixed(2) + ' Gallons'
    default: return ''
  }
})
</script>

<template>
  <div class="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl max-w-md mx-auto mt-6">
    <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
      🔄 Aviation Unit Converter
    </h2>

    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">Conversion Type</label>
        <select 
          v-model="conversionType"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        >
          <option value="nmToKm">Nautical Miles (NM) ➔ Kilometers (km)</option>
          <option value="kmToNm">Kilometers (km) ➔ Nautical Miles (NM)</option>
          <option value="ktsToKmh">Knots (kts) ➔ km/h</option>
          <option value="kmhToKts">km/h ➔ Knots (kts)</option>
          <option value="galToLit">Gallons (gal) ➔ Liters (L)</option>
          <option value="litToGal">Liters (L) ➔ Gallons (gal)</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-300 mb-1">Value to Convert</label>
        <input 
          type="number" v-model.number="value"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>
    </div>

    <!-- Rezultat -->
    <div class="mt-6 bg-slate-900/80 border border-slate-700 rounded-lg p-4 text-center">
      <span class="text-slate-400 text-sm block mb-1">Converted Result:</span>
      <span class="text-2xl font-extrabold text-emerald-400">
        {{ result }}
      </span>
    </div>
  </div>
</template>