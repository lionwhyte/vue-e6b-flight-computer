import { ref, computed } from 'vue'

export function useTASCalculator() {
  const indicatedAirspeed = ref(100) // IAS (kts)
  const pressureAltitude = ref(5000)  // Altitude (ft)
  const temperature = ref(10)        // Temperature (°C)

  const calculations = computed(() => {
    const ias = Number(indicatedAirspeed.value) || 0
    const alt = Number(pressureAltitude.value) || 0
    const temp = Number(temperature.value) || 0

    if (ias <= 0) return { tas: 0, ruleOfThumbTAS: 0 }

    // Pravilo palca (Rule of thumb): TAS raste za cca 2% po svakih 1000 ft visine
    const ruleOfThumbTAS = Math.round(ias * (1 + (alt / 1000) * 0.02))

    // Precizniji izračun s korekcijom za odstupanje od ISA (Standard Temp):
    // Standardna temp na toj visini = 15 - (2 * alt / 1000)
    const isaTemp = 15 - (2 * (alt / 1000))
    const tempDiff = temp - isaTemp

    // Korekcija brzine: ~1% po svakih 6°C odstupanja od ISA
    const densityCorrection = 1 + (alt / 1000) * 0.02 + (tempDiff / 6) * 0.01
    const preciseTAS = Math.round(ias * densityCorrection)

    return {
      ruleOfThumbTAS,
      tas: Math.max(0, preciseTAS)
    }
  })

  return {
    indicatedAirspeed,
    pressureAltitude,
    temperature,
    calculations
  }
}