import { ref, computed } from 'vue'

export function useDensityAltitude() {
  const elevation = ref(1000)      // Nadmorska visina aerodroma (ft)
  const altimeter = ref(29.92)     // Tlak / Altimetar (inHg)
  const temperature = ref(20)      // Temperatura zraka (°C)

  const calculations = computed(() => {
    const elev = Number(elevation.value) || 0
    const alt = Number(altimeter.value) || 29.92
    const temp = Number(temperature.value) || 15

    // 1. Tlačna visina (Pressure Altitude) = Elevacija + (29.92 - Altimetar) * 1000
    const pressureAltitude = elev + (29.92 - alt) * 1000

    // 2. Standardna temperatura pri toj tlačnoj visini (Standard temp = 15°C - 2°C po svakih 1000 ft)
    const standardTemp = 15 - (2 * (pressureAltitude / 1000))

    // 3. Odstupanje od standardne temperature (ISA Deviation)
    const tempDeviation = temp - standardTemp

    // 4. Visina gustoće (Density Altitude) = Tlačna visina + (120 * Odstupanje temperature)
    const densityAltitude = pressureAltitude + (120 * tempDeviation)

    return {
      pressureAltitude: Math.round(pressureAltitude),
      standardTemp: standardTemp.toFixed(1),
      densityAltitude: Math.round(densityAltitude)
    }
  })

  return {
    elevation,
    altimeter,
    temperature,
    calculations
  }
}